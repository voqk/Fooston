import * as React from 'react';
import { Route } from 'react-router-dom';
import Layout from './components/Layout';
import SignUpForm from './components/SignUpForm';
import Home from './components/Home';
import RatingsContainer from './components/ratings/RatingsContainer';
import Contact from './components/Contact';
import Tournaments from './components/Tournaments';
import PlayersContainer from './components/players/PlayersContainer';

export const routes = <Layout>
    <Route exact path='/' component={ Home } />
    <Route path='/ratings' component={ RatingsContainer } />
    <Route path='/players' component= { PlayersContainer } />
    <Route path='/signup' component={ SignUpForm } />
    <Route path='/contact' component={ Contact } />
    <Route path='/tournaments' component= { Tournaments } />
</Layout>;
