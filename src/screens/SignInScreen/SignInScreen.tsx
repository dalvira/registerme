import React, {useState} from 'react';
import {View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  onChangeEmail,
  onChangePassword,
} from '../../redux/slices/registerSlice';
import styles from './styles';
import {Input, Button, Link, ErrorText} from '../../components';
import {signIn} from '../../api/register';
import * as yup from 'yup';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ParamList} from '../../navigator/Navigator';

type Props = NativeStackScreenProps<ParamList, 'BasicInfoScreen'>;

const SignInScreen = ({navigation}: Props) => {
  const {email, password} = useSelector((state: any) => state.register);
  const dispatch = useDispatch();
  const [isValid, setIsValid] = useState<boolean | null>(null);

  const handleOnChangeEmail = (val: string) => {
    dispatch(onChangeEmail(val));
  };

  const handleOnChangePassword = (val: string) => {
    dispatch(onChangePassword(val));
  };

  const schema = yup.object().shape({
    email: yup.string().email(),
    password: yup.string().required(),
  });

  const onValidate = async (email: string, password: string) => {
    return await schema.isValid({
      email,
      password,
    });
  };

  const handleOnPressSignIn = async () => {
    if (await onValidate(email, password)) {
      setIsValid(true);
      (await signIn(email, password)) &&
        navigation.navigate('RegisteredScreen');
    } else {
      setIsValid(false);
    }
  };

  const handleOnPressSignUp = () => {
    navigation.navigate('BasicInfoScreen', {progress: 0.33});
  };

  return (
    <View style={styles.container}>
      <Input
        testID="email"
        value={email}
        placeholder="Email"
        onChange={handleOnChangeEmail}
        autoCapitalize="none"
      />
      <Input
        testID="password"
        value={password}
        placeholder="Password"
        onChange={handleOnChangePassword}
        autoCapitalize="none"
        secureTextEntry={true}
      />
      {isValid == false ? (
        <ErrorText text="Incorrect email or password" />
      ) : null}
      <View style={styles.actionBtnContainer}>
        <Button
          testID="sign-in"
          label="Sign In"
          onPress={handleOnPressSignIn}
        />
        <Link text="Sign Up" onPress={handleOnPressSignUp} />
      </View>
    </View>
  );
};

export default SignInScreen;
