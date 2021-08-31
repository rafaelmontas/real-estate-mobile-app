import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 15
  },
  header: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 12
  },
  subDivision: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25
  },
  subHeader: {
    fontSize: 18,
    marginRight: 5
  },
  signupText: {
    fontSize: 18,
    color: '#1657D7',
    fontWeight: '500'
  },
  formContainer: {

  },
  formGroup: {
    marginBottom: 15
  },
  formInputs: {
    height: 50,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 6
  },
  submitButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    padding: 12,
    backgroundColor: '#1657D7',
    borderRadius: 6
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white'
  },
  forgotText: {
    marginTop: 10
  },
  forgotTextT: {
    color: '#1657D7',
    fontSize: 16,
    textAlign: 'center'
  },
  // Errors
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5
  },
  errorMsg: {
    color: 'red'
  },
  privacyPolicy: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5
  },
  privacyPolicyText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'gray'
  }
})

export default styles;
