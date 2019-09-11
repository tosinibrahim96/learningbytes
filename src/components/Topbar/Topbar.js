// @flow strict
import React from 'react';
import Author from './Author';
import Contacts from './Contacts';
import Copyright from './Copyright';
import Menu from './Menu';
import styles from './Topbar.module.scss';
import { useSiteMetadata } from '../../hooks';

type Props = {
  isIndex?: boolean
};

const Topbar = ({ isIndex }: Props) => {
  const { author, copyright, menu } = useSiteMetadata();

  return (
    <div className={styles['Topbar']}>
      <div className={styles['Topbar__inner']}>
        <Author author={author} isIndex={isIndex} />
        {isIndex ? '' : <Menu menu={menu} />}
        <Contacts contacts={author.contacts} />
        <Copyright copyright={copyright} />
      </div>
    </div>
  );
};

export default Topbar;
