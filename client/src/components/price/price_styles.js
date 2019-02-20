import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
    display: 'flex',
    marginRight: 15,
    marginLeft: 15
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  subtitle: {
    paddingTop: 5,
    paddingBottom: 5,
    textAlign: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 1
  },

  lyftCar: {
    color: '#ff00bf',
    fontSize: 60
  },

  uberCar: {
    color: 'black',
    fontSize: 60
  },

  priceContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 5,
    borderColor: 'black',
    borderRadius: 20,
    borderWidth: 1,
    marginBottom: 10
  },

  lyftPriceContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 5,
    borderRadius: 20,
    borderWidth: 1,
    marginBottom: 10,
    borderColor: '#ff00bf'
  },

  personContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  person: {
    fontSize: 15,
    marginRight: 3
  },

  leftSide: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },

  carTypeTitleContainer: {
    marginLeft: 10
  },

  carTypeTitle: {
    fontWeight: 'bold',
    fontSize: 24
  },

  carTypeTitleLyft: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#ff00bf'
  },

  price: {
    fontWeight: 'bold',
    fontSize: 24
  },

  lyftPrice: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#ff00bf' 
  },

  eta: {
    color: '#352384'
  }
})

export default styles;