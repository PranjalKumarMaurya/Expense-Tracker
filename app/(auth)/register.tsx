import { Alert, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import Typo from '@/components/Typo'
import { colors, spacingX, spacingY } from '@/constants/theme'
import { verticalScale } from '@/utils/styling'
import BackButton from '@/components/BackButton'
import Input from '@/components/Input'
import * as Icons from 'phosphor-react-native'
import Button from '@/components/Button'
import { useRouter } from 'expo-router'

const Register = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const nameRef = useRef('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async () => {
    const missingFields = [];
  
    if (!nameRef.current) {
      missingFields.push("name");
    }
    if (!emailRef.current) {
      missingFields.push("email");
    } else if (!validateEmail(emailRef.current)) {
      // If email is provided but invalid, use a different message part
      missingFields.push("a valid email");
    }
    // Check the other fields
    if (!passwordRef.current) {
      missingFields.push("password");
    }
    
    // If there are any errors, build a single alert message
    if (missingFields.length > 0) {
      let message = "Please enter ";
      if (missingFields.length === 1) {
        message += missingFields[0];
      } else if (missingFields.length === 2) {
        message += `${missingFields[0]} and ${missingFields[1]}`;
      } else {
        // For three or more missing fields, join them with commas and an 'and'
        const lastField = missingFields.pop();
        message += `${missingFields.join(", ")}, and ${lastField}`;
      }
      Alert.alert("Sign Up", message);
    } else {
      // Proceed with the sign up logic if all fields are valid
    }

    console.log("Name, Email and password", emailRef, passwordRef, nameRef);
  }

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <BackButton />

        <View style={{gap: 5, marginTop: spacingY._20}}>
          <Typo size={28} fontWeight={"700"}>
            Let's,
          </Typo>
          <Typo size={28} fontWeight={"700"}>
            Get Started
          </Typo>
        </View>

        {/* form */}
        <View style={styles.form}>
          <Typo size={16} color={colors.textLighter}>
            Register now to track all your expenses
          </Typo>

          {/* input */}
          <Input
            placeholder='Enter you name'
            onChangeText={(value) => (nameRef.current = value)}
            icon={<Icons.User size={verticalScale(26)} color={colors.neutral300} />}
          />
          <Input
            placeholder='Enter you email'
            onChangeText={(value) => (emailRef.current = value)}
            icon={<Icons.At size={verticalScale(26)} color={colors.neutral300} />}
          />
          <Input
            placeholder='Enter you password'
            secureTextEntry
            onChangeText={(value) => (passwordRef.current = value)}
            icon={<Icons.Lock size={verticalScale(26)} color={colors.neutral300} />}
          />

          <Button loading={isLoading} onPress={handleSubmit}>
            <Typo color={colors.black} fontWeight={'700'} size={21}>
              Register
            </Typo>
          </Button>

        </View>

        {/* footer */}
        <View style={styles.footer}>
          <Typo size={15}>Already have an account?</Typo>
          <Pressable onPress={() => router.navigate('/(auth)/login')}>
            <Typo size={15} fontWeight={'600'} color={colors.primary}>Login</Typo>
          </Pressable>
        </View>

      </View>
    </ScreenWrapper>
  )
}

export default Register

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