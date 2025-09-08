import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

/**
 * Renders code blocks with syntax highlighting
 */
export const renderCodeBlock = (tagNode: any, index: number): React.ReactNode => {
  const language = tagNode.attributes?.['data-language'] || 'plaintext';
  const codeContent = tagNode.children?.[0] || '';

  return (
    <SyntaxHighlighter className="body__code-block" key={index} language={language} style={atomOneDark} wrapLongLines>
      {String(codeContent)}
    </SyntaxHighlighter>
  );
};
