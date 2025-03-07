import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';

export default function Details() {
  const router = useRouter();
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.content}>
        <Text style={styles.title}>Detailseite</Text>
        <Text style={styles.description}>
          Dies ist eine Detailseite, die zeigt, wie die Navigation in React Native funktioniert.
          In React Native kannst du zwischen verschiedenen Bildschirmen navigieren, ähnlich wie
          in SwiftUI mit NavigationView und NavigationLink.
        </Text>
        
        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>Navigation in React Native</Text>
          <Text style={styles.infoText}>
            React Native verwendet verschiedene Navigationsbibliotheken, wobei Expo Router
            eine moderne und einfache Lösung ist, die auf dem Dateisystem basiert.
          </Text>
        </View>
        
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => router.back()}
        >
          <Text style={styles.buttonText}>Zurück zur Startseite</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    marginBottom: 30,
  },
  infoBox: {
    backgroundColor: '#e6f7ff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 30,
    borderLeftWidth: 4,
    borderLeftColor: '#1890ff',
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#1890ff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
}); 