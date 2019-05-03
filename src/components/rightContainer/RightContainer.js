import React, { Component } from 'react';
import styles from './RightContainer.module.css';
import shell from '../../assets/shell.png';

class RightContainer extends Component {
    state = {
        boardContainerClassName: styles.shellContainer,
        shellsNumber: [1, 2, 3],
        ballsNumber: [1]
    };

    titleText = 'pick your level';
    topPosition = '200px';
    btnText = {
        normal: 'normal',
        hard: 'hard',
        extreme: 'extreme',
        play: 'play'
    };

    classHandler = () =>
        this.setState({
                          boardContainerClassName: `${ styles.shellContainer } ${ styles.animation }`
                      });

    leftPosition = index => {
        switch (index) {
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

    difficultyHandler = action => {
        switch (action) {
            case 'normal':
                return this.setState({ shellsNumber: [1, 2, 3], ballsNumber: [1] });
            case 'hard':
                return this.setState({ shellsNumber: [1, 2, 3, 4], ballsNumber: [1] });
            case 'extreme':
                return this.setState({
                                         shellsNumber: [1, 2, 3, 4, 5],
                                         ballsNumber: [2]
                                     });
            default:
                return '';
        }
    };

    render() {
        return (
            <div className={ styles.right }>
                <h1 className={ styles.title }>{ this.titleText }</h1>

                {/*<BtnContainer/>*/ }
                <div className={ styles.levels }>
          <span
              className={ `${ styles.btn } ${ styles.normal }` }
              onClick={ () => this.difficultyHandler(this.btnText.normal) }
          >
            { this.btnText.normal }
          </span>
                    <span
                        className={ `${ styles.btn } ${ styles.hard }` }
                        onClick={ () => this.difficultyHandler(this.btnText.hard) }
                    >
            { this.btnText.hard }
          </span>
                    <span
                        className={ `${ styles.btn } ${ styles.extreme }` }
                        onClick={ () => this.difficultyHandler(this.btnText.extreme) }
                    >
            { this.btnText.extreme }
          </span>
                </div>

                {/*<BoardContainer/>*/ }
                <div className={ styles.board }>
                    <ShellComponent
                        top={ this.topPosition }
                        left={ index => this.leftPosition(index) }
                        classToUse={ this.state.boardContainerClassName }
                        numberOfShells={ this.state.shellsNumber }
                    />
                </div>

                {/*<Btn text={ 'play' }/>*/ }
                <span
                    className={ `${ styles.btn } ${ styles.play }` }
                    onClick={ this.classHandler }
                >
          { this.btnText.play }
        </span>
            </div>
        );
    }
}

const ShellComponent = props => {
    return props.numberOfShells.map((_, index) => {
        return (
            <div
                style={ { top: props.top, left: props.left(index) } }
                className={ props.classToUse }
                key={ index }
            >
                <img src={ shell } alt='shell' className={ styles.shell }/>
            </div>
        );
    });
};

export default RightContainer;
