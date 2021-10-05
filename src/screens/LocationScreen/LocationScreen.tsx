import React, {useState} from 'react';
import {View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {onChangeCity, onChangeCountry} from '../../redux/slices/registerSlice';
import styles from './styles';
import {Input, Button, ErrorText} from '../../components';
import * as yup from 'yup';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ParamList} from '../../navigator/Navigator';

type Props = NativeStackScreenProps<ParamList, 'LocationScreen'>;

const LocationScreen = ({navigation}: Props) => {
  const {city, country} = useSelector((state: any) => state.register);
  const dispatch = useDispatch();
  const [isValid, setIsValid] = useState<boolean | null>(null);

  const handleOnChangeCity = (val: string) => {
    dispatch(onChangeCity(val));
  };

  const handleOnChangeCountry = (val: string) => {
    dispatch(onChangeCountry(val));
  };

  const schema = yup.object().shape({
    city: yup.string().required(),
    country: yup.string().required(),
  });

  const onValidate = async (city: string, country: string) => {
    return await schema.isValid({
      city,
      country,
    });
  };

  const onNext = async () => {
    if (await onValidate(city, country)) {
      setIsValid(true);
      navigation.navigate('SubmitScreen', {progress: 1});
    } else {
      setIsValid(false);
    }
  };

  return (
    <View style={styles.container}>
      <Input
        testID="city"
        value={city}
        placeholder="City"
        onChange={handleOnChangeCity}
      />
      <Input
        testID="country"
        value={country}
        placeholder="Country"
        onChange={handleOnChangeCountry}
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

export default LocationScreen;
