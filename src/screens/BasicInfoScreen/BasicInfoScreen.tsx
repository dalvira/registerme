import React, {useState} from 'react';
import {View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  onChangeEmail,
  onChangeNewPassword,
  onChangeFirstName,
  onChangeLastName,
} from '../../redux/slices/registerSlice';
import styles from './styles';
import {Input, Button, ErrorText} from '../../components';
import * as yup from 'yup';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ParamList} from '../../navigator/Navigator';

type Props = NativeStackScreenProps<ParamList, 'BasicInfoScreen'>;

const BasicInfoScreen = ({navigation}: Props) => {
  const {email, newPassword, firstName, lastName} = useSelector(
    (state: any) => state.register,
  );
  const dispatch = useDispatch();
  const [isValid, setIsValid] = useState<boolean | null>(null);

  const handleOnChangeEmail = (val: string) => {
    dispatch(onChangeEmail(val));
  };

  const handleOnChangePassword = (val: string) => {
    dispatch(onChangeNewPassword(val));
  };

  const handleOnChangeFirstName = (val: string) => {
    dispatch(onChangeFirstName(val));
  };

  const handleOnChangeLastName = (val: string) => {
    dispatch(onChangeLastName(val));
  };

  const schema = yup.object().shape({
    email: yup.string().email(),
    newPassword: yup.string().required(),
    firstName: yup.string().required(),
    lastName: yup.string().required(),
  });

  const onValidate = async (
    email: string,
    newPassword: string,
    firstName: string,
    lastName: string,
  ) => {
    return await schema.isValid({
      email,
      newPassword,
      firstName,
      lastName,
    });
  };

  const onNext = async () => {
    if (await onValidate(email, newPassword, firstName, lastName)) {
      setIsValid(true);
      navigation.navigate('LocationScreen', {progress: 0.66});
    } else {
      setIsValid(false);
    }
  };

  return (
    <View style={styles.container}>
      <Input
        testID="email"
        onChange={handleOnChangeEmail}
        value={email}
        placeholder="Email"
        keyboardType="email-address"
      />
      <Input
        testID="password"
        onChange={handleOnChangePassword}
        value={newPassword}
        placeholder="Password"
        autoCapitalize="none"
        secureTextEntry={true}
      />
      <Input
        testID="first-name"
        onChange={handleOnChangeFirstName}
        value={firstName}
        placeholder="First name"
      />
      <Input
        testID="last-name"
        onChange={handleOnChangeLastName}
        value={lastName}
        placeholder="Last name"
      />
      {isValid == false ? (
        <ErrorText
          testID="error-text"
          text="One or more fields are incorrect or missing"
        />
      ) : null}
      <Button testID="next" label="Next" onPress={onNext} />
    </View>
  );
};

export default BasicInfoScreen;
