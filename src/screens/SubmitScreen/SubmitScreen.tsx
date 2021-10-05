import React, {useState} from 'react';
import {View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {onChangeDOB, onChangePhone} from '../../redux/slices/registerSlice';
import {addUser} from '../../api/register';
import styles from './styles';
import {Input, Button, ErrorText} from '../../components';
import * as yup from 'yup';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ParamList} from '../../navigator/Navigator';

type Props = NativeStackScreenProps<ParamList, 'BasicInfoScreen'>;

const SubmitScreen = ({navigation}: Props) => {
  const {
    email,
    newPassword,
    firstName,
    lastName,
    city,
    country,
    dateOfBirth,
    mobile,
  } = useSelector((state: any) => state.register);
  const dispatch = useDispatch();
  const [isValid, setIsValid] = useState<boolean | null>(null);

  const handleOnChangeDOB = (val: string) => {
    dispatch(onChangeDOB(val));
  };

  const handleOnChangePhone = (val: string) => {
    dispatch(onChangePhone(val));
  };

  const schema = yup.object().shape({
    dateOfBirth: yup.date().required(),
    mobile: yup.number().required(),
  });

  const onValidate = async (dateOfBirth: Date, mobile: number) => {
    return await schema.isValid({
      dateOfBirth,
      mobile,
    });
  };

  const onSubmit = async () => {
    if (await onValidate(dateOfBirth, mobile)) {
      setIsValid(true);
      (await addUser({
        email,
        password: newPassword,
        firstName,
        lastName,
        city,
        country,
        dateOfBirth,
        mobile,
      })) && navigation.navigate('RegisteredScreen');
    } else {
      setIsValid(false);
    }
  };

  return (
    <View style={styles.container}>
      <Input
        testID="dateOfBirth"
        onChange={handleOnChangeDOB}
        value={dateOfBirth}
        placeholder="Date of Birth"
        keyboardType="number-pad"
        hint="Use format: MMDDYYY"
      />
      <Input
        testID="mobile"
        onChange={handleOnChangePhone}
        value={mobile}
        placeholder="Phone"
        keyboardType="number-pad"
        hint="Use format: 18085551234"
      />
      {isValid == false ? (
        <ErrorText
          testID="error-text"
          text="One or more fields are incorrect or missing"
        />
      ) : null}
      <Button testID="submit" label="Submit" onPress={onSubmit} />
    </View>
  );
};

export default SubmitScreen;
