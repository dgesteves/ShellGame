import React, { Component } from 'react';
import styles from './Btn.module.css';

class Btn extends Component {
    render() {
        return (<span
            className={ `${ styles.btn } ${ styles[this.props.titleText] }` }>{ this.props.titleText }
      </span>)
    }
}

export default Btn;
