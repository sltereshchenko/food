import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useBusinesses from '../hooks/useBusinesses';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchAPI, businesses, errorMessage] = useBusinesses();

  const filterResultsByPrice = (price) => {
    return businesses.filter((business) => business.price===price);
  };

  return (
    <View style={{backgroundColor: '#FFFF', flex: 1}}>

      <SearchBar term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchAPI(term)}/>
      {errorMessage?<Text>{errorMessage}</Text>:null}
      <ScrollView>
        <ResultsList title="Cost Effective" results={filterResultsByPrice('$')} />
        <ResultsList title="Bit Pricier" results={filterResultsByPrice('$$')} />
        <ResultsList title="Big Spender" results={filterResultsByPrice('$$$')} />
      </ScrollView>
    </View>
  );
};


export default SearchScreen;
