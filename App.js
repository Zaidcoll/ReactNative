import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import { fetchQrCode } from "./utils/http";
import Payment from "./components/Payment";
import { StatusBar } from "expo-status-bar";


export default function App() {
  const prefix_val = "azmobileapp-";
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [verifiedScan, setVerifiedScan] = useState(false);
  const [text, setText] = useState("Scan your payment Qr Code");
  const [cartData, setCartData] = useState({});
  const [cartTotal, setCartTotal] = useState("");
  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status == "granted");
    })();
  };

  async function getFetchQrCode(value) {
    //for testing
    if (value === "test") value = "6c6d1355-c138-4298-9b2c-c70a2056378a";
    let get_data = await fetchQrCode(value);
    let data = get_data.data[0];
    let items = JSON.parse(data.items);
    let subtotal = data.itemSubtotal;
    setCartData(items);
    setCartTotal(subtotal);
    setVerifiedScan(true);
  }
  //Request Camera permission
  useEffect(() => {
    askForCameraPermission();
    // getFetchQrCode("test")
  }, []);

  //when barcode is scanned
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    if (data.indexOf(prefix_val) > -1) {
      setText("Please wait while wes get your cart information.");
      let ref1 = data.split(prefix_val)[1].split("|")[0];
      getFetchQrCode(ref1);
    } else {
      setText("Please enter a valid qr code");
      setTimeout(function () {
        setScanned(false);
      }, 200);
    }
  };

  function onPressRestart() {
    setScanned(false);
    setVerifiedScan(false);
    setText("Scan your payment Qr Code");
  }
  //check permissions and return the screens
  if (verifiedScan) {
    return (
      <Payment
      data={cartData}
      subtotal={cartTotal}
      onPressRestart={onPressRestart}
    />
    )
  }
  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting for camera permission</Text>
      </View>
    );
  }
  return (
<View style={styles.container}>
        <View style={styles.barcodebox}>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={{ height: 400, width: 400 }}
          />
        </View>
        <Text style={styles.maintext2}>{text}</Text>
        {scanned}
        <View>
          <StatusBar backgroundColor={"transparent"} translucent />
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#615b5a",
    alignItems: "center",
    justifyContent: "center",
  },
  barcodebox: {
    alignItems: "center",
    justifyContent: "center",
    height: 300,
    width: 300,
    overflow: "hidden",
    borderRadius: 30,
  },
  maintext: {
    fontSize: 16,
    margin: 20,
  },
  maintext2: {
    color: "white",
    fontSize: 20,
    margin: 20,
    fontWeight: 'bold'
  },
});
