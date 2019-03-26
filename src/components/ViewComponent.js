import React from 'react';

import { FaListUl, FaTable } from 'react-icons/fa';

import TableComponent from './TableComponent';
import GridComponent from './GridComponent';
import Pagination from './Pagination';
import { connect } from 'react-redux';

class ViewComponent extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      show: false,
      isTabular: true,
    }

    this.toggle = this.toggle.bind(this);
    this.showListView = this.showListView.bind(this);
    this.showGridView = this.showGridView.bind(this);
  }

  toggle() {
    this.setState({ show: true });
  }

  showListView() {
    this.setState({ isTabular: true });
  }

  showGridView() {
    this.setState({ isTabular: false });
  }

  render() {
    const {isSignedIn} = this.props;

    return (
      <React.Fragment>        
        <h1>Events</h1>
        <div className="row">
          <div className="col-md-6">
            <a href="#" onClick={this.showListView}><FaListUl /> List view</a> | <a onClick={this.showGridView} href="#"><FaTable /> Grid view</a>
          </div>
          <div className="col-md-6">
            <Pagination currentPage="1" />
          </div>
        </div>
        
        {this.state.isTabular ? <TableComponent isSignedIn={isSignedIn} /> : <GridComponent isSignedIn={isSignedIn} /> }

        <Pagination currentPage="1" />
      </React.Fragment>
    )
  } 
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
}

export default connect(mapStateToProps, null)(ViewComponent);