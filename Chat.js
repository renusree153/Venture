import { View, Text, Animated, TouchableWithoutFeedback, ScrollView, Keyboard, StyleSheet, Image, TextInput, Button } from "react-native";
import { Dimensions } from 'react-native';
import { screensEnabled } from "react-native-screens";
import React, { useRef, useState } from "react";
// import { Translate } from '@google-cloud/translate';
// import { util } from 'react-native-crypto';
// import { Readable } from 'readable-stream';
import translate from 'translate-google-api';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;
export default function App() {
    // const textInputRef = useRef();
    const [text, setText] = useState('');
    const [translatedText, setTranslatedText] = useState('');
    //const [isVisible, setIsVisible] = useState(false);
    // setIsVisible(false);
    const dismissKeyboard = () => {
        Keyboard.dismiss();
      };
    const handlePress = () => {
        Keyboard.dismiss();
        console.log(text);
        translateText(text);
      };
      const translateText = async (text) => {
        try {
            console.log(text);
          const result = await translate(text, {
            from: "en",
            to: "ko",
          });
          console.log(result);
          setTranslatedText(result);
        } catch (error) {
            console.log(`Translation failed: ${error.message}`);
        }
      };
    // const translate = new Translate({
    //     key: '69573248d9a5a3823fcfe53afa24d24344357820',
    //   });
    //   // Define the text and target language
    // const text = 'Hello, world!';
    // const target = 'es';
    // // Call the translate function to translate the text
    // const [translation] = translate.translate(text, target);
    // console.log(translation); // Hola, mundo!
  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "right",
        backgroundColor: 'white'
      }}
    >
      <Image
        source={require('./Images/betty.jpg')}
        style={{
          width: 100,
          height: 100,
          borderRadius: 100,
          position: 'absolute',
          zIndex: 1,
          top: 50,
          right: 150,
        }}
      />
      <Image
        source={require('./Images/betty.jpg')}
        style={styles.profileImage}
      />
      <Text
        style={{
            top: 197,
            zIndex: 1,
            left: 45,
        }}
      >Betty</Text>
      <View style={styles.firstMessage}><Text>You should definitely visit Jeju Island</Text></View>
      <Image
        source={require('./Images/betty.jpg')}
        style={styles.profileImageTwo}
      />
      <View style={styles.secondMessage}><Text>What time is the best time to go - I get cold easily</Text></View>
      <TextInput
        // ref={textInputRef}
        onChangeText={setText}
        value={text}
        placeholder="Enter some text"
        style={{
            width: '80%',
            height: 100,
            zIndex: 5,
            top: 400,
            backgroundColor: 'grey',
            left: 40,
            padding: 20,
            fontSize: 20,
        }}
      />
      <View style={styles.submitButton}>
      <Button title="Submit" onPress={handlePress}>
      </Button>
      <Text style={{
            zIndex: 5,
            color: 'black',
            top: -17,
            right: -12,
        }}>Preview</Text>
      </View>
      <View style={styles.translatedContainer}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{color: 'grey', marginRight: 7}}>Preview</Text>
        <FontAwesomeIcon name="eye" color="grey"/>
         <View style={{
            right: -150,
            width: 30,
         }}>
         <FontAwesomeIcon size={20} name="arrow-up" color="grey"/>
         </View>
      </View>
      {/* {isVisible &&
  <View style={styles.translatedContainer}>
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Text style={{color: 'grey', marginRight: 7}}>Preview</Text>
      <FontAwesomeIcon name="eye" color="grey"/>
    </View>
  </View>
} */}
      <Text style={styles.translated}>{translatedText}</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.purpleRectangle}></View>
        <View style={styles.navBar}></View>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  purpleRectangle: {
    width: '100%',
    height: screenHeight - 200,
    width: screenWidth,
    backgroundColor: '#DEC7F6',
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
  },
  firstMessage: {
    width: 200,
    height: 75,
    backgroundColor: '#D3D3D3',
    borderRadius: 70,
    zIndex: 2,
    bottom: -200,
    left: 15,
    padding: 15,
    paddingLeft: 25,
    paddingTop: 20,
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 100,
    position: 'absolute',
    zIndex: 3,
    top: 195,
    right: 350,
  },
  profileImageTwo: {
    width: 30,
    height: 30,
    borderRadius: 100,
    position: 'absolute',
    zIndex: 3,
    top: 300,
    right: 180,
  },
  translatedContainer: {
    backgroundColor: 'white',
    zIndex: 5,
    top: 210,
    width: '70%',
    right: -55,
    height: 70,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 15,
  },
  secondMessage: {
    width: 200,
    height: 95,
    backgroundColor: '#D3D3D3',
    borderRadius: 70,
    zIndex: 2,
    bottom: -220,
    left: 180,
    padding: 15,
    paddingLeft: 25,
    paddingTop: 20,
  },
  navBar: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'white',
    width: '100%',
    height: 300,
    zIndex: 4,
  },
  submitButton: {
    width: '20%',
    height: 20,
    top: 370,
    left: 265,
    zIndex: 5,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  translated: {
    zIndex:6,
    paddingTop: 5,
    fontSize: 15,
  }
});