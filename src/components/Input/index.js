import { View, Text, TextInput } from "react-native";
import React from "react";

import styles from "./style";

export default function Input({ label, value, placeholder, onChange }) {
  return (
    <View style={styles.formGroup}>
      <Text style={styles.inputLabel}>{label}</Text>
      <TextInput
        style={styles.formControl}
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
      ></TextInput>
    </View>
  );
}
