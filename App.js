var React = require('react');
var Text = require('react-native').Text;
var View = require('react-native').View;
var Button = require('react-native').Button;
var AppRegistry = require('react-native').AppRegistry;
var Component = require('react-native').Component;
 
const geraNumerosAleatorios = () => {  
        var numero_aleatorio = Math.random();

        numero_aleatorio = Math.floor(numero_aleatorio * 10);
        alert(numero_aleatorio);
};

const App = () => {

    return  (
        <View>    
            <Text>Gerador de números Random  
            <View style={width: 50, height: 50, backgroundColor: 'powderblue'} />
            </Text>

                <Button
                    title="Gerar números random"
                    onPress = {geraNumerosAleatorios}
                 / >
        </View>
    );
    };


AppRegistry.registerComponent('ap1', () => App);
