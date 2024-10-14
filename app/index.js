import * as React from 'react';
import { View, Text , StyleSheet,TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Camera from './camera/'
import Location from './location/'


const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={{color:'#000', fontSize:25,marginTop:10}}>Olá, seja bem vindo</Text>

      <TouchableOpacity
        style={styles.button}
        title="Camera"
        onPress={() => navigation.navigate('Camera')}
      >
          <Text style={styles.buttonText}>Camera</Text>
      </TouchableOpacity>
       
       <TouchableOpacity
        style={styles.button}
        title="Location"
        onPress={() => navigation.navigate('Location')}
      >
        <Text style={styles.buttonText}>Localização</Text>
      </TouchableOpacity>
    </View>
  );
}

function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Camera" component={Camera} />
        <Stack.Screen name="Location" component={Location} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:80, 
    alignItems: 'center',
     backgroundColor:'#F6F6F6',
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
  },
  button:{
    width:350,
    alignItems:'center',
    borderColor:'#AB9DFF',
    borderWidth: 3,
    borderRadius: 30,
    padding:10,
    margin: 30,
    backgroundColor:'#AB9DFF',
  },
  buttonText: {
    color: '#fff', 
    fontSize: 20, 
  },
  map: {
    flex: 1,
    width: '100%',
  },
});