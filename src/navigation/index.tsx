// import type {CompositeNavigationProp} from '@react-navigation/native';
import type {RootStackParamList} from './stack';
import {useNavigation} from '@react-navigation/native';
import type {StackNavigationProp} from '@react-navigation/stack';

type RootNavigation = StackNavigationProp<RootStackParamList>;

export const useNavigationTyped = () => {
  const navigation = useNavigation<RootNavigation>();
  return navigation;
};
