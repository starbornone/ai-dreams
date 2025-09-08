import React from 'react';
import { type RenderableTreeNode } from '@markdoc/markdoc';
import { Caption, Chat, ChatMessage, Email, FakeLink, Form, Grid, Input, Note, Notification } from '@/components';

/**
 * Converts node children to string content for components that expect string children
 */
const convertToStringContent = (children: any[]): string => {
  return children?.map((child: any) => 
    typeof child === 'string' ? child : 
    typeof child === 'number' ? String(child) : 
    ''
  ).join('') || '';
};

/**
 * Renders custom Markdoc components
 */
export const renderCustomComponent = (
  tagNode: any, 
  index: number, 
  renderContent: (node: RenderableTreeNode, index: number) => React.ReactNode
): React.ReactNode => {
  const { name, attributes, children } = tagNode;

  switch (name) {
    case 'Caption':
      return (
        <Caption key={index} {...attributes}>
          {convertToStringContent(children)}
        </Caption>
      );

    case 'Chat':
      return (
        <Chat key={index} {...attributes}>
          {convertToStringContent(children)}
        </Chat>
      );

    case 'ChatMessage':
      return (
        <ChatMessage key={index} {...attributes}>
          {children?.map((child: RenderableTreeNode, childIndex: number) => renderContent(child, childIndex))}
        </ChatMessage>
      );

    case 'Email':
      return (
        <Email key={index} {...attributes}>
          {convertToStringContent(children)}
        </Email>
      );

    case 'FakeLink':
      return (
        <FakeLink key={index} {...attributes}>
          {children?.map((child: RenderableTreeNode, childIndex: number) => renderContent(child, childIndex))}
        </FakeLink>
      );

    case 'Form':
      return (
        <Form key={index} {...attributes}>
          {convertToStringContent(children)}
        </Form>
      );

    case 'Grid':
      return (
        <Grid key={index} {...attributes}>
          {children?.map((child: RenderableTreeNode, childIndex: number) => renderContent(child, childIndex))}
        </Grid>
      );

    case 'Input':
      return (
        <Input key={index} type="text" {...attributes} />
      );

    case 'Note':
      return (
        <Note key={index} {...attributes}>
          {convertToStringContent(children)}
        </Note>
      );

    case 'Notification':
      return (
        <Notification key={index} {...attributes}>
          {children?.map((child: RenderableTreeNode, childIndex: number) => renderContent(child, childIndex))}
        </Notification>
      );

    default:
      return null;
  }
};
