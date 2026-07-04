import { StyleSheet, View } from "react-native";

function TabIcon({ icon, focused, color }) {
  return <View style={styles.tabContainer}>{icon}</View>;
}

export default TabIcon;

const styles = StyleSheet.create({
  tabContainer: {
    alignItems: "center",
    width: 24,
    height: 35,
    flexDirection: "column",
    gap: 6,
  },
  tabLine: {
    width: 10,
    height: 5,
    borderRadius: 18,
  },
});
