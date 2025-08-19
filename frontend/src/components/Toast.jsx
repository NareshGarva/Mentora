import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

let notifyExternal;

const Toast = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    notifyExternal = (
      message,
      type = "info",
      duration = 5000,
      options = {}
    ) => {
      const id = Date.now() + Math.random();
      const {
        code = null,
        description = null,
        persistent = false,
        action = null,
        icon = null,
        position = "bottom-center"
      } = options;

      const formattedMessage = formatMessageWithLinks(message || "");
      const formattedDescription = formatMessageWithLinks(description || "");

      setNotifications((prev) => [
        ...prev,
        {
          id,
          type,
          message: formattedMessage,
          code,
          description:formattedDescription,
          persistent,
          action,
          icon,
          position,
          createdAt: new Date().toLocaleTimeString()
        },
      ]);

      if (!persistent && duration > 0) {
        setTimeout(() => {
          setNotifications((prev) => prev.filter((n) => n.id !== id));
        }, duration);
      }
    };

    return () => {
      notifyExternal = null;
    };
  }, []);

  const removeNotification = useCallback((id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  }, []);

  const clearAll = useCallback(() => {
    setNotifications([]);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {/* Bottom Center */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-3 max-w-md w-full px-4">
        <AnimatePresence mode="popLayout">
          {notifications
            .filter(note => !note.position || note.position === "bottom-center")
            .map((note) => (
              <ToastItem
                key={note.id}
                note={note}
                onRemove={removeNotification}
                position="bottom"
              />
            ))}
        </AnimatePresence>
      </div>

      {/* Top Right */}
      <div className="fixed top-6 right-6 flex flex-col items-end space-y-3 max-w-md w-full px-4">
        <AnimatePresence mode="popLayout">
          {notifications
            .filter(note => note.position === "top-right")
            .map((note) => (
              <ToastItem
                key={note.id}
                note={note}
                onRemove={removeNotification}
                position="top"
              />
            ))}
        </AnimatePresence>
      </div>

      {/* Clear All Button */}
      {notifications.length > 2 && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={clearAll}
          className="fixed bottom-20 right-6 pointer-events-auto bg-gray-800 text-white px-3 py-1 rounded-full text-xs font-medium hover:bg-gray-700 transition-colors shadow-lg"
        >
          Clear All ({notifications.length})
        </motion.button>
      )}
    </div>
  );
};

const ToastItem = ({ note, onRemove, position }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (note.persistent) return;
    
    const duration = 5000; // 5 seconds
    const interval = 50; // Update every 50ms
    const decrement = (100 * interval) / duration;
    
    const timer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev - decrement;
        if (newProgress <= 0) {
          clearInterval(timer);
          onRemove(note.id);
          return 0;
        }
        return newProgress;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [note.id, note.persistent, onRemove]);

  const getTypeStyles = (type) => {
    const styles = {
      success: {
        bg: "bg-emerald-50/95 border-emerald-200/60",
        text: "text-emerald-800",
        progress: "bg-emerald-500",
        icon: "text-emerald-600"
      },
      error: {
        bg: "bg-red-50/95 border-red-200/60",
        text: "text-red-800",
        progress: "bg-red-500",
        icon: "text-red-600"
      },
      warning: {
        bg: "bg-amber-50/95 border-amber-200/60",
        text: "text-amber-800",
        progress: "bg-amber-500",
        icon: "text-amber-600"
      },
      info: {
        bg: "bg-blue-50/95 border-blue-200/60",
        text: "text-blue-800",
        progress: "bg-blue-500",
        icon: "text-blue-600"
      }
    };
    return styles[type] || styles.info;
  };

  const typeStyles = getTypeStyles(note.type);

  const variants = {
    initial: position === "bottom" 
      ? { opacity: 0, y: 50, scale: 0.9 }
      : { opacity: 0, x: 50, scale: 0.9 },
    animate: { 
      opacity: 1, 
      y: 0, 
      x: 0, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: position === "bottom"
      ? { 
          opacity: 0, 
          y: -20, 
          scale: 0.95,
          transition: { duration: 0.2 }
        }
      : { 
          opacity: 0, 
          x: 50, 
          scale: 0.95,
          transition: { duration: 0.2 }
        }
  };

  return (
    <motion.div
      layout
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        relative pointer-events-auto overflow-hidden
        ${typeStyles.bg} ${typeStyles.text}
        border backdrop-blur-xl shadow-lg
        rounded-xl p-4 min-w-[300px] max-w-md
        hover:shadow-xl transition-all duration-200
        ${isHovered ? 'scale-105' : ''}
      `}
    >
      {/* Progress bar */}
      {!note.persistent && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/5">
          <motion.div
            className={`h-full ${typeStyles.progress} opacity-60`}
            initial={{ width: "100%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.05, ease: "linear" }}
          />
        </div>
      )}

      {/* Close button */}
      <button
        onClick={() => onRemove(note.id)}
        className="absolute top-2 right-2 p-1 rounded-full hover:bg-black/10 transition-colors opacity-60 hover:opacity-100"
      >
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="flex items-start space-x-3 pr-6">
        {/* Icon */}
        <div className={`flex-shrink-0 ${typeStyles.icon} mt-0.5`}>
          {note.icon || getDefaultIcon(note.type)}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div
            className="font-semibold text-sm leading-tight mb-1"
            dangerouslySetInnerHTML={{ __html: note.message }}
          />
          
          {note.description && (
            <div className="text-xs opacity-80 mb-2">
              {note.description}
            </div>
          )}

          {note.code && (
            <div className="text-[10px] opacity-60 font-mono bg-black/5 px-2 py-1 rounded mb-2">
              Code: {note.code}
            </div>
          )}

          {/* Action button */}
          {note.action && (
            <button
              onClick={note.action.onClick}
              className="text-xs font-medium underline hover:no-underline mt-1 opacity-80 hover:opacity-100"
            >
              {note.action.label}
            </button>
          )}

          {/* Timestamp */}
          <div className="text-[10px] opacity-50 mt-1">
            {note.createdAt}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Format message and turn URLs/routes into clickable links
function formatMessageWithLinks(message) {
  if (!message) return "";
  return message.replace(/(https?:\/\/[^\s]+|\/[^\s]+)/g, (match) => {
    try {
      const isRoute = match.startsWith("/");
      const url = isRoute ? `${window.location.origin}${match}` : match;
      let linkText;

      if (isRoute) {
        linkText = match.replace(/^\//, "").split("/")[0] || "home";
      } else {
        const hostnameParts = new URL(match).hostname.split(".");
        linkText =
          hostnameParts.length >= 2
            ? hostnameParts[hostnameParts.length - 2]
            : new URL(match).hostname;
      }

      return `<a href="${url}" target="_blank" class="font-medium underline hover:no-underline">${linkText}</a>`;
    } catch {
      return match;
    }
  });
}

// Default icons for each type
function getDefaultIcon(type) {
  const iconClass = "w-5 h-5";
  
  switch (type) {
    case "success":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case "error":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      );
    case "warning":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      );
    default:
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
  }
}

export default Toast;
// Enhanced external function to trigger toast
export function showToast(message, type = "info", duration = 5000, options = {}) {
  if (notifyExternal) {
    notifyExternal(message, type, duration, options);
  } else {
    console.warn("Toast component not mounted yet.");
  }
}


