import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {colors} from '../theme/colors';

interface Props {
  testID?: string;
  label: string;
  onPress: () => void;
}

const Button = (props: Props) => {
  return (
    <TouchableOpacity
      testID={props.testID}
      style={styles.button}
      onPress={props.onPress}>
      <Text style={styles.text}>{props.label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.blue,
    borderRadius: 40,
    height: 40,
    width: 135,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '500',
  },
});
