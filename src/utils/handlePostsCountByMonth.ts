import { getAllPostDates } from '@/lib';

export async function handlePostsCountByMonth() {
  const posts: { date: string | null }[] = await getAllPostDates();
  const dateCounts: Record<string, number> = {};

  const startDate = new Date(2021, 8);
  const currentDate = new Date();
  let iterDate = new Date(startDate);

  while (iterDate <= currentDate) {
    const yearMonth = `${iterDate.getFullYear()}-${String(iterDate.getMonth() + 1).padStart(2, '0')}`;
    dateCounts[yearMonth] = 0;
    iterDate.setMonth(iterDate.getMonth() + 1);
  }

  posts.forEach(({ date }) => {
    if (!date) return;

    const dateObj = new Date(date);
    const yearMonth = `${dateObj.getFullYear()}-${String(dateObj.getMonth() + 1).padStart(2, '0')}`;
    dateCounts[yearMonth] = (dateCounts[yearMonth] || 0) + 1;
  });

  return dateCounts;
}
