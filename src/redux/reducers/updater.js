const defaultState = {
  books: {},

};

export default (prevstate = defaultState, action) => {
  switch (action.type) {
    case 'UPDATEBOOKS': {
      const temp = Object.assign({}, prevstate.books, action.payload);
      return {
        ...prevstate,
        books: temp,
      };
    }
    default:
    {
      return prevstate;
    }
  }
};
