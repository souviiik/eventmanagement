import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AddEventComponent from './AddEventComponent';
import App from './App';
import ViewComponent from './ViewComponent';
import UpdateEventComponent from './UpdateEventComponent';
import SingleViewComponent from './SingleViewComponent';
import Header from './Header';
import Footer from './Footer';

class Main extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <div className="container">
          <Route path="/" exact component={App} />
          <Route path="/add-events" component={AddEventComponent} />
          <Route path="/view-event/:id" component={SingleViewComponent} />
          <Route path="/view-events" component={ViewComponent} />
          <Route path="/update-event" component={UpdateEventComponent} />
          </div>
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default Main;