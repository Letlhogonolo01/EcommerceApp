import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux"; // Import the useSelector hook

export function CartIcon({ navigation }) {
  const cartItems = useSelector((state) => state.cart); // Access cart items from Redux store using a selector

  // Calculate the total number of items in the cart
  const getItemsCount = () => cartItems.reduce((sum, item) => sum + item.qty, 0);

  return (
    <View style={styles.container}>
      <Text
        style={styles.text}
        onPress={() => {
          navigation.navigate("Cart");
        }}
      >
        Cart ({getItemsCount()})
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    backgroundColor: "orange",
    height: 39,
    padding: 12,
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 13,
  },
});
