import { View, Text } from 'react-native'
import { Ionicons, AntDesign, MaterialIcons } from "@expo/vector-icons";
import React from 'react'

const Footer = () => {
  return ( 
       <View
        className="flex-row justify-around pb-10 pt-1.5"
        style={{ position: "absolute", left: 0, right: 0, bottom: 0, backgroundColor: "white", width: "100%"}}
      >
        <View className = "items-center">
          <Ionicons name="home-outline" size={24} color="black" />
          <Text>Home</Text>
        </View>
        <View className = "items-center">
        <AntDesign name="search1" size={24} color="black" />
          <Text>Search</Text>
        </View>
        <View className = "items-center">
        <MaterialIcons name="message" size={24} color="black" />
          <Text>Messages</Text>
        </View>
        <View className = "items-center">
          <AntDesign name="user" size={24} color="black" />
          <Text>Profile</Text>
        </View>
      </View>    
  )
}

export default Footer