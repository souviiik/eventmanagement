import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FaTrashAlt, FaRegEdit, FaRegEye } from 'react-icons/fa';

import { getEvents, deleteEvent } from '../actions/events.action';
import _ from 'lodash';

class TableComponent extends React.Component {
    componentDidMount() {
        this.props.getEvents();
    }

    deleteEvent = (id, key) => {
        const deleteEvent = window.confirm('Do you want to delete this event?');

        if(deleteEvent) {
            this.props.deleteEvent(id, key);
        }
    }

    renderTableRow() {
        const {isSignedIn, events} = this.props;

        return _.map(events, (event, key) => {
            return (
                <tr key={key}>
                <td>{event._id + 1}</td>
                <td>
            <label>{isSignedIn && <input type="checkbox" /> } {event.name}</label>
                </td>
                <td>{event.type}</td>
                <td>{event.length}</td>
                <td>{event.views}</td>
                <td>{event.cost}</td>
                <td>
                    <Link className="btn btn-sm btn-success mr-1 btn-icon-only" title="view" to={`/view-event/${event._id}`}><FaRegEye /></Link>
                    {isSignedIn &&
                    <Fragment>
                        <Link  to={`/update-event/${event._id}`} title="edit" className="btn btn-sm btn-primary mr-1 btn-icon-only"><FaRegEdit /></Link>
                        <a onClick={() => this.deleteEvent(event._id, key)} title="delete" className="btn btn-sm btn-danger btn-icon-only"><FaTrashAlt /></a>
                    </Fragment>}
                </td>
                </tr>
            )
        })
    }
    
    render() {
        const {isSignedIn} = this.props;

        return (
            <table className="table">
                <thead>
                    <tr>
                    <th>id</th>
                    <th>{isSignedIn && <input type="checkbox" />} Event Name</th>
                    <th>Type</th>
                    <th>Length (Mins)</th>
                    <th>Views</th>
                    <th>Cost</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderTableRow()}
                </tbody>
            </table>
        );
    }
}

function mapStateTopProps(state) {
  return {
    events: state.events
  }
}

export default connect(mapStateTopProps, { getEvents, deleteEvent })(TableComponent);