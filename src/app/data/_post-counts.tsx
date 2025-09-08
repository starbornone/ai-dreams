'use client';

import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Tooltip } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import './_post-counts.css';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

interface PostCountsProps {
  data: {
    labels: string[];
    data: number[];
  };
}

export function PostCounts({ data }: PostCountsProps) {
  return (
    <div className="post-counts">
      <h2 className="post-counts__title">Posts Per Month</h2>
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
