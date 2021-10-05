import React, {useState} from 'react';
import {TextInput, StyleSheet, Text, View} from 'react-native';
import {colors} from '../theme/colors';

interface Props {
  testID?: string;
  placeholder?: string;
  hint?: string;
  value?: string;
  onChange?: (val: string) => void;
  secureTextEntry?: boolean;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  keyboardType?:
    | 'default'
    | 'number-pad'
    | 'decimal-pad'
    | 'numeric'
    | 'email-address'
    | 'phone-pad';
}

const Input = (props: Props) => {
  const [text, setText] = useState(props.value);

  const onChangeText = (val: string) => {
    props.onChange && props.onChange(val);
    setText(val);
  };

  return (
    <View style={styles.container}>
      <TextInput
        testID={props.testID}
        style={styles.input}
        placeholder={props.placeholder}
        value={text}
        onChangeText={onChangeText}
        autoCapitalize={props.autoCapitalize}
        secureTextEntry={props.secureTextEntry}
        keyboardType={props.keyboardType}
      />
      {props.hint ? <Text style={styles.hint}>*{props.hint}</Text> : null}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: 320,
    backgroundColor: colors.white,
    borderRadius: 8,
    paddingLeft: 10,
  },
  hint: {
    fontSize: 11,
    color: colors.darkGray,
    marginTop: 5,
    marginLeft: 5,
  },
});
