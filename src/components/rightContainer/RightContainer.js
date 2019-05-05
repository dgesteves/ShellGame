import React, { Component } from 'react';
import Btn from '../btn/Btn';
import Shell from '../shell/Shell';
import styles from './RightContainer.module.css';

class RightContainer extends Component {

    state = {
        boardContainerClassName: styles.shellContainer,
        shellsNumber: [ 1, 2, 3 ],
        ballsNumber: [ 1 ]
    };

    titleText = 'pick your level';
    topPosition = '200px';
    play = 'play';

    onClassChange = () => this.setState( {
        boardContainerClassName: `${ styles.shellContainer } ${ styles.ShellAnimation }`
    } );

    leftPosition = index => {
        switch ( index ) {
            case 0:
                return '100px';
            case 1:
                return '200px';
            case 2:
                return '300px';
            case 3:
                return '400px';
            case 4:
                return '500px';
            default:
                return '';
        }
    };

    onDifficultyChange = action => {
        switch ( action ) {
            case 'normal':
                return this.setState( { shellsNumber: [ 1, 2, 3 ], ballsNumber: [ 1 ] } );
            case 'hard':
                return this.setState( { shellsNumber: [ 1, 2, 3, 4 ], ballsNumber: [ 1 ] } );
            case 'extreme':
                return this.setState( {
                    shellsNumber: [ 1, 2, 3, 4, 5 ], ballsNumber: [ 2 ]
                } );
            default:
                return '';
        }
    };

    render() {
        return (
            <div className={ styles.right }>
                <h1 className={ styles.title }>{ this.titleText }</h1>
                <div className={ styles.levels }>
                    <Btn onDificulty={ this.onDifficultyChange }/>
                </div>
                <div className={ styles.board }>
                    <Shell
                        top={ this.topPosition }
                        left={ index => this.leftPosition( index ) }
                        classToUse={ this.state.boardContainerClassName }
                        numberOfShells={ this.state.shellsNumber }/>
                    <span className={ `${ styles.ball } ${ styles.invisible }` }/>
                </div>
                <span
                    className={ `${ styles.btn } ${ styles.play }` }
                    onClick={ this.onClassChange }>
                    { this.play }
                </span>
            </div>
        );
    }
}

export default RightContainer;
