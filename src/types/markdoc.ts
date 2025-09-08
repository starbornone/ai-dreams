// Markdoc-specific types

export interface MarkdocNode {
  $$mdtype?: string;
  name?: string;
  attributes?: Record<string, any>;
  children?: (MarkdocNode | string | number)[];
}
