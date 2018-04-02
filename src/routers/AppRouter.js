import React from 'react';
import { IndexRoute, BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Main from '../components/Main';
import Services from '../components/Services';
import PhotonicLightTherapy from '../components/Photonic';
import SportMassage from '../components/Sport';
import Testimonials from '../components/Testimonials';
import NotFoundPage from '../components/404';
import Footer from '../components/Footer';

const AppRouter = () => (
  <BrowserRouter>
    <section id="web-container">
      <Header />
      <div id="container">
        <Nav />
        <div id="content">
          <div id="content-container">
            <Switch>
              <Route path="/" component={Main} exact={true} />
              <Route path="/services" component={Services} />
              <Route path="/photonic-light-therapy" component={PhotonicLightTherapy} />
              <Route path="/sport-massage" component={SportMassage} />
              <Route path="/testimonials" component={Testimonials} />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  </BrowserRouter>
);

export default AppRouter;
