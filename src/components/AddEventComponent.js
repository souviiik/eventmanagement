import React from 'react';
import { createEvent } from '../actions/events.action';
import { connect } from 'react-redux';

class AddEventComponent extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      name: '',
      length: 0,
      type: '',
      views: 0
    }

    this.updateInputValue = this.updateInputValue.bind(this);
    this.submit = this.submit.bind(this);
  }

  updateInputValue = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submit() {
    this.props.createEvent(this.state);
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="container">
          <br />
          <h3>Manage Event</h3>
          <form role="search">
            {/* TODO: Build form here to add event */}
          </form>
      </div>
    )
  }
}

export default connect(null, { createEvent })(AddEventComponent);