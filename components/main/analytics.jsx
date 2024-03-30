"use client";

import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { useTheme } from 'next-themes';

const Analytics = () => {
  const data = [
    {
      name: '1st Term',
      Passed: 2000,
      Failed: 2000,
    },
    {
      name: '2nd Term',
      Passed: 3000,
      Failed: 1000,
    },
    {
      name: '3rd Term',
      Passed: 1500,
      Failed: 2500,
    },
    {
      name: '4th Term',
      Passed: 3290,
      Failed: 710,
    },
  ];

  const [containerHeight, setContainerHeight] = useState(500);

  useEffect(() => {
    const handleResize = () => {
      const newHeight = window.innerWidth <= 768 ? 300 : 500;
      setContainerHeight(newHeight);
    };

    handleResize(); // Call initially to set correct height on component mount

    window.addEventListener('resize', handleResize); // Add event listener for window resize

    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup event listener
    };
  }, []); // Empty dependency array ensures this effect only runs on mount and unmount
  const { theme } = useTheme(); // Get the current theme mode

  const tooltipStyle = {
    backgroundColor: theme === 'dark' ? '#0f172a' : '#F4F4F5', // Set background color based on theme mode
  };
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <p className="text-md font-semibold">Grades Analytics</p>
          <div className="flex items-center justify-center gap-x-4">
            <div className="flex items-center justify-center gap-x-2">
              <div className="w-3 h-3 bg-green-500" />
              <p className="text-sm font-semibold">Passed</p>
            </div>
            <div className="flex items-center justify-center gap-x-2">
              <div className="w-3 h-3 bg-red-500" />
              <p className="text-sm font-semibold">Failed</p>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={containerHeight}>
          <LineChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 30,
              bottom: 0,
            }}
          >
            <XAxis className='md:text-sm text-xs' dataKey="name" />
            <YAxis />
            <Tooltip contentStyle={tooltipStyle} />
            <Legend />
            <Line
              type="monotone"
              dataKey="Passed"
              stroke="#22C55E"
              activeDot={{ r: 10 }}
            />
            <Line
              type="monotone"
              dataKey="Failed"
              stroke="#EF4444"
              activeDot={{ r: 10 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default Analytics;
