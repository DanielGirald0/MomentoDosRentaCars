import { useState } from "react";
import { View, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { styles } from "../assets/styles/styles";
import { writeUserData } from "../utils";

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = () => {
    if (username != "" && password != "") {
      const newUser = { username, password };
      writeUserData(newUser, "users.json");
      setMessage("Usuario registrado correctamente");
      console.log(newUser);
      navigation.navigate("Login");
    }else{
      console.log("error")
      setMessage("Introduzca usuario y contraseña")
    }

  };

  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold", marginBottom: 10 }}>Registrarse</Text>
      <TextInput
        label="Usuario"
        mode="outlined"
        left={<TextInput.Icon icon="account" />}
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        label="Contraseña"
        mode="outlined"
        left={<TextInput.Icon icon="key" />}
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <Button
        style={{ marginTop: 10, backgroundColor: "orange" }}
        icon="login"
        mode="contained"
        title="Registrarse"
        onPress={handleRegister}
      >
        {" "}
        Registrar
      </Button>
      <Text
        style={{ fontWeight: "bold", marginBottom: 10, alignItems: "center" }}
      >
        {message}
      </Text>
    </View>
  );
};

export default RegisterScreen;
