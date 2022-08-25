import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';

const Item = ({users}) => {
  return (
    <FlatList
      data={users}
      renderItem={({item: user}) => (
        <View style={{padding: 16}}>
          <Text>{user.id}</Text>
          <Text>{user.email}</Text>
          <Text>{user.first_name}</Text>
          <Text>{user.last_name}</Text>
        </View>
      )}
      keyExtractor={user => user.id}
    />
  );
};

const FAxios = () => {
  const [users, setUsers] = useState([]);

  const getData = async () => {
    const response = await axios.get('https://reqres.in/api/users?page=2');
    setUsers(response.data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View>
      <Item users={users} />
    </View>
  );
};

export default FAxios;
