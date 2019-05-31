import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { setPlayerName } from '../common/reducers/appStateActions.js';

const mapStateToProps = state => ({
    playerName: state.appStateReducer
});

const mapDispatchToProps = dispatch => ({
    setPlayerName: (playerName) => dispatch(setPlayerName(playerName))
});

class Gameover extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playerName: ''
        };
    };

    handleChange = (event) => {
        this.setState({
            playerName: event.target.value
        });
    };

    handleSubmit = (event) => {
        this.props.setPlayerName(this.state.playerName);
        this.props.history.push('/highscore');
        event.preventDefault();
    };

    render() {
        return (
            <div>
                <div className='header'>
                    <h2>Game over!</h2>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className='content'>
                        <label>Your name:<br />
                        <input name='playerName'
                            type='text'
                            value={this.state.playerName}
                            onChange={this.handleChange}
                            required />
                        </label><br />
                    </div>
                    <div className='buttons'>
                        <button type='submit'><h3 type='submit'>Continue</h3></button>
                    </div>
                </form>
            </div>
        );
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Gameover));
