import {Dimensions, FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const width = Dimensions.get('window').width;

const data = [
  {day: 'H-5'},
  {day: 'H-4'},
  {day: 'H-3'},
  {day: 'H-2'},
  {day: 'H-1'},
  {day: 'H'},
  {day: 'H+1'},
  {day: 'H+2'},
  {day: 'H+3'},
  {day: 'H+4'},
  {day: 'H+5'},
];

const Item = ({day}) => {
  return (
    <View
      style={{
        width: width - 16,
        height: 125,
        margin: 8,
        elevation: 5,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
        {day}
      </Text>
    </View>
  );
};

const FSwipe = () => {
  return (
    <View>
      <FlatList
        data={data.slice(2, 9)}
        keyExtractor={data.day}
        renderItem={({item}) => <Item day={item.day} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={width}
        decelerationRate="fast"
        bounces={false}
        initialScrollIndex="3"
        disableIntervalMomentum={true}
      />
    </View>
  );
};

export default FSwipe;

const styles = StyleSheet.create({});
