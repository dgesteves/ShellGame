import React from 'react';
import styles from './Btn.module.css';

const Btn = props => <span className={ `${ styles.btn } ${ styles[props.text] }` }>{ props.text }</span>;

export default Btn;
