import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import Typo from '@/components/Typo'
import { colors, spacingX, spacingY } from '@/constants/theme'
import { verticalScale } from '@/utils/styling'
import BackButton from '@/components/BackButton'
import Input from '@/components/Input'

const Login = () => {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <BackButton />

        <View style={{gap: 5, marginTop: spacingY._20}}>
          <Typo size={28} fontWeight={"700"}>
            Hey,
          </Typo>
          <Typo size={28} fontWeight={"700"}>
            Welcome Back
          </Typo>
        </View>

        {/* form */}
        <View style={styles.form}>
          <Typo size={16} color={colors.textLighter}>
            Login now to track all your expenses
          </Typo>

          {/* input */}
          <Input />
        </View>

      </View>
    </ScreenWrapper>
  )
}

export default Login

const styles = StyleSheet.create({
    container : {
        flex: 1,
        gap: spacingY._30,
        paddingHorizontal: spacingX._20
    },
    welcomeText : {
        fontSize: verticalScale(20),
        fontWeight: "bold",
        color: colors.text,
    },
    form : {
        gap: spacingY._20,
    },
    forgotPassword : {
        textAlign: "right",
        fontWeight: "500",
        color: colors.text,
    },
    footer : {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
    },
    footerText : {
        textAlign: "center",
        color: colors.text,
        fontSize: verticalScale(15),
    }
})