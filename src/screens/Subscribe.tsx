import {StyleSheet, View, Image, Text, Alert} from 'react-native';
import React, {useState} from 'react';
import {Input} from '../components/ui/Input';
import {Button} from '../components/ui/Button';

const Logo = require('../assets/little-lemon-logo-grey.png');

function isValidEmail(email: string): boolean {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export const SubscribeScreen = () => {
  const [email, setEmail] = useState(``);
  const onSubmit = () => {
    Alert.alert('Thanks for subscribing, stay tuned!');
  };
  const isValid = isValidEmail(email);
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.subTitle} numberOfLines={2}>
          Subscribe for our latest delicious recipes
        </Text>
        <Input onChangeText={setEmail} placeholder="email" />
        <Button onPress={onSubmit} disabled={!isValid}>
          Newsletter
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  form: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  subTitle: {
    marginTop: 15,
    maxWidth: 200,
    textAlign: 'center',
  },
});
