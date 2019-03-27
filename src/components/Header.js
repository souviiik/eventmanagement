import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaPlusCircle } from 'react-icons/fa';
import { connect } from 'react-redux';

import GoogleAuth from './GoogleAuth';

class Header extends Component {
    render() {
        const { isSignedIn, userName } = this.props;

        return (
            <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
                <h5 className="my-0 mr-md-auto font-weight-normal"><Link to="/">Events Management</Link></h5>
                {isSignedIn && <nav className="my-2 my-md-0 mr-md-3">
                    Welcome <strong>{userName}</strong>
                    <Link to="/add-events" style={{ paddingLeft: '20px', marginLeft: '20px', borderLeft: '1px solid #CCC' }}><FaPlusCircle /> Add Events</Link>
                </nav>}
                <GoogleAuth />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { 
        isSignedIn: state.auth.isSignedIn,
        userName: state.auth.userName,
    };
}

export default connect(mapStateToProps, null)(Header);
