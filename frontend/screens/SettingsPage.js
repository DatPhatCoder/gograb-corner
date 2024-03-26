import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import CustomText from '../CustomText';

const SettingsPage = ({ navigation }) => {
  const menuItems = [
    'Account',
    'Billing Information',
    'Terms & Conditions',
    'Privacy Policy'
  ];

  const renderMenuItem = (item, index) => (
    <TouchableOpacity key={index} style={styles.menuItem}>
      <CustomText style={styles.menuItemText}>{item}</CustomText>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <CustomText style={styles.title}>Settings</CustomText>
        {menuItems.map(renderMenuItem)}
      </ScrollView>
      
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
    backgroundColor: '#2e3bb0',
  },
  scrollView: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  title: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    fontFamily: 'Inter-Black',
  },
  menuItem: {
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginTop: 50,
  },
  menuItemText: {
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Inter-Black',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#2e3bb0',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)', // maybe change all to this
  },
  navIcon: {
    width: 30,
    height: 30,
  },
});

export default SettingsPage;
