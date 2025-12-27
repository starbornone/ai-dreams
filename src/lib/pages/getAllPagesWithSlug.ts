import { readdirSync } from 'fs';
import { join } from 'path';

export async function getAllPagesWithSlug() {
  const pagesDirectory = join(process.cwd(), 'src', 'app', 'pages');
  const files = readdirSync(pagesDirectory);
  
  const pages = files
    .filter((file) => file.endsWith('.md'))
    .map((file) => ({
      slug: file.replace(/\.md$/, ''),
    }));
  
  return pages;
}
