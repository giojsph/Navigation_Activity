import React from 'react';
import { View } from 'react-native';
import { TextInput, Button, Text, Icon } from 'react-native-paper';

const ForgotPasswordScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      {/*Icon */}
      <Icon source="dumbbell" size={60} style={{ marginBottom: 20 }} />
      
      
      <Text style={{ fontSize: 30, fontWeight: 'bold', marginBottom: 30 }}>Gym Buddies</Text>
      
      
      <TextInput label="Email" style={{ width: '100%', marginBottom: 15 }} />
      
      {/* Reset Password Button */}
      <Button mode="contained" style={{ width: '100%', marginVertical: 10 }}>Reset Password</Button>
      <Button onPress={() => navigation.navigate('Login')}>Back to Login</Button>
    </View>
  );
};

export default ForgotPasswordScreen;
