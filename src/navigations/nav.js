import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import messagesEmptyState from "./src/screens/messagesEmptyState";
import messages from "./src/screens/messages";
import messageDetail from "./src/screens/messageDetail";
import message from "./src/mockData/messagenotification";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MessageDetail">
          <Stack.Screen
            options={{ headerShown: false }}
            name="MessageEmptyState"
            component={messagesEmptyState}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Message"
            component={messages}
          />
          <Stack.Screen
            option={{ headerShown: false }}
            name="MessageDetail"
            component={messageDetail}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
