import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FaTrashAlt, FaRegEdit, FaRegEye } from 'react-icons/fa';
import { connect } from 'react-redux';

import { getEvents } from '../actions/events.action';
import _ from 'lodash';

class GridComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

  componentDidMount() {
    this.props.getEvents();
  }

  renderEventCard() {
      const {isSignedIn} = this.props;

    return _.map(this.props.events, (event, key) => {
        return (
            <div className="col-md-6">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{event._id + 1}<br /><span className="text-primary">{event.name}</span></h5>
                        <p className="card-text">Event Type: {event.type}<br/>
                        Length: {event.length} mins<br/>
                        Views: {event.views}<br/>
                        Cost: {event.cost}</p>

                        <Link to={`/view-event/${event._id}`} className="btn btn-sm btn-primary mr-1"><FaRegEye /> View</Link>
                        {isSignedIn && <Fragment>
                        <Link to={{ pathname: `/update-event/${event._id}`, state: event }} className="btn btn-sm btn-primary mr-1"><FaRegEdit /> Update</Link>
                        <a href="#" className="btn btn-sm btn-danger"><FaTrashAlt /> Delete</a>
                        </Fragment>
                        }
                    </div>
                </div>
            </div>
        )
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="row">                    
                    {this.renderEventCard()}
                </div>
            </React.Fragment>
        );
    }
}

function mapStateTopProps(state) {
  return {
    events: state.events
  }
}

export default connect(mapStateTopProps, { getEvents })(GridComponent);