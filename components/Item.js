import { View, Text, StyleSheet } from "react-native";
import Condiments from "./Condiments";

function Item(props) {
  let product = props.data;
  let condiments = product.ref.Condiments;
  let hasCond = false;
  if (Object.keys(condiments).length > 0) {
    hasCond = true;
  }
  return (
    <>
      <View style={styles.container}>
        <Text style={[styles.itemTextMain, { flex: 5 }]}>{product.name}</Text>
        <Text style={[styles.itemText, { flex: 1 ,marginLeft:25}]}>{product.qty}</Text>
        <Text style={[styles.itemText, { flex: 2 }]}>
          ${product.price.toFixed(2)}
        </Text>
      </View>
      {hasCond
        ? condiments.map(function (cond, index) {
            return <Condiments data={cond} key={index} />;
          })
        : null}
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 800,
    marginVertical: 5,
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
  itemText: {
    fontSize: 15,
    overflow: "hidden",
  },
  itemTextMain: {
    fontSize: 20,
    fontWeight: 'bold',
    overflow: "hidden",
  },
});
export default Item;
