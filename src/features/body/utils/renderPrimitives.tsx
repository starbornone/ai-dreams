import { type RenderableTreeNode } from '@markdoc/markdoc';
import React from 'react';

/**
 * Renders primitive values (string, number, boolean) as React nodes
 */
export const renderPrimitive = (node: string | number | boolean, index: number): React.ReactNode => {
  return <span key={index}>{String(node)}</span>;
};

/**
 * Renders arrays of nodes
 */
export const renderArray = (
  node: RenderableTreeNode[],
  index: number,
  renderContent: (node: RenderableTreeNode, index: number) => React.ReactNode
): React.ReactNode => {
  return node.map((child, childIndex) => renderContent(child, childIndex));
};
