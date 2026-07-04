import { Pressable, Text, View } from "react-native";
function AddButton() {
  return (
    <View>
      <Pressable style={{ backgroundColor: "#166534", borderRadius: 50 }}>
        <Text style={{ fontSize: 16, color: "#FFF" }}>+</Text>
      </Pressable>
    </View>
  );
}

export default AddButton;
