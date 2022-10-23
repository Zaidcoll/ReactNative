import { View, Image, StyleSheet, Pressable } from "react-native";

function Images({ name,doPayment }) {
  let url_link = require(`../assets/payment/nets.png`);
  if (name == "credit_card") {
    url_link = require(`../assets/payment/credit_card.png`);
  } else if (name == "nets_qr") {
    url_link = require(`../assets/payment/nets_qr.png`);
  } else if (name == "ez_link") {
    url_link = require(`../assets/payment/ez_link.png`);
  }
  function doPaymentGif(){
    doPayment(name)
  }
  return (
      <View style={styles.container}>
        <Pressable onPress={doPaymentGif}>
          <Image style={styles.paymentimage} source={url_link} />
        </Pressable>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    height: 100,
    width: 200,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 2,
    marginVertical: 20,
  },
  paymentimage: {
    width: 170,
    height: 85,
  },
  paymentimage2: {
    width: 300,
    height: 300,
  },
  containerGif: {
    paddingTop: 20,
  },
});
export default Images;
