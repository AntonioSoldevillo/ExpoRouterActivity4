import { View, StyleSheet } from "react-native";
import { Avatar, TextInput, Button } from "react-native-paper";
import { useState } from "react";
import { useRouter } from "expo-router";

const Forgot = () => {
  const router = useRouter();
  const [togglePassword, setTogglePassword] = useState(false);
  const [toggleConfirmPassword, setToggleConfirmPassword] = useState(false);

  return (
    <View style={forgotStyle.container}>
      
      <View style={forgotStyle.avatarSection}>
        <Avatar.Image
          style={{
            backgroundColor: "transparent",
            borderWidth: 3,
            borderColor: "#db0000", 
          }}
          source={require("../assets/avatar.png")}
          size={120}
        />
      </View>

     
      <View style={forgotStyle.section}>
        <TextInput
          textContentType="emailAddress"
          label="Email"
          mode="outlined"
          placeholder="Email"
          style={forgotStyle.input}
          placeholderTextColor="#564d4d"
          theme={{ colors: { text: "#ffffff", primary: "#db0000" } }}
          left={<TextInput.Icon icon="email" size={18} />}
        />
        <TextInput
          label="New Password"
          mode="outlined"
          placeholder="New Password"
          style={forgotStyle.input}
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
        <TextInput
          label="Confirm Password"
          mode="outlined"
          placeholder="Confirm Password"
          style={forgotStyle.input}
          placeholderTextColor="#564d4d"
          theme={{ colors: { text: "#ffffff", primary: "#db0000" } }}
          left={<TextInput.Icon icon="key" size={18} />}
          right={
            <TextInput.Icon
              onPress={() => setToggleConfirmPassword(!toggleConfirmPassword)}
              icon={toggleConfirmPassword ? "eye" : "eye-off"}
              size={18}
            />
          }
          secureTextEntry={!toggleConfirmPassword}
        />
      </View>

 
      <View style={forgotStyle.section}>
        <Button
          onPress={() => console.log("Send Verification Email")}
          mode="contained"
          style={forgotStyle.button}
          buttonColor="#db0000" 
          textColor="#ffffff"
        >
          Send Verification Email
        </Button>
      </View>
    </View>
  );
};

export default Forgot;


const forgotStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000", 
    justifyContent: "start",
    paddingHorizontal: 15, 
    paddingVertical: 30, 
  },
  avatarSection: {
    alignItems: "center",
    marginBottom: 15, 
  },
  section: {
    width: "100%",
    marginBottom: 20,
  },
  input: {
    marginVertical: 8, 
    width: "100%",
  },
  button: {
    marginVertical: 10, 
    width: "100%",
  },
});
