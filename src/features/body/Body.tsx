import { Note } from '@/components';
import { BodyContent } from '@/types';
import Markdoc from '@markdoc/markdoc';
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { config } from '../../../markdoc.config';
import styles from './Body.module.css';

interface BodyProps {
  content: BodyContent;
}

const renderContent = (node: any, index = 0) => {
  if (node.$$mdtype === 'Tag') {
    if (node.name === 'Note') {
      return (
        <Note key={index} {...node.attributes}>
          {node.children.map((child: any, childIndex: number) => renderContent(child, childIndex))}
        </Note>
      );
    }

    if (node.name === 'pre') {
      const language = node.attributes['data-language'] || 'plaintext';
      const codeContent = node.children[0] || '';

      return (
        <SyntaxHighlighter
          className={styles['body__code-block']}
          key={index}
          language={language}
          style={atomOneDark}
          wrapLongLines
        >
          {codeContent}
        </SyntaxHighlighter>
      );
    }
  }

  if (node.children && Array.isArray(node.children)) {
    return React.createElement(
      node.name || 'div',
      { ...node.attributes, key: index },
      node.children.map((child: any, childIndex: number) => renderContent(child, childIndex))
    );
  }

  return <span key={index}>{node}</span>;
};

export function Body({ content }: BodyProps) {
  const ast = content.markdownContent ? Markdoc.parse(content.markdownContent) : null;
  const transformedContent = ast ? Markdoc.transform(ast, config) : null;

  return (
    <div className={styles['body']}>
      {transformedContent ? (
        renderContent(transformedContent)
      ) : (
        <div dangerouslySetInnerHTML={{ __html: content.html || '' }} />
      )}
    </div>
  );
}
