import React, { Component } from 'react';
import './BookCard.css';
import bookCover from '../../images/bookcover.jpg';
import like from '../../images/heart.svg';
import { connect } from 'react-redux';

class BookCard extends Component {
  constructor(props) {
    super(props);
    console.log('THE BOOK Id IS: ', this.props.id);
    this.state = {
      buttonState: this.props.like,
      buttonColor: this.chooseButtonColor(this.props.like),
    };
  }
  chooseButtonColor = (value) => {
    if (value === 1) {
      return '#D23426';
    }

    return '#7B7B7B';
  }
  render() {
    return (<div className="bookcard">
      <img className="bookImage" src={bookCover} />
      <button
        className="likeButton"
        type="button"
        style={{ backgroundColor: this.state.buttonColor }}
        onClick={() => {
      if (this.state.buttonState === 0) {
        fetch('/like', {
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ bookid: this.props.id }),
                });
        this.setState({
          buttonState: 1,
          buttonColor: '#D23426',
        });
      } else {
        fetch('/dislike', {
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ bookid: this.props.id }),
                });
        this.setState({
          buttonState: 0,
          buttonColor: '#7B7B7B',
        });
      }
    }}><img
      src={like}
      className="buttonIcon"
      alt="likeButton"
    />
      </button>
      <div className="cardContent">
        <p className="cardTitle">{this.props.name} </p>
        <p className="cardRating">{this.props.rating}</p>
        <p className="cardAuthor">{this.props.author.toUpperCase()}</p>
      </div>
    </div>);
  }
}


// const mapStateToProps = (state) => {
//   console.log('state is :', state);
//   return {
//     books: state.updater.books,
//   };
// };
// const mapDispatchToProps = dispatch => ({
//   updateBooks: (books) => {
//     dispatch(actions.updateBooks('UPDATEBOOKS', books));
//   },
// });
//
// export default connect(mapStateToProps, mapDispatchToProps)(BookCard);

export default BookCard;
