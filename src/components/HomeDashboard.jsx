import React from "react";
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { FaArrowUp } from "react-icons/fa6";



export function HomeDashboard() {


  
    return (
        <>
            <main className="bg-zinc-100 w-full ">


                <div className="p-6 flex flex-col items-center space-y-5 justify-center">
                    <p className="text-3xl font-bold font-mono text-pink-600">Doflamingo Dashboard</p>
                    <h2 className="text-3xl font-normal">Issues List</h2>
                </div>

                <div className="grid grid-rows-auto grid-cols-3 lg:grid-cols-2 items-center content-center justify-items-center p-10 gap-2">


                    <div className=" xl:col-span-2 md:col-span-3 shadow-sm rounded-md bg-zinc-50">
                        <h2 className="text-2xl pt-5 flex items-center justify-center text-opacity-80 font-semibold text-pink-600">Registered Products Statistics</h2>
                        <BarChart
                            xAxis={[{ scaleType: 'band', data: ['Month 1', 'Month 2', 'Month 3'] }]}
                            series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }, { data: [2, 6, 4] }, { data: [2, 3, 2] }]}
                            width={1000}
                            height={420}
                        />
                    </div>


                <div>
                        <div className=" bg-zinc-50 h-[22rem] rounded-t-md flex flex-col">
                        <h2 className="text-xl pt-3 ps-5 font-semibold text-opacity-80  text-pink-600">Total Sales Unit</h2>
                        <PieChart
                            series={[
                                {
                                    data: [
                                        { id: 0, value: 10, label: 'product A' },
                                        { id: 1, value: 15, label: 'product B' },
                                        { id: 2, value: 20, label: 'product C' },
                                        { id: 3, value: 16, label: 'product D' },
                                        { id: 4, value: 5, label: 'product E' },
                                    ],
                                },
                            ]}
                            width={400}
                            height={200}
                            />
                    </div>

                        <div className="w-full h-36 rounded-b-md shadow-md flex justify-evenly bg-zinc-700 text-balance mb-5 p-5">
                            <div className="flex flex-col items-center justify-center">
                                <p className="font-mono tracking-tighter text-xs text-white font-extrabold">This Month Revenue</p>
                                <h2 className="flex items-center gap-2 text-white font-semibold text-3xl">
                                    $56k
                                <FaArrowUp className="text-xl text-green-600 mt-5 animate-bounce"/>
                                </h2>
                            </div>

                            <div className="flex flex-col items-center justify-center">
                                <p className="font-mono tracking-tighter text-xs text-white text-opacity-40">This Month Revenue</p>
                                <h2 className="text-white font-semibold text-3xl text-opacity-40">
                                    $43k
                                </h2>
                            </div>

                        </div>
                </div>


                        <div className="grid col-span-2 bg-zinc-50 w-full h-32 rounded-md shadow-sm">
                            <div className="flex items-center justify-around">
                            <h2 className="text-2xl flex-col flex font-semibold text-black">download your earning report
                                <p className="text-sm text-zinc-400/75 font-thin">There are many variantions of passages</p>
                            </h2>
                            <button className="text-lg bg-pink-500 rounded-full shadow-lg hover:shadow-pink-400/50 shadow-pink-500/50 hover:bg-pink-300 px-5 p-2 text-white">Create Report</button>
                            </div>
                        </div>

                        <div className="grid col-span-3 bg-zinc-50 w-full h-32 rounded-md shadow-sm">
                            <div className="grid grid-cols-3">
                            <div>Summary</div>
                            <div>Total Products Registered</div>
                            </div>
                        </div>
                            


                    <div className="shadow-sm  bg-white rounded-md">
                        <h2 className="text-xl pt-5 flex items-center ps-5 text-opacity-80 font-semibold text-pink-600">Daily Sales</h2>


                        <LineChart
                            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                            series={[
                                {
                                    data: [0, 4, 1.5, 2, 1.5, 5],
                                },
                            ]}
                            width={400}
                            height={300}
                        />
                    </div>       
                </div>
            </main>
        </>
        
    )
   
}

export default HomeDashboard