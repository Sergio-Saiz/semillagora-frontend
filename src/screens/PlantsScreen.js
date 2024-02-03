import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
import axios from 'axios';

const PlantsScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://192.168.43.246:8003/api/blog/posts/');
        console.log(response.data); // Imprime todos los datos recibidos en la consola
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };
    

    fetchData();
  }, []);

  const renderCard = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => handleCardPress(item)}>
        <Card>
          <Text>{item.titulo}</Text>
          <Text>{item.contenido}</Text>
        </Card>
      </TouchableOpacity>
    );
  };
  

  const handleCardPress = (item) => {
    // Aquí puedes manejar la lógica cuando se presiona una tarjeta
    console.log('Card pressed:', item);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderCard}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PlantsScreen;
