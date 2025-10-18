import { type RenderableTreeNode } from '@markdoc/markdoc';
import React from 'react';

import { renderCodeBlock } from './utils/renderCodeBlock';
import { renderCustomComponent } from './utils/renderCustomComponents';
import { renderHtmlElement } from './utils/renderHtmlElements';
import { renderArray, renderPrimitive } from './utils/renderPrimitives';

export const renderContent = (node: RenderableTreeNode, index = 0): React.ReactNode => {
  if (!node) {
    return null;
  }

  if (typeof node === 'string' || typeof node === 'number' || typeof node === 'boolean') {
    return renderPrimitive(node, index);
  }

  if (Array.isArray(node)) {
    return renderArray(node, renderContent);
  }

  if (typeof node === 'object' && '$$mdtype' in node && node.$$mdtype === 'Tag') {
    const tagNode = node as any;

    if (tagNode.name === 'pre') {
      return renderCodeBlock(tagNode, index);
    }

    const customComponent = renderCustomComponent(tagNode, index, renderContent);
    if (customComponent) {
      return customComponent;
    }
  }

  if (typeof node === 'object' && 'children' in node && Array.isArray(node.children)) {
    return renderHtmlElement(node, index, renderContent);
  }

  return <span key={index}>{String(node)}</span>;
};
