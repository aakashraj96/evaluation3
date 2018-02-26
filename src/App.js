import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import MainBody from './Components/MainBody/MainBody';
import LeftMenu from './Components/LeftMenu/LeftMenu';
import RefreshButton from './Components/RefreshButton/RefreshButton';
import CenterDiv from './Components/CenterDiv/CenterDiv';
import actions from './redux/actions/';
import AuthorBlock from './Components/AuthorBlock/AuthorBlock';
import TopBar from './Components/TopBar/TopBar';

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
          console.log('The books data going to redux store is: ', json);
          this.props.updateBooks(json);
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
      console.log('Books object', Object.keys(this.props.books));
      const authors = Object.keys(this.props.books).sort((a, b) => {
        if (a > b) {
          return 1;
        }

        return -1;
      }).map(author => <AuthorBlock authorName={author} key={Date.now()} />);
      return (
        <div className="container">
          <LeftMenu />
          <MainBody >
            <TopBar />
            {authors}
          </MainBody>
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


const mapStateToProps = (state) => {
  console.log('state is :', state);
  return {
    books: state.updater.books,
  };
};
const mapDispatchToProps = dispatch => ({
  updateBooks: (books) => {
    dispatch(actions.updateBooks('UPDATEBOOKS', books));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
