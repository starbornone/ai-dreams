import Markdoc from '@markdoc/markdoc';
import React from 'react';

import { BodyContent } from '@/types';
import { config } from '../../../markdoc.config';
import { renderContent } from './ContentRenderer';

import './Body.css';

interface BodyProps {
  content: BodyContent;
}

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
