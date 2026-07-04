import TabIcon from "@/components/tabBar";
import { Tabs } from "expo-router";

import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";

import { AuthProvider } from "../../contexts/AuthContext";

function TabLayout() {
  return (
    <AuthProvider>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#FFF",
            borderTopWidth: 0,
            width: 375,
            height: 130,
            paddingTop: 28,
            gap: 56,
            flexDirection: "row",
          },

          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 400,
            color: "#166534",
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            tabBarIcon: ({ focused, color }) => (
              <TabIcon
                focused={focused}
                color={color}
                icon={
                  <Ionicons name="home-outline" size={24} color="#166534" />
                }
              />
            ),
          }}
        />
        <Tabs.Screen
          name="discover"
          options={{
            title: "Discover",
            tabBarIcon: ({ focused, color }) => (
              <TabIcon
                focused={focused}
                color={color}
                icon={
                  <Ionicons name="search-outline" size={24} color="#166534" />
                }
              />
            ),
          }}
        />

        <Tabs.Screen
          name="care"
          options={{
            title: "Care",
            tabBarIcon: ({ focused, color }) => (
              <TabIcon
                focused={focused}
                color={color}
                icon={<FontAwesome6 name="heart" size={24} color="#166534" />}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ focused, color }) => (
              <TabIcon
                focused={focused}
                color={color}
                icon={<FontAwesome5 name="user" size={24} color="#166534" />}
              />
            ),
          }}
        />
      </Tabs>
    </AuthProvider>
  );
}

export default TabLayout;
