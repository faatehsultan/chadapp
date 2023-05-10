import { LinearGradient } from 'expo-linear-gradient';
import { View, Text } from 'react-native';
import React from 'react';
import styles from './style';

export default function UserCard({ firstName, lastName }) {
  const stepNames = ['new-user', '', '', '', '', ''];

  return (
    <LinearGradient
      colors={['rgba(23, 23, 23, 1)', 'rgba(23, 23, 23, 0)']}
      start={{
        x: 1,
        y: 0,
      }}
      end={{
        x: 1,
        y: 1,
      }}
      style={styles.userCard}
    >
      <View style={styles.userCardHeader}>
        <View style={styles.avatarBasic} />
        <View style={styles.userCardTextContainer}>
          <Text style={styles.userCardName}>
            {firstName} {lastName}
          </Text>
          <Text style={styles.userCardFreeUser}>Free User</Text>
        </View>
      </View>


      <View style={styles.sliderWrapper}>
        <View style={styles.sliderContainer}>
          {stepNames.map((i, idx) => (
            <View style={styles.sliderItem} key={idx}>
              <View style={i ? styles.sliderItemLabelActive : styles.sliderItemLabel}>
                <Text>New User</Text>
              </View>
              <View style={styles.sliderItemBar} />
            </View>
          ))}
        </View>
        <LinearGradient
          colors={['#ffffff00', 'rgba(23, 23, 23, 0.6)']}
          start={{
            x: 0,
            y: 0,
          }}
          end={{
            x: 1,
            y: 0,
          }}
          style={styles.sliderEndFade}
        />
      </View>
    </LinearGradient>
  );
}
