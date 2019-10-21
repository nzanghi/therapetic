import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Main from '../components/content/Main';
import Services from '../components/content/Services';
import PhotonicLightTherapy from '../components/content/Photonic';
import PhotonicLightTherapySystem from '../components/content/photonic-system';
import SportMassage from '../components/content/Sport';
import Testimonials from '../components/content/Testimonials';
import NotFoundPage from '../components/content/404';

class Content extends React.Component {
  render() {
    return (
      <div className="content">
        <Switch>
          <Route path="/" component={Main} exact={true} />
          <Route path="/services" component={Services} />
          <Route path="/photonic-light-therapy" component={PhotonicLightTherapy} />
          <Route path="/photonic-light-system" component={PhotonicLightTherapySystem} />
          <Route path="/sport-massage" component={SportMassage} />
          <Route path="/testimonials" component={Testimonials} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

export default Content;
