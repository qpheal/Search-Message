import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import MessageHeader from "../components/messageHeader";
import messsage from "../mockData/messagenotification";
import Footer from "../components/footer"

const Message = () => {
  return (
    <SafeAreaView className="flex-1 flex " style={{ top: 20 }}>
      <ScrollView className="flex-1 overflow-y-scrollno-scrollbar ">
        <MessageHeader />

        <View className="mx-5 ">
          {messsage.map((item) => {
            return (
              <View key={item.id}>
                <View className="flex flex-row items-center space-x-2 space-y-7">
                  <Image
                    source={{ uri: item.imageUrl }}
                    className="w-12 h-12 rounded-full"
                  />

                  <View className="flex-1">
                    <View className="space-y-1">
                      <Text style={{fontSize: hp("2%")}}className="font-700 text-[16px]">{item.name}</Text>
                      <Text numberOfLines={3} className="text-gray-500">
                        {item.message}
                      </Text>
                    </View>
                  </View>
                  <View className="items-center space-y-1">
                    <Text>{item.time}</Text>
                    <View className="bg-[#ff0000] w-5 h-5 justify-center items-center rounded-full">
                      <Text className="color-white">
                        {item.numberOfMessages}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>

      <Footer/>
    </SafeAreaView>
  );
};

export default Message;
