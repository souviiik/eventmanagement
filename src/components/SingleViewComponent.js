import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getEvent } from '../actions/events.action';

class SingleViewComponent extends Component {
    componentDidMount(){
        const { id } = this.props.match.params;
        this.props.getEvent(id);
    }
    
    render() {
        const { isSignedIn, event } = this.props;
        
        return (
            <Fragment>
                {event && <Fragment>
                    <h1>{event.name}</h1>
                    <small class="text-muted">TYPE: <span className="text-primary">{event.type}</span> · LENGTH: <span className="text-primary">{event.length}</span> mins · COST: Rs <span className="text-primary">{event.cost}</span> · EVENT DATE: <span className="text-primary">{event.date}</span></small>                
                    <hr className="featurette-divider" />
                    {event.desc}
                    {isSignedIn &&
                        <Fragment>
                            <hr className="featurette-divider" />
                            <Link to={`/update-event/${event._id}`} className="btn btn-primary mr-1">Edit this event</Link>
                            <button className="btn btn-danger">Delete this event</button>
                        </Fragment>
                    }
                </Fragment>}
            </Fragment>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        event: state.events[ownProps.match.params.id],
        isSignedIn: state.auth.isSignedIn,
    };
}

export default connect(mapStateToProps, { getEvent })(SingleViewComponent);

