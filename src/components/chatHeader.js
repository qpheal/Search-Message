import { View, Text ,Image, TouchableOpacity} from 'react-native'
import { AntDesign, Entypo, FontAwesome } from "@expo/vector-icons";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import React from 'react'

const ChatHeader = () => {
  return (
    <View>
    <View className="flex-row space-x-4 items-center  ">
    <TouchableOpacity>
        <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Image
          source={{
            uri: "data:image/jpeg;base64,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",
          }}
          style={{ width: wp("10"), height: hp("5"), borderRadius: 100 }}
        />
        <View className="flex-row flex-1 items-center justify-between">
          <View className="space-y-0.5">
            <Text style={{ fontWeight: 500, fontSize: 14 }}>Kim Ralphs</Text>
            <Text className="text-[#A7AEC1]">Online</Text>
          </View>
          <TouchableOpacity>
          <Entypo name="dots-three-vertical" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{ marginTop: wp(10) }}
        className="flex-row space-x-4 items-center"
      >
        <Image
          source={require("../../assets/Image.png")}
          style={{ width: wp(24), height: hp(10), borderRadius: wp(2) }}
        />
        <View className="space-y-3">
          <View className="space-y-1">
            <Text className="font-700 text-[15px]">Hyatt Washington Hotel</Text>
            <Text className="font-500 text-[14px] text-[#A7AEC1]">
              Purwokerto, Glempang
            </Text>
          </View>
          <View className="flex-row space-x-2">
            <Text className="font-700 text-[14px] text-[#A7AEC1] ">
              <Text className="text-[#3F6DF6]">$38</Text>/Night
            </Text>
            <AntDesign name="star" size={18} color="#FFBA55" />
            <Text className="text-[#A7AEC1]">
              <Text className="font-700 text-[14px] text-black">4.2 </Text>(84
              Reviews)
            </Text>
          </View>
        </View>
      </View>

      </View>


  )
}

export default ChatHeader