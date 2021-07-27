import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  modalContainer: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: '#fff'
  },
  modalHeader: {
    fontSize: 20,
    color: '#353535',
    fontWeight: '600',
    marginBottom: 15
  },
  inputContainers: {
    marginBottom: 15
  },
  modalInputs: {
    height: 50,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 6
  },
  multiLineInput: {
    height: 80,
    paddingVertical: 12,
  },
  submitContainer: {
    marginTop: 15
  },
  submitButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 46,
    padding: 12,
    backgroundColor: '#1657D7',
    borderRadius: 6
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white'
  }
})

export default styles;