import React, { useRef } from "react";
import { Paystack, paystackProps } from "react-native-paystack-webview";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function Payment() {
  const paystackWebViewRef = useRef(paystackProps.PayStackRef);

  return (
    <View style={{ marginHorizontal: 15 }}>
      <Paystack
        paystackKey="pk_test_9bd0b90f467cc03ec7bc74e417b58fb978f6da87"
        paystackSecretKey="sk_test_43d3ca891624d90232ff726ab9012234efcbae1f"
        billingEmail="letlhogonolo.moroke8@gmail.com"
        billingName="Letlhogogonolo Tlhogi"
        billingMobile="0676260399"
        amount={1000}
        currency="ZAR"
        onCancel={(e) => {
          console.log(e);
        }}
        onSuccess={(res) => {
          console.log(res);
        }}
        ref={paystackWebViewRef}
      />
      <TouchableOpacity
        onPress={() => paystackWebViewRef.current.startTransaction()}
        style={styles.paystack}
      >
        <Text style={styles.pay}>Pay Now</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  paystack: {
    minWidth: "60%",
    backgroundColor: "#F9A826",
    padding: 10,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  pay: {
    color: "white",
  },
});
