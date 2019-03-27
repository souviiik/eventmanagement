import React, { Component } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { connect } from 'react-redux';

import { signIn, signOut } from '../actions/events.action';

class GoogleAuth extends Component {
    // state = { isSignedIn: null };

    componentDidMount () {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '79247092004-4kdq0o0t7pehafj3oep4bj799ik95m3u.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                // this.setState({
                //     isSignedIn: this.auth.isSignedIn.get(),
                // });
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    // onAuthChange = () => {
    //     this.setState({
    //         isSignedIn: this.auth.isSignedIn.get(),
    //     });
    // }

    onAuthChange = (isSignedIn) => {
        if(isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getBasicProfile().ig);
        } else {
            this.props.signOut();
        }
    }

    onSignInClick = () => {
        this.auth.signIn();
    };

    onSignOutClick = () => {
        this.auth.signOut();
    };

    renderAuthButton() {
        if(this.props.isSignedIn === null ) {
            return null;
        } else if(this.props.isSignedIn) {
            return <button className="btn btn-danger" onClick={this.onSignOutClick}><FaGoogle /> Sign out</button>
        } else {
            return <button className="btn btn-danger" onClick={this.onSignInClick}><FaGoogle /> Sign in with Google</button>;
        }
    }

    render() {
        return <div>{this.renderAuthButton()}</div>;
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn };
}

export default connect(
    mapStateToProps, 
    { signIn, signOut }
)(GoogleAuth);
