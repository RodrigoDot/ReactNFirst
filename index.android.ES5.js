var React = require('react');
var Text = require('react-native').Text;
var AppRegistry = require('react-native').AppRegistry;

const App = function() {
  return (
    <Text>Hello Rodrigo</Text>
  );
};

AppRegistry.registerComponent('app1', function() {
  return App
});
