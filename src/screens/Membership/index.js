import { View, Text, Image } from "react-native";
import { AuthForm } from "../../wrappers";
import React, { useState } from "react";
import UserCard from "./components/UserCard";
import styles from "./style";

export default function Membership() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <AuthForm
      heading={"Lets get to know you"}
      fields={[
        {
          label: "Whats your first name?",
          placeholder: "First name goes here",
          value: firstName,
          onChange: setFirstName,
        },
        {
          label: "Whats your last name?",
          placeholder: "Last name goes here",
          value: lastName,
          onChange: setLastName,
        },
      ]}
      button={{
        label: "Continue",
      }}
    >
      <UserCard firstName={firstName} lastName={lastName} />
      <View style={styles.bottomLogoContainer}>
        <Image
          style={styles.bottomLogo}
          source={require("../../assets/img/logo.png")}
        />
      </View>
    </AuthForm>
  );
}
