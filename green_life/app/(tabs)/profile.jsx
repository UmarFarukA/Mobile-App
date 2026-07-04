import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import Item from "@/components/Item";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function Profile() {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "#166534",
          height: 120,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 70,
            paddingHorizontal: 20,
          }}
        >
          <View />

          <Text style={{ color: "#FFF", fontSize: 20, fontWeight: "bold" }}>
            Profile
          </Text>

          <View>
            <Ionicons name="settings-sharp" size={24} color="#FFF" />
          </View>
        </View>
      </View>

      <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <View>
            <Image
              source={require("../../assets/images/user.jpg")}
              style={{ height: 80, width: 80, borderRadius: 50 }}
            />
          </View>
          <View style={{ gap: 6 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Aliyu Idris
            </Text>
            <Text style={{ fontSize: 12, fontWeight: 300 }}>
              aliyu@example.com
            </Text>
            <Pressable>
              <Text
                style={{ fontSize: 14, fontWeight: "bold", color: "#166534" }}
              >
                Edit Profile
              </Text>
            </Pressable>
          </View>
        </View>
      </View>

      <View style={styles.categories}></View>

      <View style={{ marginTop: 18, paddingHorizontal: 20, gap: 32 }}>
        <Item
          icon={<FontAwesome6 name="plant-wilt" size={24} color="#3e3d3d" />}
          title={"My Plants"}
        />

        <Item
          icon={
            <MaterialCommunityIcons
              name="bell-alert-outline"
              size={24}
              color="#000"
            />
          }
          title={"Reminders"}
        />

        <Item
          icon={<Feather name="settings" size={24} color="#3e3d3d" />}
          title={"Settings"}
        />
        <Item
          icon={<Feather name="help-circle" size={24} color="#3e3d3d" />}
          title={"Help & Support"}
        />
        <Item
          icon={
            <Ionicons
              name="information-circle-outline"
              size={24}
              color="#3e3d3d"
            />
          }
          title={"About"}
        />
      </View>

      <View style={{ paddingHorizontal: 20, marginTop: 18 }}>
        <Pressable
          style={{
            marginTop: 24,
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            borderWidth: 1,
            borderColor: "#ef8078",
            paddingVertical: 16,
            paddingHorizontal: 8,
            width: "100%",
            borderRadius: 10,
            backgroundColor: "#fde6e6",
          }}
        >
          <MaterialIcons name="logout" size={24} color="red" />
          <Text style={{ color: "red", fontSize: 18, fontWeight: 500 }}>
            Logout
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },

  categories: {
    width: 350,
    borderRadius: 16,
    marginTop: 8,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignSelf: "center",
    paddingBottom: 20,
  },
});
