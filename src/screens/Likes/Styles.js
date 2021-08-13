import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    justifyContent: 'center'
  },
  container: {
    padding: 15,
  },
  text: {
    fontSize: 24,
    fontWeight: '700',
    marginTop: 20,
    marginBottom: 10
  },
  secondText: {
    fontSize: 18
  },
  actions: {
    marginTop: 20
  },
  logInButton: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // height: '100px',
    padding: 14,
    backgroundColor: 'white',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#1657D7'
  },
  signUpButton: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 14,
    backgroundColor: '#1657D7',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#1657D7'
  },
  loginText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1657D7'
  },
  signUpText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white'
  }
})

export default styles;
