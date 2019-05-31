import React from 'react';
import { connect } from 'react-redux';
//import { NavLink } from 'react-router-dom';

import Breakout from '../game/Breakout';
import { setPlayerScore } from '../common/reducers/appStateActions.js';

const mapStateToProps = state => ({
    player: state.appStateReducer
});

const mapDispatchToProps = dispatch => ({
    setPlayerScore: (playerTopLevel, playerScore) => dispatch(setPlayerScore(playerTopLevel, playerScore))
});

class Game extends React.Component {

    goToGameover = (level, score) => {
        this.props.setPlayerScore(level, score);
        this.props.history.push('/gameover');
    };

    render() {
        return (
            <div className='game-container'>
                <Breakout goToGameover={this.goToGameover} />
                <div className='game-buttons'>
                    <button>Start / Pause</button>
                </div>
            </div>
        );
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);