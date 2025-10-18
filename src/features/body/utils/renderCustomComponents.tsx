import { type RenderableTreeNode } from '@markdoc/markdoc';
import React from 'react';

import { Caption, Chat, ChatMessage, Email, FakeLink, Form, Grid, Input, Note, Notification } from '@/components';

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
          {children?.map((child: RenderableTreeNode, childIndex: number) => renderContent(child, childIndex))}
        </Caption>
      );

    case 'Chat':
      return (
        <Chat key={index} {...attributes}>
          {children?.map((child: RenderableTreeNode, childIndex: number) => renderContent(child, childIndex))}
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
          {children?.map((child: RenderableTreeNode, childIndex: number) => renderContent(child, childIndex))}
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
          {children?.map((child: RenderableTreeNode, childIndex: number) => renderContent(child, childIndex))}
        </Form>
      );

    case 'Grid':
      return (
        <Grid key={index} {...attributes}>
          {children?.map((child: RenderableTreeNode, childIndex: number) => renderContent(child, childIndex))}
        </Grid>
      );

    case 'Input':
      return <Input key={index} type="text" {...attributes} />;

    case 'Note':
      return (
        <Note key={index} {...attributes}>
          {children?.map((child: RenderableTreeNode, childIndex: number) => renderContent(child, childIndex))}
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
