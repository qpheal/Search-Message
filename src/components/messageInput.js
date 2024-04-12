import { View, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

const MessageInput = () => {
  return (
    <View
      className="flex-row px-1.5  justify-center items-center pt-1 space-x-3 "
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: wp(2),
        backgroundColor:"white",
        margin: 0, 
        borderRadius: 50
      }}
    >
      <TouchableOpacity>
        <AntDesign name="paperclip" size={24} color="black" />
      </TouchableOpacity>
      <TextInput
        placeholder="Write a reply"
        className="text-[16px] font-[400] w-[70%]"
        multiline={true}
        numberOfLines={3}
        autoCorrect={true}
        maxLength={100}
      />

      <FontAwesome name="send" size={24} color="black" />
    </View>
  );
};

export default MessageInput;
