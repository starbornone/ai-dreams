import React from 'react';

/**
 * List of self-closing HTML tags
 */
const SELF_CLOSING_TAGS = [
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

/**
 * Renders HTML elements from Markdoc nodes
 */
export const renderHtmlElement = (
  tagNode: any,
  index: number,
  renderContent: (node: any, index: number) => React.ReactNode
): React.ReactNode => {
  const { name, attributes, children } = tagNode;

  if (SELF_CLOSING_TAGS.includes(name || '')) {
    if (name === 'img') {
      const className = attributes?.className ? `${attributes.className} content-image` : 'content-image';
      return React.createElement(name, { ...attributes, className, key: index });
    }
    return React.createElement(name || 'div', { ...attributes, key: index });
  }

  return React.createElement(
    name || 'div',
    { ...attributes, key: index },
    children?.map((child: any, childIndex: number) => renderContent(child, childIndex))
  );
};
