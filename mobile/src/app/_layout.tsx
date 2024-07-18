import { Loading } from "@/components/loading";
import "@/styles/global.css";
import "@/utils/dayjsLocaleConfig";
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  useFonts,
} from "@expo-google-fonts/inter";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Inter_500Medium,
    Inter_400Regular,
    Inter_600SemiBold,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }
  return (
    <View className="bg-zinc-950 flex-1">
      <StatusBar backgroundColor="transparent" translucent />
      <Slot />
    </View>
  );
}
