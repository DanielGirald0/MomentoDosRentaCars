import { useState } from 'react';
import { View, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { styles } from "../assets/styles/styles";

let users = [
  { username: 'dgh', name: 'Daniel Giraldo', password: '11', role: 1 },
  { username: 'ppp', name: 'Pepito Perez ', password: '22', role: 2 },
  { username: 'user', name: 'Jhon Doe ', password: '33', role: 3 }

]

export default function RegisterScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = () => {
    if (username === '' || password === '') {
      setMessage('Usuario y contraseña obligatorios');
      return;
    }

    const userExists = users.some(user => user.username === username);

    if (userExists) {
      setMessage('El usuario ya existe');
    } else {
      users.push({ username, password });
      setMessage('Usuario registrado correctamente');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold", marginBottom: 10 }}>Nombre de usuario:</Text>
      <TextInput
        label="Usuario"
        mode="outlined"
        left={<TextInput.Icon icon="account" />}
        value={username}
        onChangeText={setUsername} />
      <Text style={{ fontWeight: "bold", marginBottom: 10 }}>Contraseña:</Text>
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