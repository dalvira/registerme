import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {colors} from '../theme/colors';

interface Props {
  text: string;
  onPress: () => void;
}

const Link = (props: Props) => {
  return (
    <Text style={styles.text} onPress={props.onPress}>
      {props.text}
    </Text>
  );
};

export default Link;

const styles = StyleSheet.create({
  text: {
    color: colors.blue,
    fontSize: 16,
    fontWeight: '600',
  },
});
