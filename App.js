import { View, Text, StyleSheet, Button, Image} from "react-native";
import Testing from './Testing.js';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Chat from './Chat.js';
import Restaurants from './Restaurants.js'
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Home" component = {Home} />
        <Stack.Screen name = "Find a Travel Buddy" component = {Testing} />
        <Stack.Screen name = "Chat" component = {Chat} />
        <Stack.Screen name = "Food" component = {Restaurants} />
        
      </Stack.Navigator>
    </NavigationContainer>


    
  );
}

const Home = ({navigation}) => {
  return (
    <View style={{
      backgroundColor: 'white',
      height: 700
    }}>


    <FontAwesomeIcon name="gear" color="white" size={35} style={{
        top: 670,
        right: -40,
        zIndex: 7
    }}/>

  <FontAwesomeIcon name="spoon" color="white" size={35} onPress={() =>
          navigation.navigate('Food')
        } style={{
        top: 635,
        right: -120,
        zIndex: 7
    }}/>

<FontAwesomeIcon name="comment" color="white" size={35} onPress={() =>
          navigation.navigate('Chat')
        } style={{
        top: 598,
        right: -200,
        zIndex: 7
    }}/>

<FontAwesomeIcon name="users" color="white" size={32} onPress={() =>
          navigation.navigate('Find a Travel Buddy')}
          style={{
        top: 565,
        right: -290,
        zIndex: 7
    }}/>
      

      <View style={{
        backgroundColor: "#DEC7F6",
        height: 60,
        width: '100%',
        top: 520,
        zIndex: 5,
      }}>

        
      </View>

<Text style={{
          fontSize: 50,
          top: 50,
          right: -20,
          
      }}>Hi</Text>

      <Text style={{
          fontSize: 50,
          top: -10,
          fontWeight: 'bold',
          right: -80,
          
      }}>Pranati!</Text>



<Image
        source={require('./Images/5086472.png')}
        style={{
          width: 100,
          height: 100,

          position: 'absolute',
          zIndex: 1,
          top: 400,
          right: 150,
        }}
      />

<Image
        source={require('./Images/light.webp')}
        style={{
          width: 150,
          height: 150,
          borderRadius: 100,
          position: 'absolute',
          zIndex: 1,
          top: 30,
          right: 120,
        }}
      />

<Image
        source={require('./Images/PRANATI.png')}
        style={{
          width: 150,
          height: 150,
          borderRadius: 100,
          position: 'absolute',
          zIndex: 1,
          top: 50,
          right: 150,
        }}
      />

   


    <Text style={{
        fontSize: 35,
        top: 10,
        right: -40,
      }}>Welcome To</Text>

<Text style={{
        fontSize: 35,
        top: -32,
        right: -234,
        color: '#DEC7F6',
        fontWeight: 'bold'
      }}>Venture</Text>



<Text style={{
        fontSize: 20,
        top: 120,
        right: -80,
      }}>You're Traveling to Korea</Text>

<Text style={{
        fontSize: 20,
        top: 140,
        right: -120,
        color: 'purple'
      }}>English {">"} Korean</Text>

   

      </View>

   
    
  );
};

const styles = StyleSheet.create({
  name: {
    fontSize: 100,
  }
})
