import Markdoc from '@markdoc/markdoc';
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { Caption, Chat, ChatMessage, Email, FakeLink, Form, Grid, Input, Note, Notification } from '@/components';
import { BodyContent } from '@/types';
import { config } from '../../../markdoc.config';

import './Body.css';

interface BodyProps {
  content: BodyContent;
}

const renderContent = (node: any, index = 0) => {
  if (node.$$mdtype === 'Tag') {
    if (node.name === 'Caption') {
      return (
        <Caption key={index} {...node.attributes}>
          {node.children.map((child: any, childIndex: number) => renderContent(child, childIndex))}
        </Caption>
      );
    }

    if (node.name === 'Chat') {
      return (
        <Chat key={index} {...node.attributes}>
          {node.children.map((child: any, childIndex: number) => renderContent(child, childIndex))}
        </Chat>
      );
    }

    if (node.name === 'ChatMessage') {
      return (
        <ChatMessage key={index} {...node.attributes}>
          {node.children.map((child: any, childIndex: number) => renderContent(child, childIndex))}
        </ChatMessage>
      );
    }

    if (node.name === 'Email') {
      return (
        <Email key={index} {...node.attributes}>
          {node.children.map((child: any, childIndex: number) => renderContent(child, childIndex))}
        </Email>
      );
    }

    if (node.name === 'FakeLink') {
      return (
        <FakeLink key={index} {...node.attributes}>
          {node.children.map((child: any, childIndex: number) => renderContent(child, childIndex))}
        </FakeLink>
      );
    }

    if (node.name === 'Form') {
      return (
        <Form key={index} {...node.attributes}>
          {node.children.map((child: any, childIndex: number) => renderContent(child, childIndex))}
        </Form>
      );
    }

    if (node.name === 'Grid') {
      return (
        <Grid key={index} {...node.attributes}>
          {node.children.map((child: any, childIndex: number) => renderContent(child, childIndex))}
        </Grid>
      );
    }

    if (node.name === 'Input') {
      return (
        <Input key={index} {...node.attributes}>
          {node.children.map((child: any, childIndex: number) => renderContent(child, childIndex))}
        </Input>
      );
    }

    if (node.name === 'Note') {
      return (
        <Note key={index} {...node.attributes}>
          {node.children.map((child: any, childIndex: number) => renderContent(child, childIndex))}
        </Note>
      );
    }

    if (node.name === 'Notification') {
      return (
        <Notification key={index} {...node.attributes}>
          {node.children.map((child: any, childIndex: number) => renderContent(child, childIndex))}
        </Notification>
      );
    }

    if (node.name === 'pre') {
      const language = node.attributes['data-language'] || 'plaintext';
      const codeContent = node.children[0] || '';

      return (
        <SyntaxHighlighter
          className="body__code-block"
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
    const selfClosingTags = [
      'hr',
      'br',
      'img',
      'input',
      'meta',
      'link',
      'area',
      'base',
      'col',
      'embed',
      'param',
      'source',
      'track',
      'wbr',
    ];

    if (selfClosingTags.includes(node.name)) {
      if (node.name === 'img') {
        const className = node.attributes.className 
          ? `${node.attributes.className} content-image`
          : 'content-image';
        return React.createElement(node.name, { ...node.attributes, className, key: index });
      }
      return React.createElement(node.name, { ...node.attributes, key: index });
    }

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
    <div className="body">
      {transformedContent ? (
        renderContent(transformedContent)
      ) : (
        <div dangerouslySetInnerHTML={{ __html: content.html || '' }} />
      )}
    </div>
  );
}
