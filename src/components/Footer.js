import React, { Component, Fragment } from 'react';

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <hr className="featurette-divider" />
                <footer className="container">
                    <p className="float-right"><a href="#">Back to top</a></p>
                    <p>© 2019 Events Management / TOKAI · <a href="#">Privacy</a> · <a href="#">Terms</a></p>
                </footer>
            </Fragment>
        );
    }
}

export default Footer;
