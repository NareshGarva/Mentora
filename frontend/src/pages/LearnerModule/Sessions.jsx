import React from 'react'
import SessionList from './components/SessionList'
import LearnerSidebar from './LearnerSidebar'

const Sessions = (props) => {
    return (
        <div className='flex flex-col w-full justify-center p-12 bg-secondary-50'>
            <div className="page-content ">
                <p className='page-heading my-4 font-bold text-3xl'>Sessions</p>
                <p className='page-sub-heading mt-9 mb-6 font-bold text-2xl'>Upcoming Sessions</p>
                <div className="session-list-container flex flex-col gap-4">
                    <SessionList {...props} />
                    <SessionList {...props} />
                    <SessionList {...props} />
                    <SessionList {...props} />
                </div>
                <p className='page-sub-heading mt-9 mb-6 font-bold text-2xl'>Past Sessions</p>
                <div className="session-list-container flex flex-col gap-4">
                    <SessionList {...props} />
                    <SessionList {...props} />
                    <SessionList {...props} />
                    <SessionList {...props} />
                </div>
            </div>
        </div>
    )
}

export default Sessions
