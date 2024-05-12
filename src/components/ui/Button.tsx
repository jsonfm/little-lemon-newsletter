import {Pressable, Text, StyleSheet} from 'react-native';
import React, {ReactNode} from 'react';

interface Props {
  children?: ReactNode;
  onPress?: () => void;
  disabled?: boolean;
}

export const Button = ({children, onPress, disabled = false}: Props) => {
  return (
    <Pressable
      style={({pressed}) => [
        styles.container,
        {opacity: pressed ? 0.8 : 1},
        {
          backgroundColor: disabled
            ? '#6a6a6a'
            : styles.container.backgroundColor,
          opacity: disabled ? 0.5 : 1,
        },
      ]}
      onPress={onPress}
      disabled={disabled}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#485F57',
    minWidth: 330,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 6,
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
});
