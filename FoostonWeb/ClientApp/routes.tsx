import * as React from 'react';
import { Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import RatingsContainer from './components/ratings/RatingsContainer';
import Join from './components/Join';
import { ItsfRuleBook } from './components/ItsfRuleBook';

export const routes = <Layout>
    <Route exact path='/' component={ Home } />
    <Route path='/ratings' component={ RatingsContainer } />
    <Route path='/join' component={ Join } />
    <Route path='/official-foosball-rules' component={ ItsfRuleBook } />
</Layout>;