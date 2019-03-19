import { shallow, mount, render } from 'enzyme';
import React from 'react';
import CounterButton from './CounterButton';


describe('Test Button component', () => {
  it('expect to render Card Component', () => {
    expect(shallow(<CounterButton />)).toMatchSnapshot()
  });

  it('Test click event', () => {
    const mockCallBack = jest.fn();
    const button = shallow((<CounterButton />));

    // const button = shallow((<CounterButton onClick={mockCallBack} />));
    button.find('button').simulate('click');
    expect(button.state().count).toBe(2);
    // expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});