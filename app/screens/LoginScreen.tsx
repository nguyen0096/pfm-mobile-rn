import { Button, Icon, Screen, Text, TextField, TextFieldAccessoryProps } from "../components"
import { AppStackScreenProps } from "app/navigators";
import { observer } from "mobx-react-lite";
import React, { ComponentType, FC, useMemo, useRef, useState } from "react";
import { colors, spacing } from "../theme"
import { TextInput } from "react-native-gesture-handler";
import { TextStyle, ViewStyle } from "react-native";
import { useStores } from "app/models";
import auth from '@react-native-firebase/auth';

interface LoginScreenProps extends AppStackScreenProps<"Login"> { }

export const LoginScreen: FC<LoginScreenProps> = observer(function LoginScreen(_props) {
    const authPasswordInput = useRef<TextInput>(null)

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isAuthPasswordHidden, setIsAuthPasswordHidden] = useState(true)
    const [error] = useState();
    const {
        userStore: { login: setAuthToken },
    } = useStores();

    function login() {
        auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                return auth().currentUser?.getIdToken()
            })
            .then(token => {
                if (token !== undefined) {
                    setAuthToken(token)
                } else {
                    throw new Error("unexpected token: " + token)
                }
            })
            .catch(e => {
                console.log("failed to do the login. error: " + e)
                console.log("error type: " + e)
            })
    }

    const PasswordRightAccessory: ComponentType<TextFieldAccessoryProps> = useMemo(
        () =>
            function PasswordRightAccessory(props: TextFieldAccessoryProps) {
                return (
                    <Icon
                        icon={isAuthPasswordHidden ? "view" : "hidden"}
                        color={colors.palette.neutral800}
                        containerStyle={props.style}
                        size={20}
                        onPress={() => setIsAuthPasswordHidden(!isAuthPasswordHidden)}
                    />
                )
            },
        [isAuthPasswordHidden],
    )

    return (
        <Screen
            preset="auto"
            contentContainerStyle={$screenContentContainer}
            safeAreaEdges={["top", "bottom"]}
        >
            <Text testID="login-heading" tx="loginScreen.signIn" preset="heading" style={$signIn} />
            <TextField
                value={email}
                onChangeText={v => setEmail(v)}
                containerStyle={$textField}
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect={false}
                keyboardType="email-address"
                labelTx="loginScreen.emailFieldLabel"
                placeholderTx="loginScreen.emailFieldPlaceholder"
                helper={error}
                status={error ? "error" : undefined}
                onSubmitEditing={() => authPasswordInput.current?.focus()}
            />

            <TextField
                ref={authPasswordInput}
                value={password}
                onChangeText={v => setPassword(v)}
                containerStyle={$textField}
                autoCapitalize="none"
                autoComplete="password"
                autoCorrect={false}
                secureTextEntry={isAuthPasswordHidden}
                labelTx="loginScreen.passwordFieldLabel"
                placeholderTx="loginScreen.passwordFieldPlaceholder"
                onSubmitEditing={login}
                RightAccessory={PasswordRightAccessory}
            />

            <Button
                testID="login-button"
                tx="loginScreen.tapToSignIn"
                style={$tapButton}
                preset="reversed"
                onPress={login}
            />
        </Screen>
    )
})

const $screenContentContainer: ViewStyle = {
    paddingVertical: spacing.xxl,
    paddingHorizontal: spacing.lg,
}

const $signIn: TextStyle = {
    marginBottom: spacing.sm,
}

const $textField: ViewStyle = {
    marginBottom: spacing.lg,
}

const $tapButton: ViewStyle = {
    marginTop: spacing.xs,
}