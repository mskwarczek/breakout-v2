import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Highscore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            list: [],
            playerName: null,
            playerScore: null
        };
    };

    componentDidMount() {
        this.state.playerName
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
            body: JSON.stringify({ id: 100, name: playerName, score: playerScore })})
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
        const { error, isLoaded, list } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    Highscore View
                    {list.map(item =>
                        <div key={item.id}>
                            {item.name}
                            {item.score}
                        </div>
                    )}
                    <NavLink to='/'><div>Back</div></NavLink>
                </div>
            );
            ;
        }
    };
};

export default Highscore;