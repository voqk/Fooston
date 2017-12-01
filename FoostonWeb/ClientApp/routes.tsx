import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { SignUpForm } from './components/SignUpForm';
import { Home } from './components/Home';
import { Ratings } from './components/Ratings';
import { Contact } from './components/Contact';
import { Tournaments } from './components/Tournaments';

export const routes = <Layout>
    <Route exact path='/' component={ Home } />
    <Route path='/ratings' component={ Ratings } />
    <Route path="/signup" component={ SignUpForm } />
    <Route path='/contact' component={ Contact } />
    <Route path='/tournaments' component= { Tournaments } />
</Layout>;
