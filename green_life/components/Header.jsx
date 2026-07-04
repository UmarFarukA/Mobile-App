import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

function Header({ caption }) {
  return (
    <View style={styles.header}>
      <Pressable
        onPress={() => {
          router.back();
        }}
        hitSlop={100}
      >
        <Ionicons name="arrow-back" size={16} color="#166534" />
      </Pressable>
      <Text style={styles.headerText}>{caption}</Text>
      <View />
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10,
    marginTop: 10,
  },

  headerText: {
    fontSize: 14,
    fontWeight: 400,
    color: "#166534",
  },
});
