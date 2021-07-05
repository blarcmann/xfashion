import React, { useRef } from 'react'
import { TouchableWithoutFeedback, TextInput } from 'react-native';
import * as Yup from 'yup';
import { Button, Container, Text, TextField, Checkbox } from '../../components';
import { useFormik } from 'formik';
import Footer from './Footer';
import { Box } from '../../components/Theme';
import { Routes, StackNavigationProps } from '../../Navigation';


const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(7, 'Too Short!')
    .max(25, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
});

const Login = ({ navigation }: StackNavigationProps<Routes, 'Login'>) => {
  const { handleChange, handleBlur, handleSubmit, setFieldValue, errors, touched, values } = useFormik({
    initialValues: {
      email: '',
      password: '',
      remember: false,
    },
    validationSchema: LoginSchema,
    onSubmit: values => console.log(values),
  })

  const footer = (
    <Footer
      title="Don't have an account?"
      action="Sign up here"
      onPress={() => navigation.navigate('Signup')}
    />
  );

  const password = useRef<TextInput>(null);

  return (
    <Container pattern={2} {...{ footer }}>
      <Box padding="l">
        <Text
          variant="title"
          textAlign="center"
          marginBottom="m">
          Welcome back
        </Text>
        <Text
          variant="body"
          textAlign="center"
          marginBottom="l"
        >
          Use your credentials below and login to your account
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
              returnKeyLabel="done"
              returnKeyType="done"
              onSubmitEditing={() => handleSubmit()}
              autoCompleteType="password"
              secureTextEntry
            />
          </Box>
          <Box
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center">
            <Checkbox
              label="Remember me"
              value={values.remember}
              onChange={(val: boolean) => setFieldValue('remember', val)}
            />
            <TouchableWithoutFeedback onPress={() => navigation.navigate('ForgotPassword')}>
              <Text color="green">Forgot password</Text>
            </TouchableWithoutFeedback>
          </Box>
          <Box alignItems="center" marginTop="m">
            <Button
              variant="primary"
              label="Log into your account"
              onPress={handleSubmit} />
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default Login