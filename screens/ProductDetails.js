import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  Button,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { addItemToCart } from "../slices/cartSlice";

export function ProductDetails({ route }) {
  const { productId } = route.params;
  const product = useSelector((state) =>
    state.cart.find((item) => item.product.id === productId)
  );

  const dispatch = useDispatch();

  function onAddToCart() {
    dispatch(addItemToCart(product.id));
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={product.product.image} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{product.product.name}</Text>
          <Text style={styles.price}>R {product.product.price.toFixed(2)}</Text>
          <Text style={styles.description}>{product.product.description}</Text>
          <Button onPress={onAddToCart} title="Add To Cart" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
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
  description: {
    fontSize: 16,
    fontWeight: "400",
    color: "#787878",
    marginBottom: 16,
  },
});
