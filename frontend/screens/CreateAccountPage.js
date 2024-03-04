import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, StatusBar } from 'react-native';


const CreateAccountPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Image source={require('../imgs/loginpage_pic1.png')} style={styles.image} />
      <Text style={styles.title}>Get your snack today!</Text>
      <Text style={styles.subtitle}>Walk around the corner for a grub</Text>
      <TouchableOpacity style={styles.buttonEmail} onPress={() => {/* TODO: Implement sign-up with email */}}>
        <Text style={styles.buttonText}>Sign up with email</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonGoogle} onPress={() => {/* TODO: Implement sign-up with Google */}}>
        <Text style={styles.buttonText}>Sign up with Google</Text>
      </TouchableOpacity>
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginButton}>log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2e3bb0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '80%',
    height: '40%',
    resizeMode: 'contain',
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
    marginBottom: 30,
  },
  buttonEmail: {
    width: '80%',
    padding: 15,
    borderRadius: 5,
    backgroundColor: 'white',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonGoogle: {
    width: '80%',
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#DB4437',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    fontWeight: 'bold',
  },
  loginContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  loginText: {
    color: 'white',
  },
  loginButton: {
    fontWeight: 'bold',
    color: 'white',
  },
});

export default CreateAccountPage;
