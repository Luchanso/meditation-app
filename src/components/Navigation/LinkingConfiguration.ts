import {LinkingOptions} from '@react-navigation/native';

export const linking: LinkingOptions = {
  prefixes: ['/'],
  config: {
    screens: {
      Root: {
        screens: {
          Meditation: {
            screens: {
              MeditationScreen: 'meditation',
            },
          },
          TabOne: {
            screens: {
              TabOneScreen: 'one',
            },
          },
          TabTwo: {
            screens: {
              TabTwoScreen: 'two',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
