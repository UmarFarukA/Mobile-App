import {
  ActivityIndicator,
  Alert,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Item from "@/components/Item";
import { supabase } from "@/utils/supabase";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { router } from "expo-router";
import { useEffect, useState } from "react";

export default function Profile() {
  const [loading, setLoading] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    fetchUserProfile();
  }, []);

  async function fetchUserProfile() {
    try {
      setLoading(true);
      const { data, error } = await supabase.auth.getUser();

      if (error) {
        Alert.alert("Error", error.message);
        return;
      }

      const user = data.user;

      setFullName(user?.user_metadata?.full_name || "User");
      setEmail(user?.email || "");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setLoading(false);
    }

    if (loading) {
      return <ActivityIndicator />;
    }
  }

  const handleLogOut = async () => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signOut();

      if (error) {
        Alert.alert("Loggout Failed", error.message);
        return;
      }

      router.replace("/login");
    } catch (error) {
      Alert.alert("Error", error.messsage);
    } finally {
      setLoading(false);
    }
  };
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
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>{fullName}</Text>
            <Text style={{ fontSize: 12, fontWeight: 300 }}>{email}</Text>
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

      <View style={{ paddingHorizontal: 20, marginTop: 24 }}>
        <TouchableOpacity
          style={{
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
          onPress={handleLogOut}
        >
          <MaterialIcons name="logout" size={24} color="red" />
          <Text style={{ color: "red", fontSize: 18, fontWeight: 500 }}>
            {loading ? "Logging out..." : "Logout"}
          </Text>
        </TouchableOpacity>
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
