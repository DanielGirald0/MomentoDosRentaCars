import { useState } from "react";
import { View, Text } from "react-native";
import { styles } from "../assets/styles/styles";
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


export let users= [
  { username: 'dgh', name: 'Daniel Giraldo', password: '11', role: 1 },
  { username: 'ppp', name: 'Pepito Perez ', password: '22', role: 2 },
  { username: 'user', name: 'Jhon Doe ', password: '33', role: 3 }
]

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      navigation.navigate('Rent');
    } else {
      alert('Nombre de usuario o contraseña incorrectos');
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
      <Button style={{ marginTop: 10, backgroundColor:'red' }}
          icon="login"
          mode="contained"
          onPress={handleLogin}>
        <Text style={{ fontWeight: "bold", marginBottom: 10 }}>Entrar</Text>
      </Button>
    </View>
  );
}