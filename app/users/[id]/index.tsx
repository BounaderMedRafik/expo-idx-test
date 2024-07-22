import React from "react";
import { Text, View } from "react-native";

const UsersPage = ({ params }: { params: any }) => {
  return (
    <View>
      <Text className="text-white">{`users : ${params}`}</Text>
    </View>
  );
};

export default UsersPage;
