import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity} from "react-native";
import { Image } from 'react-native';
import { Dimensions } from 'react-native';
import { Image1 } from './Images/teamphoto.jpg'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "right",
        backgroundColor: 'white'
      }}
    >

<View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', top: 50}}>
  <View style={{ width: '48%' }}>
    <View style={styles.indiv}>
      <Image
        source={require('./Images/pic.jpg')}
        style={{
          width: 160,
          height: 160,
          borderRadius: 80, // Set borderRadius to half the width or height to make it circular
          marginTop: 150,
          top: -160,
          left: 20,
          zIndex: 3
        }}
      />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ width: 170, height: 140,  borderRadius: 10, backgroundColor: '#DEC7F6', marginTop: -100,
          top: -80,
          left: 10,
          zIndex: 2, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ color: 'black', fontSize: 28, fontWeight: 'bold', left: -8 }}>Allison</Text>
          <View style = {styles.button}><FontAwesomeIcon name="comment" /><Button title = ""/></View>
          <Text style={{ color: 'black', fontSize: 13 }}>Distance: 28.8 miles away</Text>
          <Text style={{ color: 'black', fontSize: 13 }}>Language: English</Text>
        </View>
      </View>
    </View>
  </View>
  <View style={{ width: '48%' }}>
    <View style={styles.indiv}>
      <Image
        source={require('./Images/renu.jpeg')}
        style={{
          width: 160,
          height: 160,
          borderRadius: 80, // Set borderRadius to half the width or height to make it circular
          marginTop: 144,
          top: -160,
          left: 30,
          zIndex: 3
        }}
      />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ width: 170, height: 140,  borderRadius: 10, backgroundColor: '#DEC7F6', marginTop: -100,
          top: -75,
          left: 15,
          zIndex: 2, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ color: 'black', fontSize: 28, fontWeight: 'bold' }}>Renu</Text>
          <View style = {styles.button}><FontAwesomeIcon name="comment" /><Button title = ""/></View>
          <Text style={{ color: 'black', fontSize: 13 }}>Distance: 0.8 miles away</Text>
          <Text style={{ color: 'black', fontSize: 13 }}>Language: Hindi</Text>
        </View>
      </View>
    </View>
    <View style={{ width: '48%' }}>
    <View style={styles.indiv}>
      <Image
        source={require('./Images/betty.jpg')}
        style={{
          width: 160,
          height: 160,
          borderRadius: 80, // Set borderRadius to half the width or height to make it circular
          marginTop: 85,
          top: -130,
          left: -170,
          zIndex: 3
        }}
      />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ width: 170, height: 140,  borderRadius: 10, backgroundColor: '#DEC7F6', marginTop: -200,
          top: 5,
          left: -130,
          zIndex: 2, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ color: 'black', fontSize: 28, fontWeight: 'bold' }}>Betty</Text>
          <View style = {styles.button}><FontAwesomeIcon name="comment" /><Button title = ""/></View>
          <Text style={{ color: 'black', fontSize: 13 }}>Distance: 2.3 miles away</Text>
          <Text style={{ color: 'black', fontSize: 13 }}>Language: Korean</Text>
        </View>
      </View>
    </View>
  </View>
  <View style={{ width: '48%' }}>
    <View style={styles.indiv}>
      <Image
        source={require('./Images/IMG_0517.jpg')}
        style={{
          width: 160,
          height: 160,
          borderRadius: 80, // Set borderRadius to half the width or height to make it circular
          marginTop: -130,
          top: -160,
          left: 30,
          zIndex: 3
        }}
      />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ width: 170, height: 140,  borderRadius: 10, backgroundColor: '#DEC7F6', marginTop: -30,
          top: -110,
          left: 64,
          zIndex: 2, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ color: 'black', fontSize: 28, fontWeight: 'bold' }}>Anjali</Text>
          <View style = {styles.button}><FontAwesomeIcon name="comment" /><Button title = ""/></View>
          <Text style={{ color: 'black', fontSize: 13 }}>Distance: 0.3 miles away</Text>
          <Text style={{ color: 'black', fontSize: 13 }}>Language: English</Text>
        </View>
      </View>
    </View>
  </View>
  </View>
     
    </View>
    <View style = {{ flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal: 20}}>
      <CustomButton
        title="<30 miles"
        onPressIn={handlePressIn1}
        isPressed={isPressed1}
      />
      <CustomButton
        title="<50 miles"
        onPressIn={handlePressIn2}
        isPressed={isPressed2}
      />
      <CustomButton
        title="<70 miles"
        onPressIn={handlePressIn3}
        isPressed={isPressed3}
      />
      </View>
    
      </View>

      
      
  );
  const [isPressed1, setIsPressed1] = useState(false);
  const handlePressIn1 = () => {
    if (isPressed1) {
        setIsPressed1(false);
    }
    else {
        setIsPressed1(true);
    }
  };
  const [isPressed2, setIsPressed2] = useState(false);
  const handlePressIn2 = () => {
    if (isPressed2) {
        setIsPressed2(false);
    }
    else {
        setIsPressed2(true);
    }
  };
  const [isPressed3, setIsPressed3] = useState(false);
  const handlePressIn3 = () => {
    if (isPressed3) {
        setIsPressed3(false);
    }
    else {
        setIsPressed3(true);
    }
  };
}
const CustomButton = ({ title, isPressed, onPressIn}) => {
  return (
        <TouchableOpacity
        onPressIn={onPressIn}
        style={{
            backgroundColor: isPressed ? 'blue' : 'gray',
            padding: 3,
            paddingHorizontal: 10,
            borderRadius: 15,
            marginVertical: -12,
            marginLeft: 10,
            top: -585,
            left: 3
        }}>
      <Text style={{ color: 'white', fontSize: 18 }}>{title}</Text>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  name: {
    fontSize: 100,
  },
  container: {
      flex: 1,
      justifyContent: 'flex-end',
    },
    button: {
      backgroundColor: '#DEC7F6',
      marginTop: -40,
      top: 17,
      left: 53
    }
})