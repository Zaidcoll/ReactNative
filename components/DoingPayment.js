import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useState } from "react";

function DoingPayment({ name, onPressRestart }) {
  const [paymentFinished, setPaymentFinished] = useState(false);
  console.log('zaid from doingPayment',name)
  let url_link = require(`../assets/payment/gif/nets.gif`);
  console.log(url_link)

  setTimeout(function () {
    setPaymentFinished(true)
  }, 3000);
  function doAutoRestart(){
    setTimeout(function(){
      onPressRestart()
    },5000)
  }
  if (paymentFinished) {
    {doAutoRestart()}
    return (
      <View style={styles.container2}>
        <Text style={styles.title}>Your Payment is Successful</Text>
        <Pressable style={[styles.button,styles.btn2]} onPress={onPressRestart}>
          <Text style={styles.btn_text}>Restart</Text>
        </Pressable>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Please Follow the instruction</Text>
      </View>
      <View>
        <Image style={styles.paymentimage2} source={url_link} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
  container2: {
    padding: 12,
    marginLeft: 270,
    marginTop: 200,
    height: 250,
    width: 800,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 2,
    marginVertical: 20,
  },
  title:{
    fontWeight: 'bold',
    fontSize: 40,
    marginBottom: 15,
    textAlign: "center",
  },
  paymentimage: {
    width: 170,
    height: 85,
  },
  paymentimage2: {
    width: 500,
    height: 500,
    marginLeft: 140,
  },
  containerGif: {
    paddingTop: 20,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: "#2196F3",
    width:130,
  },
  btn2:{
    marginTop: 50,
    marginLeft: 320,
  },
  btn_text:{
    textAlign:'center',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  successContainer:{
    textAlign:'center',
    flex:1,
    padding:20
  },
  successHeader:{
    fontSize:30
  }
});
export default DoingPayment;
