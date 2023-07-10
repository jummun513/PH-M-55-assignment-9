import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
import url from '../../fakeData/data.JSON'
import './Dashboard.css';

const Dashboard = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(url)
            .then(data1 => {
                const loadData = data1.data;
                setData(loadData)
            });
    }, [])
    return (
        <div className='dashboard-container'>
            <div>
                <h2>Month Wise Sell</h2>
                <LineChart
                    width={600}
                    height={400}
                    data={data}
                    margin={{
                        top: 20,
                        right: 10,
                        left: 20,
                        bottom: 10,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="sell" stroke="#82ca9d" strokeWidth={2} activeDot={{ r: 8 }} />
                </LineChart>
            </div>
            <div>
                <h2>Investment VS Revenue</h2>
                <BarChart
                    width={600}
                    height={400}
                    data={data}
                    margin={{
                        top: 20,
                        right: 10,
                        left: 20,
                        bottom: 10,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="investment" stackId="a" fill="#8884d8" />
                    <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
                </BarChart>
            </div>
            <div>
                <h2>Investment VS Revenue</h2>
                <PieChart width={400} height={400}
                    margin={{
                        top: 0,
                        right: 10,
                        left: 20,
                        bottom: 10,
                    }}
                >
                    <Tooltip />
                    <Pie data={data} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                    <Pie data={data} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                </PieChart>
            </div>
            <div>
                <h2>Investment VS Revenue</h2>
                <AreaChart
                    width={600}
                    height={400}
                    data={data}
                    margin={{
                        top: 20,
                        right: 10,
                        left: 20,
                        bottom: 10,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="#8884d8" />
                    <Area type="monotone" dataKey="revenue" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                </AreaChart>
            </div>
        </div>


    );
};

export default Dashboard;