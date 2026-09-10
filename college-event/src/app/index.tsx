import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>College Event</Text>

      <View style={styles.card}>
        <Text style={styles.eventName}>Tech Fest 2026</Text>

        <View style={styles.infoBox}>
          <Text style={styles.info}>Date: 30 July 2026</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.info}>Venue: Seminar Hall</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.info}>Time: 10:00 AM</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.info}>Coordinator: Lily</Text>
        </View>
      </View>
      <Text style={styles.footer}>
        Join us for coding competitions, workshops, and fun activities.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8F5E9",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  heading: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#1B5E20",
  },

  card: {
    width: 320,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
  },

  eventName: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 25,
  },

  info: {
    fontSize: 18,
    marginVertical: 5,
  },

  infoBox: {
    width: "70%",
    backgroundColor: "#F3F4F6",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 15,
    marginLeft: 40,
  },

  note: {
    marginTop: 20,
    fontSize: 16,
    color: "gray",
    textAlign: "center",
  },

  footer: {
    marginTop: 25,
    marginLeft: 20,
    fontSize: 16,
    color: "#8a4242",
    fontWeight: "600",
  },
});