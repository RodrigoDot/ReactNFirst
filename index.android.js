var React = require('react');
var Text = require('react-native').Text;
var View = require('react-native').View;
var Button = require('react-native').Button;
var AppRegistry = require('react-native').AppRegistry;

const App = () => {
  return (
    <View>
      <Text>Hello Rodrigo</Text>
      <Button
        title='Gerar numero randomico'
      />
    </View>
  );
};

AppRegistry.registerComponent('app1', () => App);
