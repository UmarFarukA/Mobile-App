import Button from "@/components/Button";
import Header from "@/components/Header";
import InputField from "@/components/InputField";
import OutlineButton from "@/components/OutlineButton";
import { router } from "expo-router";
import {
  Platform,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

import EvilIcons from "@expo/vector-icons/EvilIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Fontisto from "@expo/vector-icons/Fontisto";

function Register() {
  return (
    <View style={styles.container}>
      <Header caption="Sign Up" />
      <View style={{ marginVertical: 20, gap: 4, alignItems: "center" }}>
        <Text style={styles.title}>Sign Up</Text>
        <Text style={styles.subTitle}>Create your account</Text>
      </View>

      <View style={styles.inputContainer}>
        <InputField
          icon={<FontAwesome5 name="user" size={18} color="#4f5351" />}
          placeholder="Full Name"
          value={"Full Name"}
          iconName="Full Name"
        />

        <InputField
          icon={<Fontisto name="email" size={18} color="#4f5351" />}
          placeholder="Email"
          value={"Email"}
          iconName="Email"
        />

        <InputField
          icon={<EvilIcons name="lock" size={22} color="#4f5351" />}
          placeholder="Password"
          secureTextEntry={true}
          value={"Password"}
          iconName="password"
        />

        <InputField
          icon={<EvilIcons name="lock" size={22} color="#4f5351" />}
          placeholder="Confirm Password"
          secureTextEntry={true}
          value={"Confirm Password"}
          iconName="confirm-password"
        />
      </View>

      <View>
        <Button title="Sign Up" backgroundColor="#166534" textColor="#FFFDF9" />
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
          marginTop: 15,
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{ borderWidth: 1, borderColor: "#f2eaea", width: "35%" }}
        />
        <Text style={{ fontWeight: "semibold" }}>or continue with</Text>
        <View
          style={{ borderWidth: 1, borderColor: "#f2eaea", width: "35%" }}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 20,
          gap: 10,
        }}
      >
        <OutlineButton
          icon={<Fontisto name="google" size={18} color="#dd4b39" />}
          title="Google"
          onPress={() => {}}
        />

        <OutlineButton
          icon={<Fontisto name="apple" size={18} color="#4f5351" />}
          title="Apple"
          onPress={() => {}}
        />
      </View>

      <View
        style={{
          marginTop: 20,
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Text
          style={{ fontWeight: "semibold", fontSize: 16, color: "#4f5351" }}
        >
          Already have an account?{" "}
        </Text>
        <Pressable
          style={{ alignItems: "center" }}
          onPress={() => {
            router.push("./login");
          }}
        >
          <Text style={{ color: "#166534", fontWeight: "semibold" }}>
            Sign In
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFDF9",
    flexDirection: "column",
    height: "100%",
    paddingHorizontal: 20,
    ...Platform.select({
      ios: {
        paddingTop: 20,
      },
      android: {
        paddingTop: StatusBar.currentHeight,
      },
    }),
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#166534",
  },

  subTitle: {
    fontSize: 14,
    color: "#4f5351",
    textAlign: "center",
  },

  inputContainer: {
    marginVertical: 15,
    gap: 10,
    width: "100%",
  },
});
