import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

// single argument requires no parenthesis
// function with single statement equires no return
// async await replaces .then

/* dispatch({ type: FETCH_USER,
  payload: await axios.get('/api/current_user') });

  ==

  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res }); */