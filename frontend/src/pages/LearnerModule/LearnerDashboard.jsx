import React from "react";
import { CalendarCheck } from "lucide-react";

const LearnerDashboard = (props) => {
    const receivedData = {};

    return (
        <div className="page-background bg-white w-screen">
            <div className="center-it p-12 flex flex-col gap-4 w-full h-screen">
                <p className="text-4xl font-bold">
                    Welcome back,{" "}
                    <span className="bg-gradient-to-r from-secondary-500 to-primary-600 text-transparent bg-clip-text">
                        {props.Learner_name || "John"}
                    </span>
                </p>
                {/* Page subtext */}
                <p className=" text-m-gray-500">
                    Continue your learning journey with personalized mentorship
                </p>
                {/* Dashboard cards Container */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                    {/* Dashboard Card 1 */}
                    <div className="shadow-sm p-6 bg-gradient-to-tr from-secondary-100 to-secondary-300 border-1 border-secondary-400 w-full rounded-xl h-full">

                    {/* Dashboard Card icon wrapper */}
                        <div className="p-3">
                            <CalendarCheck className="w-[2rem] h-[2rem]" />
                        </div>

                    {/* Dashboard Card text */}
                        <div className="dashboard-card-1-text flex flex-col h-auto">
                            <p className="dashboard-card-1-heading  text-base text-m-gray-600">
                                Total Sessions
                            </p>
                            <p className="dashboard-card-1-content text-2xl text-black font-bold">
                                {receivedData.totalSessions || 0}
                            </p>
                        </div>
                    </div>




                    {/* Dashboard Card 2 */}
                    <div className="shadow-sm p-6 bg-gradient-to-tr from-primary-100 to bg-white w-full rounded-xl h-fit flex gap-4 items-center">

                    {/* Dashboard Card icon wrapper */}
                        <div className="p-3 bg-gradient-to-tr from-primary-200 to-primary-200 w-fit h-fit rounded-2xl">
                            <CalendarCheck className="w-[2rem] h-[2rem]  stroke-primary-600" />
                        </div>

                    {/* Dashboard Card text */}
                        <div className="dashboard-card-1-text flex flex-col h-auto">
                            <p className="dashboard-card-1-heading  text-base text-m-gray-600">
                                Sessions attended
                            </p>
                            <p className="dashboard-card-1-content text-2xl text-black font-bold">
                                {receivedData.sessionsAttended || 0}
                            </p>
                        </div>
                    </div>
                    {/* Dashboard Card 2 */}
                    <div className="shadow-sm p-6 bg-gradient-to-tr from-primary-100 to bg-white w-full rounded-xl h-full">

                    {/* Dashboard Card icon wrapper */}
                        <div className="p-3 bg-primary-100 w-fit h-fit rounded-2xl">
                            <CalendarCheck className="w-[2rem] h-[2rem] stroke-primary-600" />
                        </div>

                    {/* Dashboard Card text */}
                        <div className="dashboard-card-1-text flex flex-col h-auto mt-4">
                            <p className="dashboard-card-1-heading  text-base text-m-gray-600">
                                Sessions attended
                            </p>
                            <p className="dashboard-card-1-content text-2xl text-black font-bold">
                                {receivedData.sessionsAttended || 0}
                            </p>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    );
};

export default LearnerDashboard;
