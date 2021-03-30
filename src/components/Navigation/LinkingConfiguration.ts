import { LinkingOptions } from "@react-navigation/native";
import { makeUrl } from "expo-linking";

export const linking: LinkingOptions = {
  prefixes: [makeUrl("/")],
  config: {
    screens: {
      Root: {
        screens: {
          Meditation: 'meditation',
          TabOne: {
            screens: {
              TabOneScreen: "one",
            },
          },
          TabTwo: {
            screens: {
              TabTwoScreen: "two",
            },
          },
        },
      },
      NotFound: "*",
    },
  },
};
