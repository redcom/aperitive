//@flow
import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Row } from 'react-bootstrap';
import classnames from 'classnames';

import NavBar from './nav_bar';

type Props = {
  children: Object,
};

const footerHeight = '40px';

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    lineHeight: footerHeight,
    height: footerHeight,
  },
});

export default function App({children}: Props) {
  return (
    <div>
      <NavBar>
      </NavBar>
      <div className="container">
        {children}
      </div>
      <footer className={classnames('container', css(styles.footer))}>
        <Row className='text-center'>
          &copy; 2016. Aperitive
        </Row>
      </footer>
    </div>
  );
}
