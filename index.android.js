import React from 'react';
import {
  Text,
  View,
  Button,
  AppRegistry
} from 'react-native';

const geraNumeroAleatorio = () => {
  var numeroAleatorio = Math.random();
  numeroAleatorio = Math.floor(numeroAleatorio * 10);
  alert(numeroAleatorio);
}

const App = () => {
  return (
    <View>
      <Text>Gerador de numeros randomicos</Text>
      <Button
        title='Gerar numero randomico'
        onPress={geraNumeroAleatorio}
      />
    </View>
  );
};

AppRegistry.registerComponent('app1', () => App);
