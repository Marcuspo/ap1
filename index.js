import React from 'react';
import {Text, View, Button, AppRegistry} from 'react-native';
 
const geraNumerosAleatorios = () => {  
        var numero_aleatorio = Math.random();

        numero_aleatorio = Math.floor(numero_aleatorio * 100);
        alert(numero_aleatorio);
};

const App = () => {

    return  (
        <View>    
            <Text>Gerador de números Random</Text>
                <Button
                    title="Gerar números random"
                    onPress = {geraNumerosAleatorios}
                 / >
        </View>
    );
    };


AppRegistry.registerComponent('ap1', () => App);
