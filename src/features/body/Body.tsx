import { BodyContent } from '@/types';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';
import styles from './Body.module.css';

interface BodyProps {
  content: BodyContent;
}

export function Body({ content }: BodyProps) {
  return (
    <div className={styles['body']}>
      {content.markdownContent ? (
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <SyntaxHighlighter language={match[1]} style={oneDark} {...props}>
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        >
          {content.markdownContent}
        </ReactMarkdown>
      ) : (
        <div dangerouslySetInnerHTML={{ __html: content.html || '' }} />
      )}
    </div>
  );
}
