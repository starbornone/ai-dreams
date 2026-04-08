'use client';

import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';

import './_post-counts.css';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
);

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

      <Line
        data={{
          labels: data.labels,
          datasets: [
            {
              label: 'Number of Posts',
              data: data.data,
              borderColor: '#fdb44e',
              backgroundColor: 'rgba(253, 180, 78, 0.18)',
              fill: true,
              tension: 0,
              pointRadius: (ctx) => {
                const raw = ctx.raw;
                const value =
                  typeof raw === 'number'
                    ? raw
                    : typeof raw === 'object' && raw && 'y' in raw
                      ? Number((raw as { y: unknown }).y)
                      : NaN;
                return value === 0 ? 0 : 2.5;
              },
              pointHoverRadius: 5,
              pointHitRadius: 10,
            },
          ],
        }}
        options={{
          responsive: true,
          interaction: { mode: 'index', intersect: false },
          scales: {
            x: {
              title: { display: true, text: 'Month' },
              ticks: {
                autoSkip: true,
                maxRotation: 0,
              },
            },
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
        <h3 className="post-counts__subtitle">Posts per year</h3>
        <Bar
          data={{
            labels: years,
            datasets: [
              {
                label: 'Number of Posts',
                data: years.map((y) => yearCounts[y] ?? 0),
                backgroundColor: '#fdb44e',
              },
            ],
          }}
          options={{
            responsive: true,
            scales: {
              x: { title: { display: true, text: 'Year' } },
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
      <div className="post-counts__section">
        <p>{totalPosts} total posts.</p>
        <p>{averagePostsPerMonth.toFixed(2)} average posts per month.</p>
        <p>{averagePostsPerYear.toFixed(2)} average posts per calendar year.</p>
      </div>
    </div>
  );
}
