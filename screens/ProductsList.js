import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useSelector } from "react-redux"; // Import the useSelector hook
import { Product } from "../components/Product";
import { getProducts } from "../services/ProductsService";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Button from "../components/Buttons";

export function ProductsList({ navigation }) {
  const products = useSelector((state) => state.products);

  // Add a check to prevent the error
  if (!Array.isArray(products) || products.length === 0) {
    return <Text>No products available.</Text>;
  }

  const userDetails = useSelector((state) => state.userDetails); // Assuming you have a userDetails slice in your Redux store

  const logout = () => {
    AsyncStorage.setItem(
      "userData",
      JSON.stringify({ ...userDetails, loggedIn: false })
    );
    navigation.navigate("LoginScreen");
  };

  function renderProduct({ item }) {
    // Add an additional check to ensure each item has the 'product' property
    if (!item.id) {
      return null; // Or handle the case where product information is missing
    }

    return (
      <Product
        {...item}
        onPress={() => {
          navigation.navigate("ProductDetails", { productId: item.id });
        }}
      />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.productsList}
        contentContainerStyle={styles.productsListContainer}
        keyExtractor={(item) => item.id.toString()}
        data={products}
        renderItem={renderProduct}
      />
      <View style={styles.logoutButtonContainer}>
        <Button title="Logout" onPress={logout} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  productsList: {
    backgroundColor: "#eeeeee",
  },
  productsListContainer: {
    backgroundColor: "#eeeeee",
    paddingVertical: 8,
    marginHorizontal: 8,
  },
  logoutButtonContainer: {
    marginVertical: 10,
  },
});
