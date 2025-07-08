import React from 'react'
import Avatar from './Avatar';

function NotificationDropdown() {
    const isReaded = false;
  return (
    <div className='min-w-full border border-gray-300 rounded-lg bg-white'>
<div className='flex justify-between items-end px-3 pt-3'>
    <p className='font-semibold'>Notification</p>
    <p className='text-xs text-gray-400'>5 messages unread</p>
</div>
<hr className="text-gray-400 mt-2"/>
<div className='h-60 bg-gray-100 p-3 overflow-y-auto scroll-smooth'>
<div className='flex items-start justify-left gap-3 border-b border-gray-400 p-2 mb-1 transition-all ease-in-out duration-300 hover:bg-gray-200 rounded '>
    <Avatar/>
    <div className='w-full'>
    <div className='title flex items-start justify-between'>
        <p className='font-semibold text-sm'>This is title</p>
        <p className='text-gray-400 text-xs'>{isReaded ? '':'unreaded'}</p>
    </div>
    <p className='text-xs text-gray-700'>This is message</p>
</div>
</div>
<div className='flex items-start justify-left gap-3 border-b border-gray-400 p-2 mb-1 transition-all ease-in-out duration-300 hover:bg-gray-200 rounded '>
    <Avatar/>
    <div className='w-full'>
    <div className='title flex items-start justify-between'>
        <p className='font-semibold text-sm'>This is title</p>
        <p className='text-gray-400 text-xs'>{isReaded ? '':'unreaded'}</p>
    </div>
    <p className='text-xs text-gray-700'>This is message</p>
</div>
</div>
<div className='flex items-start justify-left gap-3 border-b border-gray-400 p-2 mb-1 transition-all ease-in-out duration-300 hover:bg-gray-200 rounded '>
    <Avatar/>
    <div className='w-full'>
    <div className='title flex items-start justify-between'>
        <p className='font-semibold text-sm'>This is title</p>
        <p className='text-gray-400 text-xs'>{isReaded ? '':'unreaded'}</p>
    </div>
    <p className='text-xs text-gray-700'>This is message</p>
</div>
</div>
<div className='flex items-start justify-left gap-3 border-b border-gray-400 p-2 mb-1 transition-all ease-in-out duration-300 hover:bg-gray-200 rounded '>
    <Avatar/>
    <div className='w-full'>
    <div className='title flex items-start justify-between'>
        <p className='font-semibold text-sm'>This is title</p>
        <p className='text-gray-400 text-xs'>{isReaded ? '':'unreaded'}</p>
    </div>
    <p className='text-xs text-gray-700'>This is message</p>
</div>
</div>
<div className='flex items-start justify-left gap-3 border-b border-gray-400 p-2 mb-1 transition-all ease-in-out duration-300 hover:bg-gray-200 rounded '>
    <Avatar/>
    <div className='w-full'>
    <div className='title flex items-start justify-between'>
        <p className='font-semibold text-sm'>This is title</p>
        <p className='text-gray-400 text-xs'>{isReaded ? '':'unreaded'}</p>
    </div>
    <p className='text-xs text-gray-700'>This is message</p>
</div>
</div>
<div className='flex items-start justify-left gap-3 border-b border-gray-400 p-2 mb-1 transition-all ease-in-out duration-300 hover:bg-gray-200 rounded '>
    <Avatar/>
    <div className='w-full'>
    <div className='title flex items-start justify-between'>
        <p className='font-semibold text-sm'>This is title</p>
        <p className='text-gray-400 text-xs'>{isReaded ? '':'unreaded'}</p>
    </div>
    <p className='text-xs text-gray-700'>This is message</p>
</div>
</div>
<div className='flex items-start justify-left gap-3 border-b border-gray-400 p-2 mb-1 transition-all ease-in-out duration-300 hover:bg-gray-200 rounded '>
    <Avatar/>
    <div className='w-full'>
    <div className='title flex items-start justify-between'>
        <p className='font-semibold text-sm'>This is title</p>
        <p className='text-gray-400 text-xs'>{isReaded ? '':'unreaded'}</p>
    </div>
    <p className='text-xs text-gray-700'>This is message</p>
</div>
</div>
<div className='flex items-start justify-left gap-3 border-b border-gray-400 p-2 mb-1 transition-all ease-in-out duration-300 hover:bg-gray-200 rounded '>
    <Avatar/>
    <div className='w-full'>
    <div className='title flex items-start justify-between'>
        <p className='font-semibold text-sm'>This is title</p>
        <p className='text-gray-400 text-xs'>{isReaded ? '':'unreaded'}</p>
    </div>
    <p className='text-xs text-gray-700'>This is message</p>
</div>
</div>
</div>
<hr className="text-gray-400"/>
<div className='p-3 flex justify-between items-center'>
    <a href="">Make all read</a>
    <a href="">delete All</a>
</div>
    </div>
  )
}

export default NotificationDropdown