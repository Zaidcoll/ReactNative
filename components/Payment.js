import {
  View,
  Text,
  StyleSheet,
  Alert,
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Images from "./Images";
import Item from "./Item";
import DoingPayment from "./DoingPayment";

function Payment({ data, subtotal, onPressRestart }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [isDoingPayment, setIsDoingPayment] = useState(false);
  let current_chosen_payment = "";
  const available_payment = ["credit_card", "ez_link", "nets_qr", "nets"];
  function doingPayment(name) {
    console.log("zaid from Payment", name);
    current_chosen_payment = name;
    setIsDoingPayment(true);
  }
  return (
    <>
      {isDoingPayment ? (
        <DoingPayment
          name={current_chosen_payment}
          onPressRestart={onPressRestart}
        />
      ) : (
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>
                  Total : ${subtotal.toFixed(2)}
                </Text>
                <Text style={styles.modalText2}>Select Payment</Text>
                <View style={styles.paymentContainer}>
                  <Images
                    name={available_payment[0]}
                    doPayment={doingPayment}
                  />
                  <Images
                    name={available_payment[1]}
                    doPayment={doingPayment}
                  />
                  <Images
                    name={available_payment[2]}
                    doPayment={doingPayment}
                  />
                  <Images
                    name={available_payment[3]}
                    doPayment={doingPayment}
                  />
                </View>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>Back</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
          <View style={styles.cartContainer}>
            <View style={styles.cartTitleContainer}>
              <Text style={styles.modalText3}>
                Cart total: ${subtotal.toFixed(2)}
              </Text>
            </View>
            <View style={styles.wholeCartDisplayCart}>
              <SafeAreaView style={styles.cartDisplay}>
                <ScrollView>
                  <View style={styles.cartHeader}>
                    <Text style={[styles.cartTitle, { flex: 5 }]}>Name:</Text>
                    <Text style={[styles.cartTitle, { flex: 1 }]}>Qty:</Text>
                    <Text style={[styles.cartTitle, { flex: 2 }]}>Price:</Text>
                  </View>
                  <View style={styles.cartItemContainer}>
                    {data.map(function (item, index) {
                      return <Item data={item} key={index} />;
                    })}
                  </View>
                </ScrollView>
              </SafeAreaView>

              <View style={styles.cartButtonContainer}>
              <View style={styles.cartButton}>
                  <Pressable
                    style={[styles.button, styles.buttonOpen2]}
                    onPress={() => onPressRestart()}
                  >
                    <Text style={styles.textStyle}>Back</Text>
                  </Pressable>
                </View>
                <View style={styles.cartButton}>
                  <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => setModalVisible(true)}
                  >
                    <Text style={styles.textStyle}>
                      Pay ${subtotal.toFixed(2)}
                    </Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
        </View>
      )}
    </>
  );
}

export default Payment;

const styles = StyleSheet.create({
  paymentheader: {
    fontSize: 16,
    margin: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    width: 1200,
    height: 600,
    marginBottom: 50,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    width:150,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#2E4EFF",
  },
  buttonOpen2: {
    backgroundColor: "#FF462E",
  },
  buttonClose: {
    backgroundColor: "#FF462E",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    fontWeight: 'bold',
    fontSize: 40,
    marginBottom: 15,
    textAlign: "center",
  },
  modalText2: {
    marginBottom: 15,
    textAlign: "center",
  },
  modalText3: {
    fontWeight: 'bold',
    fontSize: 40,
    marginBottom: 15,
    textAlign: "center",
  },
  paymentContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    width: 500,
  },
  cartContainer: {
    flex: 1,
    width: 800,
    height: 800,
    elevation: 5,
  },
  cartButtonContainer: {
    flex: 2,
    flexDirection:'row',
    paddingHorizontal:220,
  },
  cartButton: {
    marginVertical: 20,
    marginHorizontal:20,
    width: 150,
  },
  cartHeader: {
    flex: 1,
    width: 800,
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 30,
  },
  cartItemContainer: {
    flex: 5,
    width: 200,
  },
  cartTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  wholeCartDisplayCart: {
    height:1200,
    
  },
  cartDisplay: {
    padding: 20,
    flex: 1,
    width: 800,
    height: 800,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 2,
  },
  cartInnerContainer: {
    flex: 1,
  },
  cartTitleContainer:{
    marginTop: 20
  }
});
