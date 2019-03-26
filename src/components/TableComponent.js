import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FaTrashAlt, FaRegEdit, FaRegEye } from 'react-icons/fa';

import { getEvents } from '../actions/events.action';
import _ from 'lodash';

class TableComponent extends React.Component {
    componentDidMount() {
        this.props.getEvents();
    }

    renderTableRow() {
        const {isSignedIn} = this.props;

        return _.map(this.props.events, (event, key) => {
            return (
                <tr key={key}>
                <td>{event._id + 1}</td>
                <td>
                    <label><input type="checkbox" /> {event.name}</label>
                </td>
                <td>{event.type}</td>
                <td>{event.length}</td>
                <td>{event.views}</td>
                <td>{event.cost}</td>
                <td>
                    <Link className="btn btn-sm btn-success mr-1 btn-icon-only" to={`/view-event/${event._id}`}><FaRegEye /></Link>
                    {isSignedIn &&
                    <Fragment>
                        <a title="edit" className="btn btn-sm btn-primary mr-1 btn-icon-only"><FaRegEdit /></a>
                        <a title="delete" className="btn btn-sm btn-danger btn-icon-only"><FaTrashAlt /></a>
                    </Fragment>}
                </td>
                </tr>
            )
        })
    }
    
    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                    <th>id</th>
                    <th><input type="checkbox" /> Event Name</th>
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

export default connect(mapStateTopProps, { getEvents })(TableComponent);