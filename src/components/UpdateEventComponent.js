import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import { updateEvent, getEvent } from '../actions/events.action';
import AddEventComponent from './AddEventComponent';
import { generateOptions } from '../utils';

class UpdateEventComponent extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {}

    // this.state = {
    //   event: {
    //     name: null,
    //     type: null,
    //     length: null,
    //     cost: null,
    //     desc: null,
    //     date: null,
    //     views: null,
    //   },
    //   id: 0,
    //   name: '',
    //   type: '',
    //   length: 0,
    //   views: 0
    // }

    this.updateInputValue = this.updateInputValue.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getEvent(id);

    // console.log("this.props ", this.props);

    // const { name, length, type, views, cost } = this.props.event;

    // this.setState({
    //   name,
    //   length,
    //   type,
    //   cost,
    //   views: views+1
    // });
  }

  handleChange = e => {    
    // let event = this.state.event;
    // event[e.target.name] = e.target.value;
    // this.setState({event : event, isAdd: true});
  };
  
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
    const { event } = this.props;

    return (      
      <AddEventComponent event={event} />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    event: state.events[ownProps.match.params.id],
  };
}

export default connect(mapStateToProps, { updateEvent, getEvent })(UpdateEventComponent);