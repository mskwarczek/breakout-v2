import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { setGameMode, setGameSize } from '../common/reducers/optionsActions.js';

const mapStateToProps = state => ({
    options: state.optionsReducer
});

const mapDispatchToProps = dispatch => ({
    setGameMode: (gameMode) => dispatch(setGameMode(gameMode)),
    setGameSize: (gameSize) => dispatch(setGameSize(gameSize))
});

class Options extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gameMode: this.props.options.gameMode,
            gameSize: this.props.options.gameSize
        };
    };

    handleChange = (event) => {
        switch (event.target.name) {
            case 'gameMode': this.setState({ gameMode: event.target.value }); break;
            case 'gameSize': this.setState({ gameSize: event.target.value }); break;
            default: break;
        };
    };

    handleSubmit = (event) => {
        this.props.setGameMode(this.state.gameMode);
        this.props.setGameSize(this.state.gameSize);
        event.preventDefault();
    };

    render() {
        const { gameMode, gameSize } = this.state;
        return (
            <div>
                <div className='header'>
                    <h2>Options</h2>
                </div>
                <div className='content'>
                    <form onSubmit={this.handleSubmit}>
                        <h4>Game mode:</h4>
                            <label className='radio-label'><input className='radio-button' type='radio' name='gameMode' onChange={this.handleChange} value='normal' checked={gameMode === 'normal' ? true : false} />Normal</label>
                            <label className='radio-label'><input className='radio-button' type='radio' name='gameMode' onChange={this.handleChange} value='hard' checked={gameMode === 'hard' ? true : false} />Hard</label>
                        <h4>Performance issues</h4>
                        <p>This game works best on Google Chrome. You may experience some slow-downs on Firefox.</p>
                        <p>If you are still having performance issues on desktop you may try to fix game window size to 700x500px.</p>
                            <label className='radio-label'><input className='radio-button' type='radio' name='gameSize' onChange={this.handleChange} value='full' checked={gameSize === 'full' ? true : false} />Full size</label>
                            <label className='radio-label'><input className='radio-button' type='radio' name='gameSize' onChange={this.handleChange} value='700x500' checked={gameSize === '700x500' ? true : false} />Fix size to 700x500px</label>
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