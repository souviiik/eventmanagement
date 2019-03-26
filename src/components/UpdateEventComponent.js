import React from 'react';
import { connect } from 'react-redux';
import { updateEvent } from '../actions/events.action';

class UpdateEventComponent extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      id: 0,
      name: '',
      type: '',
      length: 0,
      views: 0
    }

    this.updateInputValue = this.updateInputValue.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    const { id, name, length, type, views } = this.props.location.state;

    this.setState({
      id,
      name,
      length,
      type,
      views: views+1
    });
  }

  updateInputValue = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  update() {
    this.props.updateEvent(this.state);
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="container">
          <br />
          <h3>Update Event</h3>
          <form role="search">
            {/* TODO: Build form here to update event */}
          </form>
      </div>
    )
  }
}

export default connect(null, { updateEvent })(UpdateEventComponent);