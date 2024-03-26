import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { useCart } from '../CartContext';

const CheckoutPage = ({ navigation }) => {
  const { cart } = useCart(); 

  // Generate a list of cart items with their quantities
  const renderCartItems = () => {
    const cartItems = [];
    for (const id in cart) {
      cartItems.push(
        <Text style={styles.cartItemText} key={id}>
          {cart[id].name}: {cart[id].quantity}
        </Text>
      );
    }
    return cartItems.length ? cartItems : <Text style={styles.cartItemText}>Your cart is empty.</Text>;
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Image source={require('../imgs/undo.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Checkout</Text>
      </View>

      {/* Cart Items */}
      <View style={styles.contentContainer}>
        {renderCartItems()}
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        {/* ...other navigation buttons... */}
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
  cartItemText: {
    fontSize: 16,
    color: '#FFF',
    margin: 8,
    marginLeft: 16,
  },
});

export default CheckoutPage;
