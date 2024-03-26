import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import CustomText from '../CustomText'; // Import your custom Text component

const EmptyOrdersPage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <CustomText style={styles.title}>Your current orders</CustomText>
        <Image
          source={require('../imgs/noorder.png')} // Replace with your empty orders image
          style={styles.clipboardImage}
        />
        <CustomText style={styles.emptyMessage}>Your cart is currently empty!</CustomText>
        <CustomText style={styles.subtext}>Looks like you don't have any active orders</CustomText>

        <TouchableOpacity style={styles.orderButton} onPress={() => navigation.navigate('Order')}>
          <CustomText style={styles.orderButtonText}>Order</CustomText>
        </TouchableOpacity>
      </View>

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
  container: {
    flex: 1,
    backgroundColor: '#2e3bb0', // Adjust the background color to match your theme
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
  },
  clipboardImage: {
    width: 200, // Set the size as needed
    height: 200, // Set the size as needed
    resizeMode: 'contain',
    marginBottom: 20,
  },
  emptyMessage: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtext: {
    fontSize: 16,
    color: 'white',
    marginBottom: 20,
  },
  orderButton: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: 'white', // Adjust button background color as needed
  },
  orderButtonText: {
    fontSize: 18,
    color: '#4B9CD3', // Adjust the button text color to match your theme
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#2e3bb0', // Adjust the navigation bar background color to match your theme
    paddingVertical: 10,
  },
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
});

export default EmptyOrdersPage;
