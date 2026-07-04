import { Image, StyleSheet, Text, TextInput, View } from "react-native";

import PlantCard from "@/components/PlantCard";
import Fontisto from "@expo/vector-icons/Fontisto";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "#166534",
          height: 180,
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
            Home
          </Text>

          <View>
            <Fontisto name="star" size={24} color="#FFF" />
          </View>
        </View>

        <View>
          <View
            style={{
              backgroundColor: "#FFF",
              height: 50,
              marginTop: 20,
              borderRadius: 10,
              marginHorizontal: 20,
              paddingHorizontal: 10,
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Fontisto name="search" size={20} color="#4f5351" />
            <TextInput placeholder="Search plants..." />
          </View>
        </View>
      </View>

      <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "#4f5351" }}>
            My Plants
          </Text>

          <Text
            style={{
              fontSize: 12,
              fontWeight: 400,
              color: "#166534",
              marginTop: 5,
            }}
          >
            View All
          </Text>
        </View>
      </View>

      <View style={styles.plantWrapper}>
        <PlantCard
          plantImage={require("../../assets/images/flower.png")}
          plantName={"Monstera"}
          plantStatus={"Healthy"}
        />
        <PlantCard
          plantImage={require("../../assets/images/flower.png")}
          plantName={"Snake Plant"}
          plantStatus={"Water in 2 days"}
        />
      </View>

      <View style={{ marginTop: 24, paddingHorizontal: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#000" }}>
          Plant Care Tips
        </Text>

        <View
          style={{
            marginTop: 14,
            width: 320,
            height: 150,
            backgroundColor: "#DCFCE7",
            borderRadius: 10,
            alignSelf: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ paddingVertical: 30, paddingHorizontal: 20 }}>
              <Text style={{ fontSize: 22, color: "#000", fontWeight: "bold" }}>
                Water your plants {`\n`}
                <Text>in the morning</Text>
              </Text>

              <Text style={{ paddingTop: 12, color: "#166534" }}>
                Learn more
              </Text>
            </View>

            <View style={{ width: 110, height: 110 }}>
              <Image
                source={require("../../assets/images/flower_3.png")}
                style={{ width: 110, height: 110 }}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  plantWrapper: {
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
