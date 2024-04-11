import { View, Text, TextInput } from 'react-native'
import { Ionicons, AntDesign, MaterialIcons } from "@expo/vector-icons";
import React from 'react'

const MessageHeader = () => {
  return (
    <View style = {{position: "relative"}} className = "mx-6">
      <View
        className="flex-row justify-between items-center mt-5 mb-5"
      
      >
        <Text className="text-[24px] font-[700]">Messages</Text>
        <Ionicons name="notifications-outline" size={24} color="black" />
      </View>

      <View
        className="flex-row space-x-4 items-center px-5 "
        style={{ backgroundColor: "#f9f9f9", padding: 10, borderRadius: 50 }}
      >
        <AntDesign name="search1" size={24} color="gray" />
        <TextInput
          className="text-[16px] font-[400] "
          placeholder="Search or start a chat"
        />
        </View>
    </View>
  )
}

export default MessageHeader