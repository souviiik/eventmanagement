import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { generateOptions } from '../utils';
import { createEvent } from '../actions/events.action';

class AddEventComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
    
    this.state = {
      name: '',
      length: 0,
      type: '',
      views: 0,
      cost: 0,
      desc: '',
      date: null,
      EVENT_TYPES: ['Christmas', 'Party', 'Concert', 'Birthday', 'Wedding'],
      page_title: 'Add',
      selected_option: ''
    }

    this.updateInputValue = this.updateInputValue.bind(this);
    this.submit = this.submit.bind(this);
  }

  componentWillUpdate () {
    this.setState({selected_option: this.props.event.type});
  }
  
  updateInputValue = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submit(e) {
    e.preventDefault();
    this.props.createEvent(this.state);
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="container">
          <br />
          <h3>{this.state.page_title} Event</h3>
          <form role="search" onSubmit={this.submit}>
            {/* TODO: Build form here to add event */}
            <div className="form-group">
              <label htmlFor="eventName">Event Name</label>
              <input
                name="name"
                type="text"
                className="form-control"
                id="eventName"
                placeholder="Event Name"
                onChange={this.updateInputValue}
                value={this.state.name}
              />
            </div>

            <div className="form-group">
              <label htmlFor="eventType">Event Type</label>
              <select className="form-control" id="eventType" name="type" onChange={this.updateInputValue}>
                <option value="0">-- Select event type --</option>
                {generateOptions(this.state.EVENT_TYPES, this.state.selected_option)}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="eventLength">Event Length  ({this.state.length} mins)</label>
              <input
                name="length"
                type="range"
                className="form-control-range"
                id="eventLength"
                aria-describedby="emailHelp"
                min="10"
                max="1000"
                onChange={this.updateInputValue}
              />
              <small id="emailHelp" className="form-text text-muted">Please enter a numeric input with length between 10-1000.</small>
            </div>

            <div className="form-group">
              <label htmlFor="eventCost">Event Cost</label>
              <input
                name="cost"
                type="text"
                className="form-control"
                id="eventCost"
                placeholder="Enter email"
                onChange={this.updateInputValue}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="eventDetails">Event Details</label>
              <textarea
                name="desc"
                className="form-control"
                id="eventDetails"
                onChange={this.updateInputValue}
                rows="3"></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="eventDate">Event Date</label>
              <input
                name="date"
                type="date"
                className="form-control"
                id="eventDate"
                placeholder="Enter email"
                onChange={this.updateInputValue}
                />
            </div>

            <button className="btn btn-primary mr-1">{this.state.page_title} event</button>
            <Link to="/" className="btn btn-danger">Cancel</Link>
          </form>
      </div>
    )
  }
}

export default connect(null, { createEvent })(AddEventComponent);