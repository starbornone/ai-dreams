import { type RenderableTreeNode } from '@markdoc/markdoc';
import React from 'react';

import { renderCodeBlock } from './utils/renderCodeBlock';
import { renderCustomComponent } from './utils/renderCustomComponents';
import { renderHtmlElement } from './utils/renderHtmlElements';
import { renderPrimitive, renderArray } from './utils/renderPrimitives';

/**
 * Main content renderer that handles all types of Markdoc nodes
 */
export const renderContent = (node: RenderableTreeNode, index = 0): React.ReactNode => {
  // Handle null/undefined nodes
  if (!node) {
    return null;
  }

  // Handle primitive nodes
  if (typeof node === 'string' || typeof node === 'number' || typeof node === 'boolean') {
    return renderPrimitive(node, index);
  }

  // Handle arrays
  if (Array.isArray(node)) {
    return renderArray(node, index, renderContent);
  }

  // Handle Markdoc Tag nodes
  if (typeof node === 'object' && '$$mdtype' in node && node.$$mdtype === 'Tag') {
    const tagNode = node as any;
    
    // Handle custom components
    const customComponent = renderCustomComponent(tagNode, index, renderContent);
    if (customComponent) {
      return customComponent;
    }

    // Handle code blocks
    if (tagNode.name === 'pre') {
      return renderCodeBlock(tagNode, index);
    }
  }

  // Handle other object types (HTML elements)
  if (typeof node === 'object' && 'children' in node && Array.isArray(node.children)) {
    return renderHtmlElement(node, index, renderContent);
  }

  // Fallback for any other node type
  return <span key={index}>{String(node)}</span>;
};
