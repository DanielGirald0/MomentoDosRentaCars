import { View, Text } from "react-native";
import { styles } from "../assets/styles/styles";
import { Button } from 'react-native-paper';

export default function UserScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold", marginBottom: 10 }}>
        Inicia sesión o registrate Gratis!
      </Text>
      <Button
        style={{marginTop:10, backgroundColor:'red' }}
        icon="login" 
        mode="contained"
        title="Iniciar sesión"
        onPress={() => {
          navigation.navigate("Login");
        }}
      >Iniciar sesión</Button>
      <Button
        style={{marginTop:10, backgroundColor:'red' }}
        icon="login" 
        mode="contained"
        title="Registarse"
        onPress={() => {
          navigation.navigate("Register");
        }}
      >Registrarse</Button>
    </View>
  );
}
