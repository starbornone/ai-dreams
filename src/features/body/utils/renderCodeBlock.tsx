import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const extractCodeContent = (children: any[]): string => {
  if (!children || children.length === 0) return '';

  if (typeof children[0] === 'string') {
    return children[0];
  }

  if (typeof children[0] === 'object' && children[0].children) {
    return extractCodeContent(children[0].children);
  }

  return children.map((child: any) => (typeof child === 'string' ? child : '')).join('');
};

const extractLanguage = (tagNode: any): string => {
  if (tagNode.attributes?.['data-language']) {
    return tagNode.attributes['data-language'];
  }

  const codeElement = tagNode.children?.find((child: any) => typeof child === 'object' && child.name === 'code');

  if (codeElement?.attributes?.className) {
    const className = codeElement.attributes.className;
    const languageMatch = className.match(/language-(\w+)/);
    if (languageMatch) {
      return languageMatch[1];
    }
  }

  return 'plaintext';
};
export const renderCodeBlock = (tagNode: any, index: number): React.ReactNode => {
  const language = extractLanguage(tagNode);
  const codeContent = extractCodeContent(tagNode.children || []);

  return (
    <SyntaxHighlighter className="body__code-block" key={index} language={language} style={atomOneDark} wrapLongLines>
      {codeContent}
    </SyntaxHighlighter>
  );
};
