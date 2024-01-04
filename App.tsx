import { StatusBar } from "expo-status-bar";
import { useState, type PropsWithChildren } from "react";
import {
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import DiceOne from "../assets/one.png";
import DiceTwo from "../assets/two.png";
import DiceThree from "../assets/three.png";
import DiceFour from "../assets/four.png";
import DiceFive from "../assets/five.png";
import DiceSix from "../assets/six.png";

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>;

const Dice = ({ imageUrl }: DiceProps) => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  );
};

export default function App() {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne);

  const rollDiceOnTap = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;

    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne);
        break;
      case 2:
        setDiceImage(DiceTwo);
        break;
      case 3:
        setDiceImage(DiceThree);
        break;
      case 4:
        setDiceImage(DiceFour);
        break;
      case 5:
        setDiceImage(DiceFive);
        break;
      case 6:
        setDiceImage(DiceSix);
        break;
      default:
        setDiceImage(DiceOne);
        break;
    }
  };

  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage} />
      <Pressable onPress={rollDiceOnTap}>
        <Text style={styles.rollDiceBtn}>Roll the dice</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  diceImage: {},
  rollDiceBtn: {},
});
