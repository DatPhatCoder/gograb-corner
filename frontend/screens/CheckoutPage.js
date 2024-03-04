import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';

const CheckoutPage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header with back arrow and title */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Image
            source={require('../imgs/undo.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Checkout</Text>
      </View>

      <View style={styles.contentContainer}>
        {/*checkout content here */}
      </View>

      {/* Bottom Navigation identical to OrderMenuPage */}
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
  contentContainer: {
    flex: 1,
    
  },
  container: {
    flex: 1,
    backgroundColor: '#2e3bb0',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#2e3bb0',
  },
  backButton: {
    marginRight: 10,
  },
  backIcon: {
    width: 25,
    height: 25, 
  },
  headerTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'NunitoSans',
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

export default CheckoutPage;
