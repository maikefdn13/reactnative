import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure() // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from // controls connection & communication settings
    .useReactNative() // add all built-in react native plugins
    .connect(); // let's connect!
  // eslint-disable-next-line no-console
  console.tron = tron;

  tron.clear();
}
