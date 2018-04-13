import React from 'react';

import {Route, Switch} from 'react-router-dom';

import Main from '../components/Main';
import Services from '../components/Services';
import PhotonicLightTherapy from '../components/Photonic';
import SportMassage from '../components/Sport';
import Testimonials from '../components/Testimonials';
import NotFoundPage from '../components/404';

class Content extends React.Component {
  render() {
    return (
        <div className="content">
          <Switch>
            <Route path="/" component={Main} exact={true} />
            <Route path="/services" component={Services} />
            <Route
              path="/photonic-light-therapy"
              component={PhotonicLightTherapy}
            />
            <Route path="/sport-massage" component={SportMassage} />
            <Route path="/testimonials" component={Testimonials} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
    );
  }
}

export default Content;
