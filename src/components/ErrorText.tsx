import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {colors} from '../theme/colors';

interface Props {
  testID?: string;
  text: string;
}

const ErrorText = (props: Props) => {
  return (
    <Text testID={props.testID} style={styles.text}>
      {props.text}
    </Text>
  );
};

export default ErrorText;

const styles = StyleSheet.create({
  text: {
    color: colors.red,
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 20,
  },
});
