import * as React from 'react';
import {View} from 'react-native';
import renderer from 'react-test-renderer';
import {App} from '../App';

it('should render react native component correctly', () => {
  const tree = renderer.create(<View>Hello world</View>).root;
  expect(tree.findByType(View)).toBeTruthy();
});

it('should render root component', () => {
  const root = renderer.create(<App />).root;
  expect(root.children).toHaveLength(1);
});
