import React, { useRef } from 'react'
import { TextInput } from 'react-native';
import * as Yup from 'yup';
import { Button, Container, Text, TextField } from '../../components';
import { useFormik } from 'formik';
import Footer from './Footer';
import { Box } from '../../components/Theme';
import { StackNavigationProps, Routes } from '../../Navigation';


const SignupSchema = Yup.object().shape({
  password: Yup.string()
    .min(7, 'Too Short!')
    .max(25, 'Too Long!')
    .required('Required'),
  confirmPassword: Yup.string()
    .equals([Yup.ref("password")], 'Passwords do not match')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  name: Yup.string()
    .required('Required'),
});

const Signup = ({ navigation }: StackNavigationProps<Routes, 'Signup'>) => {
  const { handleChange, handleBlur, handleSubmit, errors, touched } = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: SignupSchema,
    onSubmit: values => console.log(values),
  })

  const footer = (
    <Footer
      title="Already have an account?"
      action="Login here"
      onPress={() => navigation.navigate('Login')}
    />
  );

  const password = useRef<TextInput>(null); 
  const confirmPassword = useRef<TextInput>(null);
  return (
    <Container {...{ footer }}>
      <Box margin="l">
        <Text
          variant="title"
          textAlign="center"
          marginBottom="m">
          Create account
        </Text>
        <Text
          variant="body"
          textAlign="center"
          marginBottom="l"
        >
          We'd like to know your name, email, and your password
        </Text>
        <Box>
          <Box marginBottom="m">
            <TextField
              icon="mail"
              placeholder="Enter your email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              error={errors.email ? errors.email : ''}
              touched={touched.email}
              autoCompleteType="email"
              autoCapitalize="none"
              returnKeyLabel="next"
              returnKeyType="next"
              onSubmitEditing={() => password.current?.focus()}
            />
          </Box>
          <Box marginBottom="m">
            <TextField
              ref={password}
              icon="lock"
              placeholder="Enter your password"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              error={errors.password ? errors.password : ''}
              touched={touched.password}
              returnKeyLabel="confirm"
              returnKeyType="next"
              onSubmitEditing={() => confirmPassword.current?.focus()}
              autoCompleteType="password"
              secureTextEntry
            />
          </Box>
          <Box marginBottom="m">
            <TextField
              icon="lock"
              placeholder="Confirm your password"
              onChangeText={handleChange('confirmPassword')}
              onBlur={handleBlur('confirmPassword')}
              error={errors.confirmPassword ? errors.confirmPassword : ''}
              touched={touched.confirmPassword}
              returnKeyLabel="done"
              returnKeyType="done"
              onSubmitEditing={() => handleSubmit()}
              secureTextEntry
            />
          </Box>
          <Box alignItems="center" marginTop="m">
            <Button
              variant="primary"
              label="Create your account"
              onPress={handleSubmit} />
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default Signup