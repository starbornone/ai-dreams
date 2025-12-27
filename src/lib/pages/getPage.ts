import { readFileSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

export async function getPage(slug: string) {
  try {
    const pagesDirectory = join(process.cwd(), 'src', 'app', 'pages');
    const filePath = join(pagesDirectory, `${slug}.md`);
    const fileContents = readFileSync(filePath, 'utf8');

    const { data, content } = matter(fileContents);

    const firstParagraph = content.split('\n\n')[0];
    const excerpt = firstParagraph?.substring(0, 160) || '';
    
    return {
      title: data.title || slug,
      slug,
      markdownContent: content,
      excerpt,
      coverImage: data.coverImage ? { url: data.coverImage } : { url: '' },
      imageAuthor: data.imageAuthor || undefined,
      imageAuthorUrl: data.imageAuthorUrl || undefined,
    };
  } catch (error) {
    return null;
  }
}
