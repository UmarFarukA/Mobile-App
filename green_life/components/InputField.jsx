import Entypo from "@expo/vector-icons/Entypo";
import { useState } from "react";
import { Pressable, StyleSheet, TextInput, View } from "react-native";

function InputField({
  icon,
  iconName,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  keyboardType = "default",
}) {
  const [visible, setVisible] = useState(false);
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View>{icon}</View>

        <View>
          <TextInput
            style={styles.input}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            secureTextEntry={visible ? secureTextEntry : false}
            keyboardType={keyboardType}
          />
        </View>
      </View>

      <View style={{ position: "absolute", right: 15 }}>
        {iconName === "password" || iconName === "confirm-password" ? (
          <Pressable onPress={() => setVisible(!visible)}>
            {visible ? (
              <Entypo name="eye" size={18} color="#4f5351" />
            ) : (
              <Entypo name="eye-with-line" size={18} color="#4f5351" />
            )}
          </Pressable>
        ) : null}
      </View>
    </View>
  );
}

export default InputField;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 8,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#ccc",
  },

  input: {
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
    width: "100%",
  },
});
