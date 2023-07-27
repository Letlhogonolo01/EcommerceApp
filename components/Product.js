import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux"; // Import the useSelector hook

export function Product({ id, name, price, image, onPress }) {
  const product = useSelector((state) =>
    state.products.find((item) => item.id === id)
  );

  const dispatch = useDispatch();

  function onAddToCart() {
    dispatch({ type: 'cart/addItemToCart', payload: { id: product.id } });
  }

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image style={styles.image} source={image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>R {price}</Text>
        <TouchableOpacity onPress={onAddToCart} style={styles.addToCartButton}>
          <Text style={styles.addToCartButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "4%",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
});
