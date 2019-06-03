import React from 'react';
import { connect } from 'react-redux';

import Breakout from '../game/Breakout';
import { CONFIG } from '../game/Global'
import { getWindowSize } from '../common/tools';
import { setPlayerScore } from '../common/reducers/playerActions.js';

const mapStateToProps = state => ({
    player: state.playerReducer,
    options: state.optionsReducer
});

const mapDispatchToProps = dispatch => ({
    setPlayerScore: (playerTopLevel, playerScore) => dispatch(setPlayerScore(playerTopLevel, playerScore))
});

class Game extends React.Component {

    componentDidMount() {
        window.addEventListener('resize', this.resizeHandler, false);
    };

    componentWillUnmount() {
        window.removeEventListener('resize', this.resizeHandler, false);
    };

    resizeHandler = () => {
        const { gameSize } = this.props.options;
        if (getWindowSize().width < getWindowSize().height && gameSize === 'full') {
            alert('It is highly recommended to play Breakout in landscape mode. Turn to landscape mode and refresh the page if necessary.');
        };
    };

    getHigherDimension = () => {
        return getWindowSize().width > getWindowSize().height
            ? getWindowSize().width
            : getWindowSize().height;
    };

    setSize = () => {
        const { gameSize } = this.props.options;
        if (gameSize === '700x500') {
            return { width: 700, height: 500 }
        } else {
            return getWindowSize();
        };
    };

    setModX = () => {
        const { gameSize } = this.props.options;
        if (gameSize === '700x500') {
            return 1;
        } else {
            return this.getHigherDimension() / 1200;
        };
    };

    setConfig = () => {
        const modX = this.setModX();
        return {
            ...CONFIG, 
            basePaddleWidth: 80 * modX,
            basePaddleSpeed: 8 * modX,
            baseBallSize: 10 * modX,
            baseBallSpeed: 3 * modX
        };
    };

    goToGameover = (level, score) => {
        this.props.setPlayerScore(level, score);
        this.props.history.push('/gameover');
    };

    render() {
        this.resizeHandler();
        return (
            <div className='game-container'>
                <Breakout goToGameover={this.goToGameover} gameMode={this.props.options.gameMode} gameSize={this.setSize} modX={this.setModX} CONFIG={this.setConfig} />
            </div>
        );
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);