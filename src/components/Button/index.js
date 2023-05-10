import { TouchableOpacity, Text } from "react-native";
import React from "react";

import styles from "./style";

export default function Button({ children, onClick }) {
    return (
        <TouchableOpacity style={{ ...styles.btn, ...styles.btnPrimary }}>
            <Text style={{textAlign:'center'}}>{children}</Text>
        </TouchableOpacity>
    );
}
