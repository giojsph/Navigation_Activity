import React from 'react';
import { View } from 'react-native';
import { TextInput, Button, Text, Icon } from 'react-native-paper';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      {/* Gym Icon */}
      <Icon source="dumbbell" size={60} style={{ marginBottom: 20 }} />
      
      {/* Gym Buddies Title */}
      <Text style={{ fontSize: 30, fontWeight: 'bold', marginBottom: 30 }}>Gym Buddies</Text>
      
      {/* Login Inputs */}
      <TextInput label="Username" style={{ width: '100%', marginBottom: 15 }} />
      <TextInput label="Password" secureTextEntry style={{ width: '100%', marginBottom: 15 }} />
      
      {/* Buttons */}
      <Button mode="contained" style={{ width: '100%', marginVertical: 10 }}>Login</Button>
      <Button onPress={() => navigation.navigate('Register')}>Register</Button>
      <Button onPress={() => navigation.navigate('Forgot Password')}>Forgot Password?</Button>
    </View>
  );
};

export default LoginScreen;
