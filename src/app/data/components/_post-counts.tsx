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
  const totalPosts = data.data.reduce((sum, count) => sum + count, 0);

  const averagePostsPerMonth = totalPosts / data.labels.length;

  const yearCounts: Record<string, number> = {};
  
  data.labels.forEach((label, index) => {
    const year = label.split('-')[0];
    yearCounts[year] = (yearCounts[year] || 0) + data.data[index];
  });
  
  const years = Object.keys(yearCounts).sort();
  const numberOfYears = years.length;
  const averagePostsPerYear = numberOfYears > 0 ? totalPosts / numberOfYears : 0;

  return (
    <div className="post-counts">
      <h2 className="post-counts__title">Post Counts</h2>

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
      <div className="post-counts__section">
        <p>Total posts: {totalPosts}</p>
        <p>Average posts per month: {averagePostsPerMonth.toFixed(2)}</p>
        <p>Average posts per year: {averagePostsPerYear.toFixed(2)}</p>
      </div>
    </div>
  );
}
