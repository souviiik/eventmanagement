import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FaPlusCircle } from 'react-icons/fa';
import { connect } from 'react-redux';

import { getEvent } from '../actions/events.action';

class SingleViewComponent extends Component {
    componentDidMount(){
        // if(!this.props.post) {
            const { id } = this.props.match.params;
            console.log('id', id);
            // this.props.fetchPost(id);
        // }
    }
    
    render() {
        const {isSignedIn} = this.props;
        return (
            <Fragment>
                <h1>Hello { this.props.match.params.id }!</h1>
                <small class="text-muted">Type · Length · Cost</small>                
                <hr className="featurette-divider" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque congue tincidunt turpis, vel ultricies nisl tempus id. Sed sed tincidunt quam. Ut scelerisque viverra tortor sit amet convallis. Curabitur ac tristique orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget turpis in enim condimentum varius a vel mi. Integer tincidunt lectus placerat justo porttitor varius.</p>
                <p>Nam sagittis eros in nibh imperdiet maximus a vel lectus. Nam varius aliquet molestie. In pharetra est in consequat volutpat. Maecenas pharetra, nunc ut suscipit iaculis, nisl nulla pellentesque velit, in tincidunt tellus quam ut massa. Phasellus auctor elit nisi, eget scelerisque libero blandit sit amet. Nullam scelerisque purus eget placerat blandit. In eleifend lacus vitae magna vestibulum tristique. Nulla vitae tortor ante. Proin non quam volutpat, placerat quam at, posuere erat. Sed diam massa, semper eu fringilla quis, aliquam non ligula. Nullam maximus consequat sapien ut viverra. Integer sed lorem eget velit consequat semper a at nibh. Cras in vehicula libero. Curabitur vitae ante augue. Integer id egestas dolor. Vestibulum fringilla vitae nisl nec tempor.</p>
                <p>Nullam porta tristique porta. Mauris aliquet, orci id imperdiet facilisis, urna risus sodales tellus, ut ornare felis ex non ipsum. In sed magna sit amet libero condimentum gravida a vitae erat. Sed rhoncus, justo nec pellentesque commodo, tortor lorem volutpat magna, eget consequat nisi neque at orci. Integer ut sem ac magna sodales venenatis. Pellentesque volutpat sollicitudin dolor, eget suscipit nunc commodo sit amet. Proin libero dui, elementum ut eros ac, interdum aliquam massa. Nam rhoncus dolor a risus venenatis auctor. Donec eu elementum arcu. Aenean sagittis erat et lorem lacinia, ac faucibus nunc consectetur.</p>
                <p>Morbi mi est, vulputate a urna bibendum, molestie dapibus lectus. In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce elementum laoreet maximus. Donec a sapien ut nulla porttitor ultrices. Mauris imperdiet justo eros, in ultrices elit congue vel. Etiam porttitor varius velit eget condimentum.</p>
                <p>Proin sed elementum dolor. Vestibulum luctus justo ut orci pellentesque vestibulum. Maecenas a lectus eleifend, tincidunt leo vel, venenatis eros. Nam finibus ultrices ante, eget convallis sem pulvinar at. Phasellus pharetra, turpis in molestie tincidunt, lectus sapien suscipit tellus, ac tempus quam leo pulvinar ante. Donec urna tellus, varius non suscipit a, feugiat sit amet tellus. Phasellus vel enim ligula. Sed nunc sem, euismod sed hendrerit non, finibus ultrices erat. Pellentesque pellentesque nec neque vestibulum vulputate. Donec a interdum lorem, id mattis lacus. Nulla ultricies mi id posuere pellentesque. Suspendisse non nunc nisi. Duis euismod sagittis tristique.</p>
                {isSignedIn &&
                    <Fragment>
                        <hr className="featurette-divider" />
                    
                        <button className="btn btn-primary mr-1">Edit this event</button>
                        <button className="btn btn-danger">Delete this event</button>
                    </Fragment>
                }
            </Fragment>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        event: state,
        isSignedIn: state.isSignedIn,
    };
}

export default connect(mapStateToProps, { getEvent })(SingleViewComponent);

