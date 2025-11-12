import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.dummpyText}>Open up App.js to start working on your app!</Text>
      </View>
      <StatusBar style="auto" />
      <Text style={styles.dummpyText}>Hello World</Text>
      <Button title='Tap me!'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dummpyText: {
    margin:16,
    padding:16,
    borderWidth:2,
    borderColor:'red'
  }
});
