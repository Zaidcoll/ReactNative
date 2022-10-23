import { View, Text, StyleSheet } from "react-native";
function Condiments({ data }) {
  let keys = Object.keys(data);
  let condiment = data[keys];
  let total_price = condiment.itemPrice  * condiment.itemQty
  return (
    <View style={styles.container}>
      <Text style={[styles.itemText2, { flex: 5 }]}>{condiment.ref1} @ ${condiment.itemPrice} x {condiment.itemQty} </Text>
      <Text style={[styles.itemText, { flex: 1 }]}></Text>
      <Text style={[styles.itemText, { flex: 2 }]}>${total_price.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 800,
    marginVertical: 5,
  },
  itemText: {
    marginLeft:5,
    fontSize: 15,
    overflow: "hidden",
  },
  itemText2: {
    marginLeft:15,
    fontSize: 15,
    overflow: "hidden",
  },
});

export default Condiments;
