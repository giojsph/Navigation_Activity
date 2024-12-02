import React from 'react';
import { View } from 'react-native';
import { TextInput, Button, Text, Icon } from 'react-native-paper';

const RegisterScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      {/* Icon */}
      <Icon source="dumbbell" size={60} style={{ marginBottom: 20 }} />
      
      {/* Title */}
      <Text style={{ fontSize: 30, fontWeight: 'bold', marginBottom: 30 }}>Gym Buddies</Text>
      
      {/* Input*/}
      <TextInput label="Email" style={{ width: '100%', marginBottom: 15 }} />
      <TextInput label="Username" style={{ width: '100%', marginBottom: 15 }} />
      <TextInput label="Password" secureTextEntry style={{ width: '100%', marginBottom: 15 }} />
      
      {/* Register Button */}
      <Button mode="contained" style={{ width: '100%', marginVertical: 10 }}>Register</Button>
      <Button onPress={() => navigation.navigate('Login')}>Back to Login</Button>
    </View>
  );
};

export default RegisterScreen;
