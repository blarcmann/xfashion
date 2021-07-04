import React  from 'react'
import * as Yup from 'yup';
import { Button, Container, Text, TextField } from '../../components';
import { useFormik } from 'formik';
import Footer from './Footer';
import { Box } from '../../components/Theme';
import { StackNavigationProps, Routes } from '../../Navigation';


const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
});

const ForgotPassword = ({ navigation }: StackNavigationProps<Routes, 'ForgotPassword'>) => {
  const { handleChange, handleBlur, handleSubmit, errors, touched } = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: ForgotPasswordSchema,
    onSubmit: values => console.log(values),
  })

  const footer = (
    <Footer
      title="Don't have an account?"
      action="Sign up here"
      onPress={() => navigation.navigate('Signup')}
    />
  );

  return (
    <Container {...{ footer }}>
      <Box padding="l" justifyContent="center" flex={1}>
        <Text
          variant="title"
          textAlign="center"
          marginBottom="m">
            Forgot Password
        </Text>
        <Text
          variant="body"
          textAlign="center"
          marginBottom="l"
        >
          Enter the email associated with your account
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
              returnKeyLabel="done"
              returnKeyType="done"
              onSubmitEditing={() => handleSubmit()}
            />
          </Box>
          <Box alignItems="center" marginTop="m">
            <Button
              variant="primary"
              label="Reset password"
              onPress={handleSubmit} />
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default ForgotPassword
