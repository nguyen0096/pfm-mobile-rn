import React, { FC } from "react";
import { Image, ViewStyle, ImageStyle, StyleSheet, Dimensions, SafeAreaView, TextStyle } from "react-native";
import { observer } from "mobx-react-lite"
import LinearGradient from "react-native-linear-gradient";
import { colors } from "../theme"
import { AppStackScreenProps } from "app/navigators";
import { Button, Text } from "app/components";

const splashImage = require("../../assets/images/splash-image.png")

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const splashImageWidthRatio = 0.9

interface SplashScreenProps extends AppStackScreenProps<"Splash"> { }

export const Splash: FC<SplashScreenProps> = observer(function SplashScreen() {
    return (
        <LinearGradient
            style={$style.linearGradient}
            locations={[0, 1]}
            colors={[colors.palette.accent500, colors.palette.neutral100]}
            useAngle={true}
            angle={180}
        >
            <SafeAreaView
                style={$screen}
            >
                <Image
                    style={$splashImage}
                    source={splashImage}
                />
                <Button style={$style.welcomeButton} tx="splashScreen.welcome" />
                <Text style={$title} tx="splashScreen.title" />
            </SafeAreaView>
        </LinearGradient>
    );
});

const $style = StyleSheet.create({
    linearGradient: {
        height: windowHeight,
        width: windowWidth,
    },
    welcomeButton: {
        backgroundColor: colors.primaryButton,
        width: 140,
    }
})

const $screen: ViewStyle = {
    alignItems: "center",
}

const $splashImage: ImageStyle = {
    width: windowWidth * splashImageWidthRatio,
    height: windowWidth * splashImageWidthRatio,
}

const $title: TextStyle = {

}