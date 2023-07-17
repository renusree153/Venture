import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import * as React from 'react';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const CustomButton = ({ title, isPressed, onPressIn}) => {
  return (
        <TouchableOpacity
        onPressIn={onPressIn}
        style={{
            backgroundColor: isPressed ? 'blue' : 'gray',
            padding: 10,
            borderRadius: 15,
            marginVertical: 10,
            zIndex: 999,
        }}>
      <Text style={{ color: 'white', fontSize: 18 }}>{title}</Text>
      </TouchableOpacity>
  );
}
const CustomRestaurant = ({title, img, rating, img2}) => {
    return (
        <View>
        <View style = {styles.box}>
            <Image style={styles.image} source={img} />
            <Text style = {styles.text}>{title}</Text>
            <Text style = {styles.text2}>{rating}</Text>
        </View>
        <View>
            <Image style={styles.image2} source={img2} />
        </View>
        </View>
    )
}
const CustomRestaurantList = ({ List1 }) => {
    console.log(List1);
    if (!List1) return null;
    return (
      <View>
        {List1.map((restaurant) => (
          <CustomRestaurant
            title={restaurant.title}
            img={restaurant.img}
            rating={restaurant.rating}
            img2={restaurant.img2}
          />
        ))}
      </View>
    );
  };
export default function App() {
    const [restaurantList, setRestaurantList] = useState([
        {
            title:"Joo Ok Restaurant",
            img:require('./Images/download.jpg'),
            img2:require("./Images/800px-Five-pointed_star.svg.png"),
            rating: "5/5",
        },
        {
            title: "La Yeon",
            img: require("./Images/images.jpg"),
            img2: require("./Images/800px-Five-pointed_star.svg.png"),
            rating: "2/5",
        },
        {
            title: "Maple Tree House",
            img: require("./Images/restaurant1.jpeg"),
            img2: require("./Images/800px-Five-pointed_star.svg.png"),
            rating: "3/5"
        },
        {
            title: "7th Door",
            img: require("./Images/restaurant2.webp"),
            img2: require("./Images/800px-Five-pointed_star.svg.png"),
            rating: "5/5"
        },
        {
            title: "Toc Toc ",
            img: require("./Images/r3.jpeg"),
            img2: require("./Images/800px-Five-pointed_star.svg.png"),
            rating: "4/5"
        },
        {
            title: "Jungsik",
            img: require("./Images/images.jpg"),
            img2: require("./Images/800px-Five-pointed_star.svg.png"),
            rating: "4/5"
        },
      ]);
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
        setRestaurantList([{
                title:"Joo Ok Restaurant",
                img:require('./Images/download.jpg'),
                img2:require("./Images/800px-Five-pointed_star.svg.png"),
                rating: "5/5",
            },
            {
                title: "La Yeon",
                img: require("./Images/images.jpg"),
                img2: require("./Images/800px-Five-pointed_star.svg.png"),
                rating: "2/5",
            },
            {
                title: "Maple Tree House",
                img: require("./Images/images.jpg"),
                img2: require("./Images/800px-Five-pointed_star.svg.png"),
                rating: "3/5"
            },
            {
                title: "7th Door",
                img: require("./Images/images.jpg"),
                img2: require("./Images/800px-Five-pointed_star.svg.png"),
                rating: "5/5"
            },
            {
                title: "Toc Toc ",
                img: require("./Images/r3.jpeg"),
                img2: require("./Images/800px-Five-pointed_star.svg.png"),
                rating: "4/5"
            },
            {
                title: "Jungsik",
                img: require("./Images/images.jpg"),
                img2: require("./Images/800px-Five-pointed_star.svg.png"),
                rating: "4/5",
        }])
    }
    else {
        setIsPressed2(true);
        setRestaurantList([{
            title:"La Yeon",
            img:require('./Images/images.jpg'),
            img2:require("./Images/800px-Five-pointed_star.svg.png"),
            rating: "5/5",
        },
        {
            title: "Toc Toc",
            img: require("./Images/r3.jpeg"),
            img2: require("./Images/800px-Five-pointed_star.svg.png"),
            rating: "2/5",
        }])
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
  return (
    <View>
    <View style = {{ flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal: 20}}>
      <CustomButton
        title="Feed"
        onPressIn={handlePressIn1}
        isPressed={isPressed1}
      />
      <CustomButton
        title="Vegetarian"
        onPressIn={handlePressIn2}
        isPressed={isPressed2}
      />
      <CustomButton
        title="Gluten-free"
        onPressIn={handlePressIn3}
        isPressed={isPressed3}
      />
      </View>
      <View style = {{ flexDirection: 'column', justifyContent: 'space-around', position: "relative", paddingHorizontal: 20, zIndex: -1}}>
            <CustomRestaurantList List1={restaurantList}/>
      </View>
      </View>
  );
}
const styles = StyleSheet.create({
    box: {
        width: 300,
        height: 100,
        top: 70,
        backgroundColor: "#DEC7F6",
        borderRadius: 10,
        marginTop: 20,
        left: 25,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        zindex: 2
      },
      image: {
        width: 60,
        height: 60,
        left: 20,
        borderRadius: 100, // Set borderRadius to half the width or height to make it circular
        position: 'absolute',
        resizeMode: 'cover',
      },
    text: {
        fontSize: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text2: {
        top: 10,
        fontSize: 20
    },
    image2: {
        width: 20,
        height: 20,
        left: 260,
        bottom: 143
    }
  })
  /*
  <CustomRestaurant
            title = "Restaurant 1"
            img = {require('./images/download.jpg')}
            img2 = {require("./images/800px-Five-pointed_star.svg.png")}
            rating = "5/5"
        />
        <CustomRestaurant
            title = "Restaurant 2"
            img = {require("./images/images.jpg")}
            img2 = {require("./images/800px-Five-pointed_star.svg.png")}
            rating = "2/5"
        />
        <CustomRestaurant
            title = "Restaurant 3"
            img = {require("./images/images.jpg")}
            img2 = {require("./images/800px-Five-pointed_star.svg.png")}
            rating = "3/5"
        />
        <CustomRestaurant
            title = "Restaurant 4"
            img = {require("./images/images.jpg")}
            img2 = {require("./images/800px-Five-pointed_star.svg.png")}
            rating = "5/5"
        />
        <CustomRestaurant
            title = "Restaurant 5"
            img = {require("./images/images.jpg")}
            img2 = {require("./images/800px-Five-pointed_star.svg.png")}
            rating = "4/5"
        />
        <CustomRestaurant
            title = "Restaurant 6"
            img = {require("./images/images.jpg")}
            img2 = {require("./images/800px-Five-pointed_star.svg.png")}
            rating = "4/5"
        />
        */