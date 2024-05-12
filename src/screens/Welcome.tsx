import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {Button} from '../components/ui/Button';
import {useNavigationTyped} from '../navigation';

const Logo = require('../assets/little-lemon-logo.png');

export const WelcomeScreen = () => {
  const navigation = useNavigationTyped();

  return (
    <View style={styles.container}>
      <View style={styles.businessContainer}>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.text} numberOfLines={2}>
          Little Lemon your Local Mediterranean Bistro
        </Text>
      </View>

      <Button onPress={() => navigation.navigate('Subscribe')}>
        Newsletter
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  businessContainer: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  text: {
    marginTop: 20,
    fontWeight: 'bold',
    maxWidth: 200,
    textAlign: 'center',
  },
});
