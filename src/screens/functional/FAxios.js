import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';

const Item = ({id, email, firstName, lastName}) => {
  return (
    <View style={{marginBottom: 8}}>
      <Text>{id}</Text>
      <Text>{email}</Text>
      <Text>{firstName}</Text>
      <Text>{lastName}</Text>
    </View>
  );
};

const FAxios = () => {
  const [users, setUsers] = useState([]);

  const getData = async () => {
    const response = await axios.get('https://reqres.in/api/users?page=2');
    setUsers(response.data.data);
    console.log(users);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View>
      {users.map(user => {
        return (
          <Item
            id={user.id}
            email={user.email}
            firstName={user.first_name}
            lastName={user.last_name}
          />
        );
      })}
    </View>
  );
};

export default FAxios;
