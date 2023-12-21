import React, { FC } from "react";
import { Image, ViewStyle, ImageStyle, StyleSheet, Dimensions, SafeAreaView, TextStyle, View } from "react-native";
import { observer } from "mobx-react-lite"
import LinearGradient from "react-native-linear-gradient";
import { colors, typography } from "../theme"
import { AppStackScreenProps } from "app/navigators";
import { Button, Text } from "app/components";
import { SvgXml } from 'react-native-svg';

const splashImage = require("../../assets/images/splash-image.png")

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const splashImageWidthRatio = 0.9

interface SplashScreenProps extends AppStackScreenProps<"Splash"> { }

const waveSvgXml1 = `
<svg width="390" height="349" viewBox="0 0 390 349" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0.12793L24.5061 26.0354C76.2725 80.7623 160.604 88.5934 221.563 44.3342L230.334 37.9659C280.781 1.3381 351.115 10.8657 390 59.5948V349H0V0.12793Z" fill="white" fill-opacity="0.3"/>
</svg>
`;

const waveSvgXml2 = `
<svg width="390" height="331" viewBox="0 0 390 331" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 16.2074C32.2894 47.9978 81.6961 54.6381 121.233 32.5012L144.98 19.2054C181.507 -1.24593 225.121 -4.8046 264.48 9.45485L390 54.9299V331H0L0 16.2074Z" fill="white" fill-opacity="0.3"/>
</svg>
`

export const Splash: FC<SplashScreenProps> = observer(function SplashScreen() {
    return (
        <LinearGradient
            style={$style.linearGradient}
            locations={[0, 1]}
            colors={[colors.palette.accent500, colors.palette.neutral100]}
            useAngle={true}
            angle={180}
        >
            <SafeAreaView>
                <View style={$content}>
                    <SvgXml xml={waveSvgXml1} width="390" height="349px" style={$style.wave} />
                    <SvgXml xml={waveSvgXml2} width="390" height="349px" style={$style.wave} />
                    <View style={$upper}>
                        <Image source={splashImage} style={$image} />
                    </View>
                    <View style={$lower}>
                        <View style={$main}>
                            <Button style={$style.welcomeButton} tx="splashScreen.welcome" />
                            <Text style={$title} tx="splashScreen.title" />
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </LinearGradient>
    );
});

const $style = StyleSheet.create({
    linearGradient: {
        height: windowHeight,
        width: windowWidth,
    },
    wave: {
        bottom: 0,
        position: "absolute",
        transform: [
            {
                scale: 1.05,
            },
            {
                scale: 1.05,
            }
        ]
    },
    welcomeButton: {
        backgroundColor: colors.primaryButton,
        borderWidth: 0,
        fontSize: 14,
        lineHeight: 18,
        width: 140,
    },
})

const $content: ViewStyle = {
    alignItems: "center",
    height: "100%",
    width: "100%",
}

const $upper: ViewStyle = {
    flexBasis: 2,
    flexGrow: 2,
    justifyContent: "center",
}

const $image: ImageStyle = {
    maxHeight: windowWidth * splashImageWidthRatio,
    maxWidth: windowWidth * splashImageWidthRatio,
}

const $lower: ViewStyle = {
    flexBasis: 1,
    flexGrow: 1,
    justifyContent: "center",
}

const $main: ViewStyle = {
    alignItems: "center",
    justifyContent: "space-between",
    flexGrow: 1,
    paddingTop: "10%",
    paddingBottom: "30%",
}

const $title: TextStyle = {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 18,
    lineHeight: 36,
    fontFamily: typography.fonts.inter.normal,
}