import { StyleSheet, View } from 'react-native';
import Header from './components/Header/Header';
import Main from './components/Main/Main'

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0E0E0', // Cor de fundo suave
  },
});