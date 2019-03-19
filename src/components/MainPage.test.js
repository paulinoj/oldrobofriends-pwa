import { shallow } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

let  wrapper;

beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: '',
    isPending: false
  }

  wrapper = shallow(<MainPage { ...mockProps } />)
});

it ('expect to render MainPage component', () => {
  expect(wrapper).toMatchSnapshot();
});

it('filters robots correctly', () => {
  expect(wrapper.instance().filterRobots()).toEqual([]);
});

it('filters robots correctly', () => {
  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [{
      id: 3, 
      name: 'John',
      email: 'john@gmail.com'
    }],
    searchField: '',
    isPending: false
  }
  let wrapper2 = shallow(<MainPage { ...mockProps2 } />)

  expect(wrapper2.instance().filterRobots()).toEqual([{
    id: 3, 
    name: 'John',
    email: 'john@gmail.com'
  }]);
});


