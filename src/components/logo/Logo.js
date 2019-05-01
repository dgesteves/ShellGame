import React from 'react';
import logo from '../../assets/shell-logo.png';
import styles from './Logo.module.css';

const Logo = () => <img src={ logo } alt='logo' className={ styles.logo }/>;

export default Logo;
