import React from 'react';
import { internet, lorem } from 'faker';

import styles from './styles.module.css';
import { Anchor, UnorderedList } from '../../atoms';

export interface Navigation {
  anchors: Anchor[];
}

const buildChildren = (anchors: Navigation['anchors']) => {
  return anchors.map(({ id, ...props }) => (
    <li key={id}>
      <Anchor {...props} />
    </li>
  ));
};

export const Navigation = ({ anchors, ...props }: Navigation) => {
  return (
    <nav className={styles.root} {...props}>
      <UnorderedList>{buildChildren(anchors)}</UnorderedList>
    </nav>
  );
};

export const navigationProps = {
  anchors: [1, 2, 3, 4, 5].map((id) => ({
    id: id,
    href: internet.url(),
    children: lorem.word(),
  })),
};