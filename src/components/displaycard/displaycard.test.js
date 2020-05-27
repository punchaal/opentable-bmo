import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import DisplayCard from './displaycard.component';
import { Provider } from 'react-redux';
import store from '../../redux/store';

describe('Card component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <DisplayCard />
      </Provider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <DisplayCard name='Card' />{' '}
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
