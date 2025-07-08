let isDropdownClickedOpen = false;

export const handleToggleClick = (containerId) => {
  const dropdown = document.getElementById(containerId);
  isDropdownClickedOpen = !isDropdownClickedOpen;
  if (isDropdownClickedOpen) {
    dropdown.classList.remove('hidden');
  } else {
    dropdown.classList.add('hidden');
  }
};

export const handleMouseOver = (containerId) => {
  if (!isDropdownClickedOpen) {
    const dropdown = document.getElementById(containerId);
    dropdown.classList.remove('hidden');
  }
};

export const handleMouseLeave = (containerId) => {
  if (!isDropdownClickedOpen) {
    const dropdown = document.getElementById(containerId);
    dropdown.classList.add('hidden');
  }
};