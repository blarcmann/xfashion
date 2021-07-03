import React from 'react'
import * as Yup from 'yup';
import { Button, Container, Text, TextField, Checkbox } from '../../../components';
import { Formik } from 'formik';
import SocialLogin from '../../../components/SocialLogin';
import { Box } from '../../../components/Theme';


const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(7, 'Too Short!')
    .max(25, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
});

const Login = () => {
  const footer = (
    <>
      <SocialLogin />
      <Box alignItems="center">
        <Button variant="transparent" onPress={() => alert('ff')}>
          <Box flexDirection="row" justifyContent="center">
            <Text variant="body" color="white" style={{ textAlign: 'center' }}>Don't have an account?</Text>
            <Text
              variant="body"
              color="green"
              marginLeft="s"
              style={{ textAlign: 'center' }}>
              Sign up here
            </Text>
          </Box>
        </Button>
      </Box>
    </>
  );

  return (
    <Container footer={footer}>
      <Box margin="l">
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
        <Formik
          initialValues={{
            email: '',
            password: '',
            remember: false,
          }}
          validationSchema={LoginSchema}
          onSubmit={values => console.log(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, setFieldValue, errors, touched, values }) => (
            <Box>
              <Box marginBottom="m">
                <TextField
                  icon="mail"
                  placeholder="Enter your email"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  error={errors.email ? errors.email : ''}
                  touched={touched.email}
                />
              </Box>
              <Box marginBottom="m">
                <TextField
                  icon="lock"
                  placeholder="Enter your password"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  error={errors.password ? errors.password : ''}
                  touched={touched.password}
                />
              </Box>
              <Box
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Checkbox
                  label="Remember me"
                  value={values.remember}
                  onChange={(val: boolean) => setFieldValue('remember', val)}
                />
                <Button variant="transparent" onPress={() => alert('olodo!')}>
                  <Text color="green">Forgot password</Text>
                </Button>
              </Box>
              <Box alignItems="center" marginTop="m">
                <Button
                  variant="primary"
                  label="Log into your account"
                  onPress={handleSubmit} />
              </Box>
            </Box>
          )}
        </Formik>
      </Box>
    </Container>
  )
}

export default Login

// const Styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   }
// })
