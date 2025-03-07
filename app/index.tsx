import { Text, View, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>Meine React Native App</Text>
          <Text style={styles.subtitle}>Willkommen zu meiner ersten App</Text>
        </View>
        
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Was ist React Native?</Text>
          <Text style={styles.cardText}>
            React Native ist ein Framework zum Erstellen nativer Apps für Android und iOS mit JavaScript und React.
          </Text>
        </View>
        
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Vorteile von React Native</Text>
          <Text style={styles.cardText}>
            • Eine Codebasis für mehrere Plattformen{"\n"}
            • Schnelle Entwicklung mit Hot Reloading{"\n"}
            • Große Community und viele Bibliotheken{"\n"}
            • Ähnlich zu React für Web-Entwicklung
          </Text>
        </View>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => router.push("/details")}
        >
          <Text style={styles.buttonText}>Mehr Details anzeigen</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  scrollContent: {
    padding: 20,
  },
  header: {
    marginBottom: 30,
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: "#666",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    color: "#666",
    lineHeight: 24,
  },
  button: {
    backgroundColor: "#1890ff",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
