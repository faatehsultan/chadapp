import { StatusBar } from "expo-status-bar";
import { Text, View, Image } from "react-native";
import { useState } from "react";
import { Input, Button } from "../../components";
import styles from "./style";
import UserCard from "../../screens/Membership/components/UserCard";

export default function AuthForm({ fields, heading, button, children }) {
  return (
    <View style={styles.body}>
      <StatusBar style='auto' />

      <View style={styles.container}>
        <Text style={styles.sectionHeader}>{heading}</Text>

        {fields.map((f, idx) => (
          <Input
            label={f.label}
            placeholder={f.placeholder}
            value={f.value}
            onChange={f.onChange}
            key={idx}
          />
        ))}

        <Button>{button.label}</Button>

        {children}
      </View>
    </View>
  );
}
