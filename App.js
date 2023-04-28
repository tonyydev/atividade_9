import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';

import { Header} from './src/components/Header';
import { EmployeeList } from './src/components/EmployeeList';

const data = [
  { key: 1, name: 'Vinicius Santos', role: '(81)99999-9999'},
  { key: 2, name: 'Guilherme Yury', role: '(81)88888-8888'},
  { key: 3, name: 'William Lucas', role: '(81)77777-7777'},
  { key: 4, name: 'Anthony Oliveira', role: '(81)66666-6666'},
]

export default function App() {
  return (
    <View style={styles.container}>
      <Header title= "Agenda telefônica"/>
      <EmployeeList data={data} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
  },
});
