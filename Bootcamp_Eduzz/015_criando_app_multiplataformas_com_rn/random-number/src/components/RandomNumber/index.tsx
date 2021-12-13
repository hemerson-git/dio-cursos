import React, { useState } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

// Styles
import { styles } from "./styles.js";
import { theme } from "../../theme/main.js";

function RandomNumber() {
  const [previusNumbers, setPreviusNumbers] = useState([]);
  const [lastNumber, setLastNumber] = useState(0);
  const START = 0;
  const LIMIT = 10;

  function randomize() {
    const number = Math.floor(Math.random() * (LIMIT + 1)) + START;
    setLastNumber(number);
  }

  function verifyNumber() {}

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.lastNumber}>{lastNumber}</Text>
      </View>

      <View style={styles.footer}>
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
      </View>
    </SafeAreaView>
  );
}

export default RandomNumber;
