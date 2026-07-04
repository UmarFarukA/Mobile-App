import Button from "@/components/Button";
import Header from "@/components/Header";
import InputField from "@/components/InputField";
import {
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

import Fontisto from "@expo/vector-icons/Fontisto";

function ForgotPassword() {
  return (
    <View style={styles.container}>
      <Header caption="Forgot Password" />
      <View style={{ marginTop: 44, gap: 4, alignItems: "center" }}>
        <Text style={styles.title}>Forgot Password</Text>
        <Text style={styles.subTitle}>
          Enteryour email and we&apos;ll send {`\n`}
          <Text style={styles.subTitle}>you a link to reset your password</Text>
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <InputField
          icon={<Fontisto name="email" size={18} color="#4f5351" />}
          placeholder="Email"
          value={"Email"}
          iconName="Email"
        />
      </View>

      <View style={{ marginTop: 12 }}>
        <Button
          title="Send Reset Link"
          backgroundColor="#166534"
          textColor="#FFFDF9"
        />
      </View>

      <View style={{ marginTop: 36, alignItems: "center", height: 300 }}>
        <Image
          source={require("../assets/images/flower.png")}
          style={{ width: 200, height: 300 }}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}

export default ForgotPassword;

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
    marginBottom: 8,
  },

  subTitle: {
    fontSize: 14,
    color: "#4f5351",
    textAlign: "center",
    marginBottom: 12,
  },

  inputContainer: {
    marginTop: 12,

    width: "100%",
  },
});
