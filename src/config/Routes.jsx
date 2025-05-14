import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Detail from '../pages/detail/Detail';

import ContactUs from '../pages/ContactUs';
import TermsOfService from '../pages/TermsOfService';
import AboutUs from '../pages/AboutUs';
import Live from '../pages/Live';
import FAQ from '../pages/FAQ';
import Premium from '../pages/Premium';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import MustWatch from '../pages/MustWatch';
import RecentRelease from '../pages/RecentRelease';
import TopIMDB from '../pages/TopIMDB';

const Routes = () => {
    return (
        <Switch>
            <Route path="/contact" component={ContactUs} />
            <Route path="/terms" component={TermsOfService} />
            <Route path="/about" component={AboutUs} />
            <Route path="/live" component={Live} />
            <Route path="/faq" component={FAQ} />
            <Route path="/premium" component={Premium} />
            <Route path="/privacy" component={PrivacyPolicy} />
            <Route path="/must-watch" component={MustWatch} />
            <Route path="/recent-release" component={RecentRelease} />
            <Route path="/top-imdb" component={TopIMDB} />

            <Route path='/:category/search/:keyword' component={Catalog} />
            <Route path='/:category/:id' component={Detail} />
            <Route path='/:category' component={Catalog} />
            <Route path='/' exact component={Home} />
        </Switch>
    );
};

export default Routes;
