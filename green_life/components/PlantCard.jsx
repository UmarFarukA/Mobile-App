import { Image, StyleSheet, Text, View } from "react-native";

function PlantCard({ plantName, plantImage, plantStatus }) {
  return (
    <View style={styles.card}>
      <View style={styles.plantImageContainer}>
        <Image source={plantImage} style={styles.plantImage} />
      </View>

      <View style={{ flexDirection: "column", gap: 4, paddingBottom: 12 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#000" }}>
          {plantName}
        </Text>
        <Text
          style={{
            color: plantStatus === "Healthy" ? "#166534" : "brown",
            fontSize: 14,
            fontWeight: "bold",
          }}
        >
          {plantStatus}
        </Text>
      </View>
    </View>
  );
}

export default PlantCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFF",
    flexDirection: "column",
    gap: 10,
    width: "42%",
    marginTop: 20,
    marginHorizontal: 10,
    alignItems: "center",
    borderRadius: 10,
  },
  plantImage: {
    // width: 200,
    height: 100,
    resizeMode: "contain",
  },
  plantImageContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});
