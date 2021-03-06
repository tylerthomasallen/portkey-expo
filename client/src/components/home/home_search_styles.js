import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    marginTop: 5,
    marginBottom: 10
  },

  upperContainer: {
    margin: 10,
    marginBottom: 5
  },

  greeting: {
    fontSize: 16, 
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },

  inputContainer: {
    borderColor: '#BDBDBD',
    borderWidth: .5,
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    marginBottom: 0
  },

  searchButton: {
    margin: 5,
    fontSize: 28,
    color: '#99BADD'
  },

  input: {
    shadowOpacity: 0,
    shadowColor: 'white',
    margin: 5,
    fontSize: 20
  },

  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingLeft: 15,
    paddingTop: 10,
    paddingBottom: 10
  },

  starContainer: {
    backgroundColor: '#ff00bf',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10
  },

  star: {
    color: 'white',
    fontSize: 24
  },

  address: {
    flexDirection: 'column'
  },

  addressTitle: {
    fontWeight: '500'
  },

  streetAddress: {
    color: '#BDBDBD'
  } 
});

export default styles;