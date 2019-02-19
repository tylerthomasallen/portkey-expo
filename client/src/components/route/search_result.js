import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './search_result_styles';

const SearchResult = ({description}) => {
  
  const arr = description.split(', ');
  const state = arr[arr.length -2];
  const city = arr[arr.length -3]
  const streetAddress = city + ', ' + state;
  
  return(
    <View style={styles.addressContainer}>
      <View style={styles.starContainer}>
        <Ionicons name="ios-star" style={styles.star} />
      </View>
      <View styles={styles.address}>
        <Text style={styles.addressTitle}>{description}</Text>
        <Text style={styles.streetAddress}>{streetAddress}</Text>
      </View>
    </View>
  )
}

export default SearchResult;
