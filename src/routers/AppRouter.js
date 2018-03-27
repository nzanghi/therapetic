import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Main from '../components/Main';
import Services from '../components/Services';
import PhotonicLightTherapy from '../components/Photonic';
import SportMassage from '../components/Sport';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import NotFoundPage from '../components/404';
import Footer from '../components/Footer';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <div id="container">
        <div id="content">
          <Switch>
            <Route path="/" component={Main} exact={true} />
            <Route path="/services" component={Services} />
            <Route path="/photonic-light-therapy" component={PhotonicLightTherapy} />
            <Route path="/sport-massage" component={SportMassage} />
            <Route path="/testimonials" component={Testimonials} />
            <Route path="/contact" component={Contact} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
      <Footer />
    </div>
  </BrowserRouter>
);

export default AppRouter;
