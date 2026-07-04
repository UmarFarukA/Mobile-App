import { router } from "expo-router";
import {
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

// import React, { useEffect, useState } from "react";
// import { supabase } from "../utils/supabase";

import Button from "@/components/Button";

export default function Index() {
  // const [todos, setTodos] = useState([]);

  // useEffect(() => {
  //   const getTodos = async () => {
  //     try {
  //       const { data: todos, error } = await supabase.from("todos").select();

  //       if (error) {
  //         console.error("Error fetching todos:", error.message);
  //         return;
  //       }

  //       if (todos && todos.length > 0) {
  //         setTodos(todos);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching todos:", error.message);
  //     }
  //   };

  //   getTodos();
  // }, []);

  return (
    <View style={styles.container}>
      <View
        style={{
          height: 110,
          width: 110,
          borderRadius: 100,
          // borderWidth: 3,
          borderColor: "#DCFCE7",
          top: 178,
          alignSelf: "center",
        }}
      >
        <Image
          source={require("../assets/images/logo.png")}
          resizeMethod="contain"
          style={{ height: 110, width: 110, borderRadius: 100 }}
        />
      </View>

      <View style={{ marginVertical: 4, top: 180, alignItems: "center" }}>
        <Text style={{ color: "#DCFCE7", fontSize: 32, fontWeight: "bold" }}>
          GreenLife
        </Text>
        <Text style={{ color: "#DCFCE7", fontSize: 16 }}>
          Your green companion
        </Text>
      </View>

      <View
        style={{
          position: "absolute",
          bottom: 100,
          alignSelf: "center",
          marginHorizontal: 20,
        }}
      >
        <Image
          source={require("../assets/images/flower_4.png")}
          style={{ height: 300, width: 250 }}
        />
      </View>

      <View
        style={{
          // marginVertical: 8,
          gap: 10,
          position: "absolute",
          bottom: 60,
          alignItems: "center",
          width: "100%",
          marginHorizontal: 20,
        }}
      >
        <Button
          title={"Get Started"}
          onPress={() => {
            router.push("./register");
          }}
        />
        <Button
          title={"Sign In"}
          backgroundColor="#FFF"
          color="#166534"
          onPress={() => {
            router.push("./login");
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#166534",
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
});
