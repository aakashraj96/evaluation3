import React from 'react';
import { connect } from 'react-redux';
import BookCard from '../BookCard/BookCard';
import './AuthorBlock.css';

const AuthorBlock = (props) => {
  // console.log('Checking for book id: ', props.books[props.authorName][0]);
  props.books[props.authorName].sort((a, b) => a.id - b.id);
  const bookCards = props.books[props.authorName].map(book => <BookCard name={book.name} author={props.authorName} rating={book.rating} like={book.like} id={book.id} />);
  return (<div className="authorContainer" >
    <div className="authorHeading">

      <p className="headingFont"> {props.authorName} </p>
    </div>
    <div className="booksContainer">
      {bookCards}
    </div>
  </div>);
};


const mapStateToProps = (state) => {
  console.log('state is :', state);
  return {
    books: state.updater.books,
  };
};


export default connect(mapStateToProps)(AuthorBlock);
