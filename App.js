import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'; 
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Importar los componentes de las pantallas
import PlantsScreen from './src/screens/PlantsScreen';
import RevistaScreen from './src/screens/RevistaScreen';
import ConfiguracionScreen from './src/screens/ConfiguracionScreen';
import MisPlantasScreen from './src/screens/MisPlantasScreen';
import JardinesScreen from './src/screens/JardinesScreen';

// Crear el componente de menú
const MenuInferior = ({ navigation }) => {
  return (
    <View style={styles.menu}>
      <TouchableOpacity onPress={() => navigation.navigate('Plants')}>
        <Text style={styles.menuText}>Plants</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Revista')}>
        <Text style={styles.menuText}>Revista</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Configuracion')}>
        <Text style={styles.menuText}>Configuración</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('MisPlantas')}>
        <Text style={styles.menuText}>Mis Plantas</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Jardines')}>
        <Text style={styles.menuText}>Jardines</Text>
      </TouchableOpacity>
    </View>
  );
};

// Crear el componente de navegación
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// Componente para el menú deslizante
const DrawerContent = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start', marginTop: 50 }}>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate('Perfil')}
      >
        <Text style={styles.menuItemText}>Perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate('CambiarContraseña')}
      >
        <Text style={styles.menuItemText}>Cambiar Contraseña</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate('Notificaciones')}
      >
        <Text style={styles.menuItemText}>Notificaciones</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate('AcercaDe')}
      >
        <Text style={styles.menuItemText}>Acerca de</Text>
      </TouchableOpacity>
    </View>
  );
};


const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={({ navigation }) => <DrawerContent navigation={navigation} />}>
        <Drawer.Screen name="Semillagora" component={SemillagoraNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const SemillagoraNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <MenuInferior {...props} />}
    >
      <Tab.Screen 
        name="Plants" 
        component={PlantsScreen} 
        options={{ headerShown: false }} // Ocultar el título de la página
      />
      <Tab.Screen 
        name="Revista" 
        component={RevistaScreen} 
        options={{ headerShown: false }} // Ocultar el título de la página
      />
      <Tab.Screen 
        name="Configuracion" 
        component={ConfiguracionScreen} 
        options={{ headerShown: false }} // Ocultar el título de la página
      />
      <Tab.Screen 
        name="MisPlantas" 
        component={MisPlantasScreen} 
        options={{ headerShown: false }} // Ocultar el título de la página
      />
      <Tab.Screen 
        name="Jardines" 
        component={JardinesScreen} 
        options={{ headerShown: false }} // Ocultar el título de la página
      />
    </Tab.Navigator>
  );
};


const styles = StyleSheet.create({
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'green', // Fondo verde
    padding: 10,
  },
  menuText: {
    color: 'white', // Texto blanco
  },
  menuButton: {
    marginRight: 10,
  },
  menuButtonText: {
    color: 'white',
  },
  menuItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
  },
  menuItemText: {
    fontSize: 18,
  },
});

export default App;
