import * as actions from './actions';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import nock from 'nock';

import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
 } from './constants'

 const mockStore = configureMockStore([thunkMiddleware]);

it ('should create an action to search robots', (() => {
  const text = 'wooo';
  const expectedAction = {
    type: CHANGE_SEARCHFIELD,
    payload: text
  }

  expect(actions.setSearchField(text)).toEqual(expectedAction);

}));

// it ('handles requesting robots API', (done) => {
//   const store = mockStore();
//   store.dispatch(actions.requestRobots());
//   const action = store.getActions();
//   const expectedAction1 = {
//     type: REQUEST_ROBOTS_PENDING,
//   };
//   const expectedAction2 = {
//     type: REQUEST_ROBOTS_SUCCESS,
//   }

//   var apiCall = nock('https://jsonplaceholder.typicode.com')
//                 .get('/users')
//                 .reply(200, {
//                   _id: '1',
//                   username: 'pgte',
//                   email: 'pedro.teixeira@gmail.com'
//                  });

//   expect(action[0]).toEqual(expectedAction1);
//   expect(action[1]).toEqual(expectedAction2);

// });

it ('handles requesting robots API', (done) => {

  let apiCall = nock('https://jsonplaceholder.typicode.com/')
  .get('/users')
  .reply(200, [{
    "id": "1",
    "username": "pgte",
    "email": "pedro.teixeira@gmail.com"
   }], { 'Access-Control-Allow-Origin': '*',
'Content-type': 'application/json' });

  const store = mockStore();
  const expectedAction1 = {
    type: REQUEST_ROBOTS_PENDING,
  };
  const expectedAction2 = {
    type: REQUEST_ROBOTS_SUCCESS,
  }
  store.dispatch(actions.requestRobots()).then(() => {
    const action = store.getActions();
    expect(action[0].type).toEqual(expectedAction1.type);
    expect(action[1].type).toEqual(expectedAction2.type);
    done();
  });
  
  
  });
  