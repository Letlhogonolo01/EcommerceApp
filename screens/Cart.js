import React, { useEffect, useState } from "react";
import { View, Image, Text, Button, FlatList, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../slices/cartSlice";

export function Cart({ navigation }) {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  function Totals() {
    let [total, setTotal] = useState(0);
    useEffect(() => {
      setTotal(getTotalPrice());
    }, []);

    const getTotalPrice = () => cartItems.reduce((sum, item) => sum + item.totalPrice, 0);

    return (
      <>
        <View style={styles.cartLineTotal}>
          <Text style={[styles.lineLeft, styles.lineTotal]}>Total</Text>
          <Text style={styles.mainTotal}>R {total}</Text>
        </View>
        <View style={{ padding: 10 }}>
          <Button onPress={() => navigation.navigate("Payment")} title="CHECKOUT" />
        </View>
      </>
    );
  }

  function renderItem({ item }) {
    return (
      <>
        <View style={styles.cartLine}>
          <Image style={styles.image} source={item.product.image} />
          <Text style={styles.lineLeft}>
            {item.product.name} x {item.qty}{" "}
            <Text style={styles.productTotal}>R {item.totalPrice}</Text>
          </Text>
        </View>
      </>
    );
  }

  return (
    <FlatList
      style={styles.itemsList}
      contentContainerStyle={styles.itemsListContainer}
      data={cartItems}
      renderItem={renderItem}
      keyExtractor={(item) => item.product.id.toString()}
      ListFooterComponent={<Totals />} // Wrap Totals in curly braces to render it as a component
    />
  );
}

const styles = StyleSheet.create({
  cartLine: {
    flexDirection: "row",
    width: "80%",
    paddingVertical: 10,
    alignItems: "center",
  },
  image: {
    width: "25%",
    aspectRatio: 1,
    marginRight: 5,
  },
  cartLineTotal: {
    flexDirection: "row",
    borderTopColor: "#dddddd",
    borderTopWidth: 1,
    margin: 9,
  },
  productTotal: {
    fontWeight: "bold",
  },
  lineTotal: {
    fontWeight: "bold",
  },
  lineLeft: {
    flex: 1,
    fontSize: 20,
    lineHeight: 40,
    color: "#333333",
  },
  lineRight: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333333",
    textAlign: "left",
  },
  mainTotal: {
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 40,
    color: "#333333",
    textAlign: "right",
  },
  itemsList: {
    backgroundColor: "#eeeeee",
  },
  itemsListContainer: {
    backgroundColor: "#eeeeee",
    paddingVertical: 8,
    marginHorizontal: 8,
  },
  quantityButtons: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
});
