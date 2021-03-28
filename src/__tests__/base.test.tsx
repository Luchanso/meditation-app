import * as React from "react";
import { View } from "react-native";
import renderer from "react-test-renderer";

it(`renders correctly`, () => {
  const tree = renderer.create(<View>Hello world</View>).root;
  expect(tree.findByType(View)).toBeTruthy();
});
