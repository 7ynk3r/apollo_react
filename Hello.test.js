import 'react-native';
import React from 'react';
import App from './App';

const sleep = (time) => new Promise(sucess => setTimeout(sucess, time));

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('app renders correctly', async () => {
  const tree = renderer.create(<App />);
  expect(tree).toMatchSnapshot();
  await sleep(2000)
  expect(tree).toMatchSnapshot();
});
