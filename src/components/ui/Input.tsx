import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';

interface Props {
  label?: string;
  type?: 'text';
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
}

export const Input = ({label, placeholder, value, onChangeText}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={placeholder}
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          autoComplete="off"
          autoCapitalize="none"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    maxHeight: 90,
    height: 40,
    minWidth: 300,
    paddingHorizontal: 4,
    flex: 1,
    gap: 4,
  },
  label: {
    fontWeight: 'bold',
  },
  inputContainer: {
    height: 40,

    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    width: '90%',
    height: 40,
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
});
