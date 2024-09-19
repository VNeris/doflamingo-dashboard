import React from "react";
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { Gauge } from '@mui/x-charts/Gauge';


export function HomeDashboard() {
    return (
        <>
        <main className="bg-white w-auto my-6 rounded-sm ">

                
                <div className="p-6 flex flex-col items-center justify-center">
                    <p className="text-3xl font-semibold text-pink-600">Doflamingo Dashboard</p>
                    <h2 className="text-3xl font-semibold">Issues List</h2>
                </div>

            <div className="grid grid-rows-2 grid-cols-2 items-center content-center justify-items-center p-20 gap-2">
                <div className=" shadow-lg shadow-slate-300">
                        <BarChart
                            xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
                            series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
                            width={500}
                            height={300}
                            />
                        <h2 className="flex items-center justify-center">statistics</h2>
                </div>
                    <div className="shadow-lg shadow-slate-300">
                        <LineChart
                            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                            series={[
                                {
                                    data: [2, 5.5, 2, 8.5, 1.5, 5],
                                },
                            ]}
                            width={500}
                            height={300}
                        /></div>

                    <div className=" shadow-md p-12 shadow-slate-300">
                        <PieChart
                            series={[
                                {
                                    data: [
                                        { id: 0, value: 10, label: 'series A' },
                                        { id: 1, value: 15, label: 'series B' },
                                        { id: 2, value: 20, label: 'series C' },
                                    ],
                                },
                            ]}
                            width={400}
                            height={200}
                        /></div>
                    <div className=" shadow-lg shadow-slate-300 flex gap-20 p-4 text-2xl">
                        <Gauge width={200} height={200} value={60}>%</Gauge>
                        <Gauge width={200} height={200} value={60} startAngle={-90} endAngle={90} />
                    </div>
            </div>
        </main>
        </>
    )
}

export default HomeDashboard