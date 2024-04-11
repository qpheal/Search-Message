import { Text, View, SafeAreaView, TextInput, Image } from "react-native";
import { Ionicons, AntDesign, MaterialIcons } from "@expo/vector-icons";
import MessageHeader from "../components/messageHeader";
import Footer from "../components/footer";

export default function MessageEmptyState() {
  return (
    <SafeAreaView className="flex-1  " style={{ top: 20 }}>
      <MessageHeader />

      <View className="justify-center items-center mt-20">
        <Image
          source={require("../../assets/message.png")}
          style={{ width: 250, height: 250 }}
        />
        <View className="space-y-3 items-center">
          <Text className="text-[24px] font-[700]">No Messages Here</Text>
          <Text className="text-[14px] font-[400]">
            Let's start messaging with others or sellers
          </Text>
        </View>
      </View>
        <Footer />
      
    </SafeAreaView>
  );
}
