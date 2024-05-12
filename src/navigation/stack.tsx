import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Welcome: undefined;
  Subscribe: undefined;
};

export const Stack = createNativeStackNavigator<RootStackParamList>();
