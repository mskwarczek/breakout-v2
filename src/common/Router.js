import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Menu from '../views/Menu';
import Instructions from '../views/Instructions';
import Game from '../views/Game';
import Gameover from '../views/Gameover';
import Highscore from '../views/Highscore';
import Options from '../views/Options';

const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={Menu} />
            <Route exact path='/instructions' component={Instructions} />
            <Route exact path='/game' component={Game} />
            <Route exact path='/gameover' component={Gameover} />
            <Route exact path='/highscore' component={Highscore} />
            <Route exact path='/options' component={Options} />
        </Switch>
    );
};

export default Router;