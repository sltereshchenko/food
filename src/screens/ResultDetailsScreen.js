import React, {useState, useEffect} from 'react';
import {Image, Text, StyleSheet, FlatList} from 'react-native';
import yelp from '../api/yelp';

const ResultDetailsScreen = ({navigation}) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam('id');
  const getResultDetails = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    getResultDetails(id);
  },
  []);
  if (!result) {
    return null;
  }
  return (
    <>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo)=> photo}
        renderItem={({item}) => {
          return <Image style={styles.image} source={{uri: item}}/>;
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
  },

});

export default ResultDetailsScreen;
