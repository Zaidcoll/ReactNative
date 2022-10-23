import { View, Text, StyleSheet, Pressable} from "react-native";
import {useState} from 'react';
function PaymentSuccess({onPressRestart}) {
  const [isPaymentSucess,setIsPaymentSuccess] = useState(false);
  function doPaymentSuccess(){
    setIsPaymentSuccess(true)
  }
  return (
    <View style={styles.paymentSuccessContainer}>
      <Text>YOUR PAYMENT IS SUCCESSFUL</Text>
      <Text>Please wait for your receipt</Text>
      <Pressable onPress={onPressRestart()}>
        <Text style={styles.customBtn}>Restart</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  paymentSuccessContainer: {
    padding: 12,
    marginLeft: 270,
    height: 650,
    width: 800,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 2,
    marginVertical: 20,
  },
  customBtn:{
    width: 150,
    backgroundColor: "blue",
    borderRadius: 10,
    color: '#fff',
    alignContent: 'center',
    textAlign:'center'
  }
});
export default PaymentSuccess;
