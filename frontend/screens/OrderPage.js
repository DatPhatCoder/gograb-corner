
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';

// Dummy data
const locations = [
  { id: '1', title: '250 - 13450 102 Avenue', distance: '0.2 km', status: 'In-Service' },
  { id: '2', title: '253 - 13450 102 Avenue', distance: '0.3 km', status: 'In-Service' },
  { id: '3', title: '250 - 13450 102 Avenue', distance: '0.2 km', status: 'In-Service' },
  { id: '4', title: '250 - 13450 102 Avenue', distance: '0.2 km', status: 'In-Service' },
];

const OrderPage = ({ navigation }) => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    navigation.navigate('OrderMenuPage', { location });
  };

  const renderLocation = ({ item }) => (
    <TouchableOpacity style={styles.locationItem} onPress={() => handleLocationSelect(item)}>
      <Text style={styles.locationTitle}>{item.title}</Text>
      <Text style={styles.locationDetails}>{`${item.distance} - ${item.status}`}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Image source={require('../imgs/orderpageimgs/locationpic.png')} style={styles.topImage} />
      <Text style={styles.header}>Closest Locations</Text>
      <FlatList
        data={locations}
        renderItem={renderLocation}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.bottomNav}>
          <TouchableOpacity onPress={() => navigation.navigate('Order')}>
            <Image source={require('../imgs/orderpageimgs/menuicon.png')} style={styles.navIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Storage')}>
            <Image source={require('../imgs/orderpageimgs/storageicon.png')} style={styles.navIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
            <Image source={require('../imgs/orderpageimgs/settingsicon.png')} style={styles.navIcon} />
          </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#2e3bb0',
    paddingVertical: 10,
  },
  navIcon: {
    width: 30,
    height: 30,
    
  },
  container: {
    flex: 1,
    backgroundColor: '#2e3bb0',
  },
  topImage: {
    width: '100%',
    marginVertical: 50,
    height: 200,
    resizeMode: 'contain',
  },
  header: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    padding: 20,
    textAlign: 'center',
    fontFamily: 'Inter-Black',
    
  },
  locationItem: {
    backgroundColor: 'white',
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 16,
    borderRadius: 5,
  },
  locationTitle: {
    fontSize: 16,
    color: '#333',
  },
  locationDetails: {
    fontSize: 14,
    color: '#333',
  },
});

export default OrderPage;
