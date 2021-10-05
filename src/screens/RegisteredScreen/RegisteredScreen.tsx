import React, {useState, useEffect} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import styles from './styles';
import {getUsers} from '../../api/register';
import User from '../../interfaces/User';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ParamList} from '../../navigator/Navigator';

type Props = NativeStackScreenProps<ParamList, 'BasicInfoScreen'>;

const RegisteredScreen = ({navigation}: Props) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUsers().then(items => {
      setUsers(items);
      setLoading(false);
    });
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        users.map((user: User) => (
          <Text key={user.id}>
            {user.lastName}, {user.firstName}
          </Text>
        ))
      )}
    </View>
  );
};

export default RegisteredScreen;
