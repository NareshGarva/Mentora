import React from 'react'

const LearningStatsCard = ({completed_sessions=0, upcoming_sessions=0, learning_hours=0}) => {
    return (
        <div className='bg-white text-black flex flex-col gap-6 rounded-xl border border-m-gray-300 p-8'>
            <div className="card-heading-container flex items-center space-x-2 text-xl font-bold">
                <h1 >Learning Stats</h1>
            </div>
            <div className="stat-cards-container grid grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-4">
                <div className="flex flex-col rounded-sm p-4 justify-center items-center stat-card bg-blue-100">
                    <span className='text-2xl text-blue-500'>{completed_sessions}    </span>
                    <p className='text-m-gray-500'>Sessions Completed</p>
                </div>
                <div className="flex flex-col rounded-sm p-4 justify-center items-center stat-card bg-orange-100">
                    <span className='text-2xl text-orange-500'>{upcoming_sessions}    </span>
                    <p className='text-m-gray-500'>Sessions ahead</p>
                </div>
                <div className="flex flex-col rounded-sm p-4 justify-center items-center stat-card bg-green-100">
                    <span className='text-2xl text-green-500'>{learning_hours}    </span>
                    <p className='text-m-gray-500'>Hours of Learning</p>
                </div>
            </div>
        </div>
    )
}

export default LearningStatsCard
