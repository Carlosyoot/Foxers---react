import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import styles from './Layout.module.scss';

export default function Layout() {
  const location = useLocation();

  const mode = location.pathname === '/' ? 'grid' : 'column';

  const containerClass = classNames(styles.Container, {
    [styles.grid]: mode === 'grid',
    [styles.column]: mode === 'column',
  });

  return (
    <div className={containerClass}>
      <Outlet />
    </div>
  );
}
