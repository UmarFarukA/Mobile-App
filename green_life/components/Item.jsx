import EvilIcons from "@expo/vector-icons/EvilIcons";
import { Pressable, Text, View } from "react-native";

function Item({ icon, title }) {
  return (
    <Pressable>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          {icon}
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "#3e3d3d" }}>
            {title}
          </Text>
        </View>

        <View>
          <EvilIcons name="chevron-right" size={24} color="#3e3d3d" />
        </View>
      </View>
    </Pressable>
  );
}

export default Item;
