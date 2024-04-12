import { View, Text, ScrollView } from "react-native";
import React from "react";
import { AntDesign, Entypo, FontAwesome } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import MessageInput from "../components/messageInput";
import ChatHeader from "../components/chatHeader";

const MessageDetail = () => {
  return (
    <View className="flex-1 flex mx-5" style={{ marginTop: 50 }}>
      <ChatHeader />
      <ScrollView
        keyboardDismissMode={"none"}
        keyboardShouldPersistTaps={"handled"}
        persistentScrollbar={false}
        scrollEnabled={true}
        showsVerticalScrollIndicator={true}
      >
        <View className="mt-5 space-y-3">
          <View style={{ justifyContent: "flex-end", flexDirection: "row" }}>
            <View
              style={{
                backgroundColor: "blue",
                padding: 10,
                width: wp(50),
                borderRadius: 20,
                borderTopRightRadius: 0,
              }}
            >
              <Text className="text-white">
                Hi, is there any room left? I’ll make an order if room is
                available
              </Text>
            </View>
          </View>

          <View style={{ justifyContent: "flex-start", flexDirection: "row" }}>
            <View
              style={{
                backgroundColor: "white",
                padding: 10,
                width: wp(50),
                borderRadius: 20,
                borderTopLeftRadius: 0,
                borderWidth: 1,
              }}
            >
              <Text className="text-[#8a8d99]">
                Hello Marine, Yes the room is available, so you can make an
                order.
              </Text>
            </View>
          </View>

          <View style={{ justifyContent: "flex-start", flexDirection: "row" }}>
            <View
              style={{
                backgroundColor: "white",
                padding: 10,
                width: wp(50),
                borderRadius: 20,
                borderTopLeftRadius: 0,
                borderWidth: 1,
                borderColor: "gray",
              }}
            >
              <Text className="text-[#8a8d99]">Thank You</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <MessageInput />
    </View>
  );
};

export default MessageDetail;
