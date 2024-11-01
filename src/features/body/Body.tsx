import { Note } from '@/components';
import { BodyContent } from '@/types';
import Markdoc from '@markdoc/markdoc';
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { config } from '../../../markdoc.config';
import styles from './Body.module.css';

interface BodyProps {
  content: BodyContent;
}

export function Body({ content }: BodyProps) {
  const ast = content.markdownContent ? Markdoc.parse(content.markdownContent) : null;
  const transformedContent = ast ? Markdoc.transform(ast, config) : null;

  return (
    <div className={styles['body']}>
      {transformedContent ? (
        Markdoc.renderers.react(transformedContent, React, {
          components: {
            Note,
            code({ children, className }: { children: string; className?: string }) {
              const language = className?.replace(/language-/, '') || 'plaintext';

              return (
                <SyntaxHighlighter
                  PreTag="div"
                  customStyle={{ color: 'var(--color-text)', backgroundColor: 'var(--color-bg-secondary)' }}
                  language={language}
                  style={oneDark || {}}
                >
                  {children}
                </SyntaxHighlighter>
              );
            },
          },
        })
      ) : (
        <div dangerouslySetInnerHTML={{ __html: content.html || '' }} />
      )}
    </div>
  );
}
