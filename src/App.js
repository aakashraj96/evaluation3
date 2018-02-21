import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import MainBody from './Components/MainBody/MainBody';
import LeftMenu from './Components/LeftMenu/LeftMenu';
import RefreshButton from './Components/RefreshButton/RefreshButton';
import CenterDiv from './Components/CenterDiv/CenterDiv';
import actions from './redux/actions/';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pageNumber: -1,
    };
  }
  componentDidMount() {
    fetch('/getBooksAndLikes').then((response) => {
      console.log('response is ', response);
      response.json().then((json) => {
        if (json.msg) {
          console.log('Nodata');
          this.setState({ pageNumber: 0 });
        } else {
          console.log('There is data');
          this.setState({ pageNumber: 1 });
        }
      });
    });
  }


  render() {
    if (this.state.pageNumber === 0) {
      return (
        <div className="container">
          <LeftMenu />
          <MainBody >
            <CenterDiv>
              <h1> Oops! No books found! </h1>
              <h1 > Import them now? </h1>
              <RefreshButton />
            </CenterDiv>

          </MainBody>
        </div>
      );
    } else if (this.state.pageNumber === 1) {
      return (
        <div className="container">
          <LeftMenu />
          <MainBody />
        </div>
      );
    }
    return (
      <div className="container">
        <LeftMenu />
        <MainBody />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateBooks: (books) => {
    dispatch(actions.updateBooks('UPDATEBOOKS', books));
  },
});

export default connect(null, mapDispatchToProps)(App);
