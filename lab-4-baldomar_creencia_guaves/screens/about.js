import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
} from "react-native";

export default function Profile({ navigation }) {
  return (
    <View>
      <ImageBackground
        style={styles.bck}
        source={require("../img/fy.jpg")}
      >
        <ScrollView>
          <Text style={styles.fontdet}>
            Luffy is the son of Monkey D. Dragon and was raised by his grandfather, Monkey D. Garp along with his adoptive brother Ace. When he was seven, Luffy befriended the pirate captain Red-Haired Shanks and his crew. During an argument between Shanks and a bandit, Luffy accidentally ate the Gomu Gomu no Mi (Gum Gum Fruit), a mystical Devil Fruit that turned his body into rubber, at the cost of taking away his ability to swim. After standing up to the bandit, Luffy is easily defeated and kidnapped, but Shanks came to save him, though his arm was bitten off by a sea monster when he went to save Luffy from drowning. When Shanks finally left the island Luffy lived on, Luffy made a promise to him that he'd surpass him and becoming king of the pirates by finding the legendary treasure, the One Piece. Ten years later, and Luffy has set off for the Grand Line to gather up a pirate crew and find the One Piece.
          </Text>
          <Button
            title="Back"
            onPress={() => {
              navigation.goBack();
            }}
          />
        </ScrollView>
      </ImageBackground>
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
  bck: {
    width: "100%",
    height: "100%",
  },
  fontdet: {
    fontStyle: "italic",
    color: "white",
    alignSelf: "center",
    textAlign: "center",
    fontSize: 25,
  },
});
