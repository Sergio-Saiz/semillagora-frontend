// En PlantsTemplate.js

import React from 'react';
import { View, StyleSheet } from 'react-native';

const PlantsTemplate = ({ children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Aquí podrías agregar un encabezado común para todas las pantallas de plantas */}
      </View>
      <View style={styles.content}>
        {children}
      </View>
      <View style={styles.footer}>
        {/* Aquí podrías agregar un pie de página común para todas las pantallas de plantas */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    // Estilos para el encabezado común de la plantilla
    height: 100,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  content: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
    // Estilos para el contenido principal
  },
  footer: {
    // Estilos para el pie de página común de la plantilla
    height: 50,
    backgroundColor: 'lightgreen',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});

export default PlantsTemplate;
