import { type RenderableTreeNode } from '@markdoc/markdoc';
import React from 'react';

export const renderPrimitive = (node: string | number | boolean, index: number): React.ReactNode => {
  return <span key={index}>{String(node)}</span>;
};

export const renderArray = (
  node: RenderableTreeNode[],
  renderContent: (node: RenderableTreeNode, index: number) => React.ReactNode
): React.ReactNode => {
  return node.map((child, childIndex) => renderContent(child, childIndex));
};
