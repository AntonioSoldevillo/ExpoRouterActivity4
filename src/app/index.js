import { View, StyleSheet } from "react-native";
import { Avatar, Text, TextInput, Button } from "react-native-paper";
import { useState } from "react";
import { useRouter } from "expo-router";

const Main = () => {
  const router = useRouter();
  const [togglePassword, setTogglePassword] = useState(false);

  return (
    <View style={loginStyle.container}>
      
      <View style={{ ...loginStyle.section, ...loginStyle.logoBox }}>
        <Avatar.Image
          style={{
            backgroundColor: "transparent",
            borderWidth: 3,
            borderColor: "#db0000", 
          }}
          source={require("../assets/avatar.png")}
          size={180}
        />
        <Text
          variant="headlineMedium"
          style={{ marginTop: 10, color: "#ffffff" }} 
        >
          AntonioFlix
        </Text>
      </View>

     
      <View style={{ ...loginStyle.section, marginTop: 20 }}>
        <TextInput
          textContentType="emailAddress"
          label="Email"
          mode="outlined"
          placeholder="Email"
          style={loginStyle.input}
          placeholderTextColor="#564d4d"
          theme={{ colors: { text: "#ffffff", primary: "#db0000" } }} 
          left={<TextInput.Icon icon="email" size={18} />}
        />
        <TextInput
          label="Password"
          mode="outlined"
          placeholder="Password"
          style={loginStyle.input}
          placeholderTextColor="#564d4d"
          theme={{ colors: { text: "#ffffff", primary: "#db0000" } }}
          left={<TextInput.Icon icon="key" size={18} />}
          right={
            <TextInput.Icon
              onPress={() => setTogglePassword(!togglePassword)}
              icon={togglePassword ? "eye" : "eye-off"}
              size={18}
            />
          }
          secureTextEntry={!togglePassword}
        />
      </View>

     
      <View style={{ ...loginStyle.section, marginTop: 20 }}>
        <Button
          onPress={() => router.replace("dashboard")}
          mode="contained"
          style={loginStyle.button}
          buttonColor="#db0000" 
          textColor="#ffffff"
        >
          Login
        </Button>
        <View
          style={{ alignItems: "center", justifyContent: "center", marginVertical: 20 }}
        >
          <Text style={{ color: "#ffffff" }}>Don't have an account yet?</Text>
        </View>
        <Button
          onPress={() => router.push("register")}
          mode="contained-tonal"
          style={loginStyle.button}
          buttonColor="#564d4d" 
          textColor="#ffffff"
        >
          Register Here
        </Button>
        <Button
          onPress={() => router.push("forgot")}
          style={{ ...loginStyle.button, marginTop: 20 }}
          textColor="#ffffff"
        >
          Forgot Password?
        </Button>
      </View>
    </View>
  );
};

export default Main;


const loginStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000", 
    justifyContent: "center",
    padding: 20,
  },
  section: {
    alignItems: "center",
    justifyContent: "center",
  },
  logoBox: {
    marginBottom: 20,
  },
  input: {
    marginVertical: 10,
    width: "100%",
  },
  button: {
    marginVertical: 10,
    width: "100%",
  },
});
