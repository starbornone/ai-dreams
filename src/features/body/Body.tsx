'use client';

import hljs from 'highlight.js/lib/core';
import typescript from 'highlight.js/lib/languages/typescript';
import React from 'react';
import styles from './Body.module.css';

import 'highlight.js/styles/default.css';
import 'highlight.js/styles/atom-one-dark.css';

hljs.registerLanguage('typescript', typescript);

interface BodyProps {
  content: {
    html: string;
  };
}

const addClassesToCodeTags = (html: string) => {
  return html.replace(/<code>(.*?)<\/code>/g, (match, code) => {
    const language = determineLanguage(code);
    return `<code class="${styles['body__code']} language-${language}">${code}</code>`;
  });
};

const determineLanguage = (code: string): string => {
  if (code.includes('export') || code.includes('interface') || code.includes('const') || code.includes('let')) {
    return 'typescript';
  }
  return 'plaintext';
};

export function Body({ content }: BodyProps) {
  const processedHtml = addClassesToCodeTags(content.html);

  React.useEffect(() => {
    hljs.highlightAll();
  }, [processedHtml]);

  return <div className={styles['body']} dangerouslySetInnerHTML={{ __html: processedHtml }} />;
}