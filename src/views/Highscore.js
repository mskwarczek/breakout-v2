import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { generateUID } from '../common/tools';

const mapStateToProps = state => ({
    player: state.playerReducer
});

class Highscore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            list: [],
            playerName: props.player.playerName || null,
            playerScore: props.player.playerScore || null
        };
    };

    componentDidMount() {
        this.state.playerName && this.state.playerScore
            ? this.addPlayerToHighscore()
            : this.getHighscore();
    };

    getHighscore() {
        fetch('api/highscore')
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    isLoaded: true,
                    list: result
                });
            }, (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        );
    };

    addPlayerToHighscore() {
        const { playerName, playerScore } = this.state;
        fetch('api/highscore', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: generateUID(), name: playerName, score: playerScore })})
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    isLoaded: true,
                    list: result
                });
            }, (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        );
    };

    render() {
        const { error, isLoaded, list, playerName } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    <div className='header'>
                        <h2>Highscores</h2>
                    </div>
                    <div className='content'>
                        { list.map(item =>
                            <div key={item.id}>
                                <p>{item.name} {item.score}</p>
                            </div>
                        )}
                    </div>
                    <div className='buttons'>
                        { playerName
                            ? <NavLink to='/game'><h3>Play again</h3></NavLink>
                            : null
                        }
                        <NavLink to='/'><h4>Back to Menu</h4></NavLink>
                    </div>
                </div>
            );
            ;
        }
    };
};

export default connect(mapStateToProps)(Highscore);