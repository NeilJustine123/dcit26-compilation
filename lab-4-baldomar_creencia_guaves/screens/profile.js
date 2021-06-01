import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
} from "react-native";

export default function Profile({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../img/luffy.png")}
        style={styles.bck}
      >
        <Image style={styles.prf} source={require("../img/ffy.gif")} />
        <View style={styles.details}>
          <Text style={styles.fontdet}>
            SERIES ONE PIECE {"\n"}
            Monkey D. Luffy{"\n"}
            Age	19 (17 pre-timeskip){"\n"}
            Birthday	May 5 (Zodiac sign is Taurus){"\n"}
            Sex	Male{"\n"}
            Height	5'7¾" (172 cm) (pre-timeskip){"\n"}
            5'8½" (174 cm) (post-timeskip){"\n"}
            Weight	141.1 lb. (64 kg){"\n"}
          </Text>
        </View>
        <View style={styles.btncon}>
          <Button
            title="About"
            onPress={() => {
              navigation.navigate("About");
            }}
          />
        </View>
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
  btncon: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  prf: {
    marginTop: "5%",
    alignSelf: "center",
    width: "50%",
    height: "24%",
  },
  details: {
    marginTop: "10%",
    marginLeft: "10%",
    marginRight: "10%",
    justifyContent: "center",
    borderColor: "black",
    borderWidth: 15,
    backgroundColor: "orange",
    borderTopEndRadius: 30,
    borderBottomStartRadius: 25,
  },
  fontdet: {
    fontStyle: "bold",
    color: "black",
    alignSelf: "center",
    textAlign: "left",
    fontSize: 21,
  },
});
