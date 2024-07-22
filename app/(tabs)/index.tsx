import {
  Image,
  StyleSheet,
  Platform,
  View,
  Button,
  Pressable,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <View className=" flex items-center justify-center h-full">
      <Link
        href={"/users/5"}
        className="bg-blue-400 px-5 py-2 rounded-xl text-white"
      >
        hii
      </Link>
    </View>
  );
}
