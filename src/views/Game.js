import React from 'react';
import { connect } from 'react-redux';

import Breakout from '../game/Breakout';
import { getWindowSize } from '../common/tools';
import { setPlayerScore } from '../common/reducers/appStateActions.js';

const mapStateToProps = state => ({
    player: state.appStateReducer
});

const mapDispatchToProps = dispatch => ({
    setPlayerScore: (playerTopLevel, playerScore) => dispatch(setPlayerScore(playerTopLevel, playerScore))
});

class Game extends React.Component {

    componentDidMount() {
        window.addEventListener('resize', this.resizeHandler, false);
    }

    goToGameover = (level, score) => {
        this.props.setPlayerScore(level, score);
        this.props.history.push('/gameover');
    };

    resizeHandler = () => {
        if (getWindowSize().width < getWindowSize().height) {
            alert('It is highly recommended to play Breakout in landscape mode. Turn to landscape mode and refresh the page.');
        };
    };

    render() {
        return (
            <div className='game-container'>
                <Breakout goToGameover={this.goToGameover} />
            </div>
        );
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);