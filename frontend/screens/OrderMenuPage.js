import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  SafeAreaView,
} from 'react-native';


// Dummy data
const products = [
    { id: '1', name: "Lay's Original", price: '$2', image: require('../imgs/food/lays.png') },
    { id: '2', name: "Pepsi", price: '$1', image: require('../imgs/food/lays.png') },
    { id: '3', name: "Lay's Ketchup", price: '$2', image: require('../imgs/food/lays.png') },
    { id: '4', name: "Lay's Chili Lime", price: '$2', image: require('../imgs/food/lays.png') },
    { id: '5', name: "Ruffles Original", price: '$2', image: require('../imgs/food/lays.png') },
  ];


  const OrderMenuPage = ({ navigation }) => {
    const renderItem = ({ item }) => (
      <View style={styles.itemContainer}>
        <Image source={item.image} style={styles.productImage} />
        <View style={styles.productDetails}>
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.productPrice}>{item.price}</Text>
        </View>
        <TouchableOpacity style={styles.addButton} onPress={() => {/* TODO: handle add to cart logic */}}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    );
  
    return (
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Image
            source={require('../imgs/undo.png')}
            style={styles.backIcon}
          />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Locations</Text>
          
        </View>
          <Text style={styles.Pagetitle}>Available Products</Text>
  
        {/* Product List */}
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.listContainer}
        />
  
        {/* Checkout Button */}
        <TouchableOpacity style={styles.checkoutButton} onPress={() => navigation.navigate('CheckoutPage')}>
          <Text style={styles.checkoutButtonText}>Checkout</Text>
        </TouchableOpacity>
  
        {/* Bottom Navigation */}
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
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    backIcon: {
      width: 25, // Adjust as needed
      height: 25, // Adjust as needed
      justifyContent: 'center',
    },
    Pagetitle:{
      textAlign: 'center',
      fontSize: 40,
      color: 'white',
    },

    checkoutButton: {
      backgroundColor: 'white',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 10,
    },
    checkoutButtonText: {
      fontSize: 18,
      color: '#4B9CD3', // Adjust the color to match your theme
      fontWeight: 'bold',
    },
    bottomNav: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      backgroundColor: '#2e3bb0', // Same as the header background color
      paddingVertical: 10,
    },
    navIcon: {
      width: 30,
      height: 30,
      // Adjust the size as needed
    },
title:{
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 35,
    color: 'white',

},
  container: {
    flex: 1,
    backgroundColor: '#2e3bb0',
  },
  header: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#2e3bb0',
  },
  backButton: {

    marginRight: 10,
  },
  backButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
  listContainer: {
    padding: 8,
  },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 10,
  },
  productImage: {
    width: 50,
    height: 70,
    marginRight: 10,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
  },
  productPrice: {
    fontSize: 16,
  },
  addButton: {
    backgroundColor: '#4B9CD3',
    padding: 5,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  addButtonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 24,
  },
});

export default OrderMenuPage;
