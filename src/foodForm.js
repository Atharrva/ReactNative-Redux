import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {addFood} from './actions/food';

const FoodForm = ({navigation}) => {
  const [food, setFood] = useState('');

  const dispatch = useDispatch();

  const submitFood = (food) => dispatch(addFood(food));

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('./assets/logo.png')} />
      <Text style={styles.title}>Enter Food Item:</Text>
      <TextInput
        value={food}
        placeholder="Name"
        style={styles.foodInput}
        onChangeText={(food) => setFood(food)}
      />
      <TouchableOpacity
        style={{marginBottom: 16}}
        onPress={() => {
          submitFood(food);
          setFood('');
        }}>
        <Text
          style={{
            fontSize: 22,
            color: '#105575',
            backgroundColor: 'white',
            borderRadius: 4,
          }}>
          {' '}
          Submit{' '}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{marginBottom: 16}}
        onPress={() => navigation.navigate('FoodList')}>
        <Text
          style={{
            fontSize: 22,
            color: '#db00b3',
            backgroundColor: 'pink',
            borderRadius: 10,
            borderColor: 'black',
          }}>
          {' '}
          Food Items{' '}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#43b9f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 39,
    marginBottom: 30,
    marginTop: 16,
    color: 'black',
  },
  foodInput: {
    fontSize: 24,
    marginBottom: 32,
    borderWidth: 1,
    padding: 12,
    width: '80%',
    borderRadius: 10,
    backgroundColor: '#ababb0',
  },
  image: {
    width: 120,
    height: 120,
    borderColor: 'blue',
    borderWidth: 2,
    borderRadius: 100,
  },
});

export default FoodForm;
