'use client';

import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Tooltip } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

interface PostCountsProps {
  data: {
    labels: string[];
    data: number[];
  };
}

export function PostCounts({ data }: PostCountsProps) {
  return (
    <div className="my-12">
      <h2 className="mb-4 text-xl font-bold">Posts Per Month</h2>
      <Bar
        data={{
          labels: data.labels,
          datasets: [
            {
              label: 'Number of Posts',
              data: data.data,
              backgroundColor: '#fdb44e',
            },
          ],
        }}
        options={{
          responsive: true,
          scales: {
            x: { title: { display: true, text: 'Month' } },
            y: {
              title: { display: true, text: 'Posts' },
              beginAtZero: true,
              ticks: {
                stepSize: 1,
                callback: (value) => Number(value).toFixed(0),
              },
            },
          },
        }}
      />
    </div>
  );
}
