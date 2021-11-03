import React, { useState } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

// Styles
import { styles } from "./styles.js";
import { theme } from "../../theme/main.js";

function RandomNumber() {
  const [previusNumbers, setPreviusNumbers] = useState([]);
  const [lastNumber, setLastNumber] = useState(0);
  const LIMIT = 10;

  function randomize() {
    const number = Math.floor(Math.random() * (LIMIT + 1));
    setLastNumber(number);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View></View>

      <Text style={styles.lastNumber}>{lastNumber}</Text>

      <TouchableOpacity
        style={styles.btnShuffle}
        onPress={randomize}
        activeOpacity={0.8}
      >
        <MaterialCommunityIcons
          name="dice-5"
          size={32}
          color={theme.colors.white}
        />

        <Text style={styles.btnShuffleText}>Sortear</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default RandomNumber;
