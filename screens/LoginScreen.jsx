import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { styles } from "../assets/styles/styles";
import { TextInput, Button } from 'react-native-paper';
import { readData } from '../utils';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState([])
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      const users = await readData('users.json');
      setUserData(users);
    };

    fetchUserData();
  }, []);

  const handleLogin = () => {
    const foundUser = userData.find(user => user.username === username && user.password === password);
    if (foundUser) {
      console.log(foundUser)
      setMessage('Inicio de sesión exitoso');
      navigation.navigate('Rent', { username: foundUser.username });
    } else {
      console.log(foundUser)
      setMessage('Nombre de usuario o contraseña incorrectos');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold", marginBottom: 10 }}>Inicio sesión</Text>
      <TextInput
        label="Usuario"
        mode="outlined"
        left={<TextInput.Icon icon="account" />}
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        label="Contraseña"
        mode="outlined"
        left={<TextInput.Icon icon="key" />}
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
      />
      <Button style={{ marginTop: 10, backgroundColor:'orange' }}
          icon="login"
          mode="contained"
          onPress={handleLogin}>
        <Text style={{ fontWeight: "bold", marginBottom: 10 }}>Entrar</Text>
      </Button>
      <Text style={{ fontWeight: "bold", marginBottom: 10, alignItems:'center' }}>{message}</Text>
    </View>
  );
}

export default LoginScreen;