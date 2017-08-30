import * as ActionTypes from '../actionTypes/action';

//select book is an action creator, it will need an action type
export const selectBook = book => {

  return {
    //You should create a Type and Payload for your Action here
    type: ActionTypes.SELECT_BOOK,
    payload: book
  };
}
