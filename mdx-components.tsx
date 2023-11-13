/* eslint-disable import/prefer-default-export */
import { type MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents) {
  return {
    ...components,
    // eslint-disable-next-line jsx-a11y/alt-text
  };
}
