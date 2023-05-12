import { useState } from 'react';
import { View, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { styles } from "../assets/styles/styles";
import { writeUserData } from "../utils"

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');


  const handleRegister = () => {
    const newUser = { username, password };
    writeUserData(newUser, 'users.json');
    setMessage('Usuario registrado correctamente');
    console.log(newUser)
    navigation.navigate('Login');
  };

  /*
  const handleRegister = () => {
    if (username === '' || password === '') {
      setMessage('Usuario y contraseña obligatorios');
      return;
    }

    const userExists = users.some(user => user.username === username);

    if (userExists) {
      setMessage('El usuario ya existe');
    } else {
      const newUser = { username, password };
      writeUserData(newUser, 'users.json');
      setMessage('Usuario registrado correctamente');
      navigation.navigate('Login')
    }
  };
  */

  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold", marginBottom: 10 }}>Registrarse</Text>
      <TextInput
        label="Usuario"
        mode="outlined"
        left={<TextInput.Icon icon="account" />}
        value={username}
        onChangeText={setUsername} />
      <TextInput
        label="Contraseña"
        mode="outlined"
        left={<TextInput.Icon icon="key" />}
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true} />
      <Button style={{ marginTop: 10, backgroundColor:'red' }}
        icon="login"
        mode="contained"
        title="Registrarse"
        onPress={handleRegister}
      > Registrar
      </Button>
      <Text style={{ fontWeight: "bold", marginBottom: 10, alignItems:'center' }}>{message}</Text>
    </View>
  );
}

export default RegisterScreen;