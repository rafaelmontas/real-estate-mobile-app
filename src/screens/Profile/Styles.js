import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    justifyContent: 'center'
  },
  container: {
    height: '100%',
    padding: 15,
  },
  containerIn: {
    backgroundColor: '#f7f7f7'
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
  infoContainer: {
    backgroundColor: '#fff',
    marginTop: 15,
    padding: 10,
    borderRadius: 6
  },
  titleText: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 5
  },
  subText: {
    fontSize: 17,
    color: 'gray'
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
  },
  logOutButton: {
    alignItems: 'center',
    justifyContent: 'center',
    // height: '100px',
    padding: 14,
    backgroundColor: 'white',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#fff'
  },
  logOutText: {
    fontSize: 18,
    // fontWeight: '600',
    color: 'red'
  },
})

export default styles;
