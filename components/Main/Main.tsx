import { View, Text, TextInput, Button, StyleSheet, StatusBar, SafeAreaView, TouchableOpacity, Keyboard } from 'react-native'
import { useState } from 'react';
import React from 'react'

export default function Main() {
    const [altura, setAltura] = useState("");
    const [peso, setPeso] = useState("");
    const [resultadoIMC, setResultadoIMC] = useState(null);
    const [mensagem, setMensagem] = useState ("Preencha seu Peso e Altura:");

    
    
    function calcularIMC(){
        if (peso ==="" || altura ===""){
            setResultadoIMC(null);
            setMensagem("Preencha os campos");
            return;
        }

        const p = parseFloat(peso.replace(",", "."));
        const a = parseFloat(altura.replace(",", "."));

        if(isNaN(p) || isNaN(a) || a <=0 ){
            setResultadoIMC(null);
            setMensagem("Valores Inválidos, Use números positivos!");

        }
        const imc = p /(a*a);
        setResultadoIMC(imc.toFixed(2));

        let classificacao = "";
        if (imc <18.5){
            classificacao = "Abaixo do peso";

        }else if(imc >= 18.5 && imc <25){
            classificacao = "Peso Ideal";

        }else if (imc >=25 && imc <30){
            classificacao = "Acima do peso";

        }else {
            classificacao = "Obesidade";
        }
        setMensagem(`Seu IMC é: \n${imc.toFixed(2)} - ${classificacao}`);

        Keyboard.dismiss();
    }

    function novoCalculo(){
        setAltura("");
        setPeso("");
        setResultadoIMC(null);
        setMensagem("Preencha seu Peso e Altura:");
    }

    const buttonTitle = resultadoIMC !== null ? "Novo Calculo" : "Calcular";
    const buttonAction = resultadoIMC !== null ? novoCalculo : calcularIMC;
  
    return (
    <SafeAreaView style={styles.mainContainer}>;
        <View style={styles.formContext}>;
           
        <Text style = {styles.label}>Altura</Text>;
        <TextInput
          style={styles.input}
          onChangeText={setAltura}
          value={altura}
          placeholder='0'
          keyboardType='numeric'/>;

          <Text style={styles.label}>Peso</Text>
          <TextInput
          style={styles.input}
          onChangeText={setPeso}
          value={peso}
          placeholder='0'
          keyboardType='numeric'/>;

          <TouchableOpacity
          style={styles.buttonCalculator}
          onPress={buttonAction}>;
            <Text style={styles.textButtonCalculator}>{buttonTitle}</Text>;
          </TouchableOpacity>
 
        </View>

        <View style={styles.resultContainer}>
            <Text style={styles.messageText}>{mensagem}</Text>;
        </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      paddingTop: 10,
      alignItems: 'center',
    },
    formContext: {
      width: '90%',
      backgroundColor: '#fff',
      borderRadius: 20,
      padding: 15,
      marginBottom: 20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    label: {
      color: '#000',
      fontSize: 18,
      paddingTop: 10,
    },
    input: {
      width: '100%',
      borderRadius: 10,
      backgroundColor: '#f6f6f6',
      height: 40,
      marginVertical: 5,
      paddingHorizontal: 15,
      fontSize: 18,
    },
    buttonCalculator: {
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      backgroundColor: '#3a5effff', 
      paddingTop: 14,
      paddingBottom: 14,
      marginTop: 20,
    },
    textButtonCalculator: {
      fontSize: 20,
      color: '#fff',
      fontWeight: 'bold',
    },
    resultContainer: {
      alignItems: 'center',
      padding: 10,
    },
    messageText: {
      fontSize: 18,
      color: '#000',
      textAlign: 'center',
    },
  });
