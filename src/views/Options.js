import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { setGameMode } from '../common/reducers/optionsActions.js';

const mapStateToProps = state => ({
    appState: state.optionsReducer
});

const mapDispatchToProps = dispatch => ({
    setGameMode: (gameMode) => dispatch(setGameMode(gameMode))
});

class Options extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gameMode: this.props.appState.gameMode
        };
    };

    handleChange = (event) => {
        this.setState({ gameMode: event.target.value });
    };

    handleSubmit = (event) => {
        this.props.setGameMode(this.state.gameMode);
        event.preventDefault();
    };

    render() {
        const { gameMode } = this.state;
        return (
            <div>
                <div className='header'>
                    <h2>Options</h2>
                </div>
                <div className='content'>
                    <form onSubmit={this.handleSubmit}>
                        <h4>Game mode:</h4>
                            <label className='radio-label'><input className='radio-button' type='radio' name='gameMode' onChange={this.handleChange} value='normal' checked={gameMode === 'normal' ? true : false} />Normal</label>
                            <label className='radio-label'><input className='radio-button' type='radio' name='gameMode' onChange={this.handleChange} value='hard' checked={gameMode === 'hard' ? true : false} />Hard
                        </label>
                        <button className='button-submit' type='submit'><h4>Save</h4></button>
                    </form>
                </div>
                <div className='buttons'>
                    <NavLink to='/'><h3>Back</h3></NavLink>
                </div>
            </div>
        );
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Options);