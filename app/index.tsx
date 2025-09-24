import { useState } from "react";
import { Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";

export default function Index() {
  const [peso, setPeso] = useState<string>("");
  const [altura, setAltura] = useState<string>("");
  const [valor, setValor] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // Novo estado para a mensagem de erro

  const handleReset = () => {
     
    setPeso("");
    setAltura("");
    setValor("");
    setErrorMessage(""); // Reseta a mensagem de erro também
  };

  const handleCalculate = () => {
    setErrorMessage(""); // Limpa a mensagem de erro antes de calcular

    const pesoNum = parseFloat(peso.replace(',', '.'));
    const alturaNum = parseFloat(altura.replace(',', '.'));

    // Validação aprimorada
    if (isNaN(pesoNum) || isNaN(alturaNum) || pesoNum <= 0 || alturaNum <= 0) {
      setErrorMessage("Por favor, digite números válidos.");
      setValor("");
      return;
    }

    // Calcula a altura em metros
    const alturaEmMetros = alturaNum / 100; // Ajuste para o placeholder de cm
    const imc = pesoNum / (alturaEmMetros * alturaEmMetros);

    if (imc < 18.50) {
      setValor(`Você está abaixo do peso (IMC: ${imc.toFixed(2)})`);
    } else if (imc >= 18.50 && imc <= 24.9) {
      setValor(`Você está com peso normal (IMC: ${imc.toFixed(2)})`);
    } else if (imc >= 25 && imc <= 29.9) {
      setValor(`Você está com sobrepeso (IMC: ${imc.toFixed(2)})`);
    } else {
      setValor(`Você está Obeso (IMC: ${imc.toFixed(2)})`);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.principal}>
        <View style={styles.t}>
          <TouchableOpacity onPress={handleReset}>
            <Text style={styles.button}>Resetar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.caixaTitulo}>
          <Text style={styles.Text}>Calculadora IMC</Text>
          <TextInput
            style={styles.TextPut}
            keyboardType="numeric"
            placeholder="Peso (Kg) ex: 50.25"
            placeholderTextColor="white"
            value={peso}
            onChangeText={(text) => setPeso(text)}
          />
          <TextInput
            style={styles.TextPut}
            keyboardType="numeric"
            placeholder="Altura (cm) ex: 170" // Mudei o exemplo para evitar confusão
            placeholderTextColor="white"
            value={altura}
            onChangeText={text => setAltura(text)}
          />
        </View>
        <View style={styles.caixaCalcular}>
          <TouchableOpacity onPress={handleCalculate}>
            <Text style={styles.calcularTexto}>Calcular</Text>
          </TouchableOpacity>
          <Text style={styles.resultado}>
            {errorMessage || valor || "Informe os valores!"}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  principal: {
    flex: 1,
    backgroundColor: '#353535',
    justifyContent: 'center',
    alignItems: 'center',
  },
  t: {
    position: 'absolute',
    top: 20,
    right: 20
  },
  Text: {
    color: 'white',
    fontSize: 20,
  },
  caixaTitulo: {
    gap: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
  },
  resetBotaoContainer: {
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    paddingTop: 10,
    height: 40,
    width: 75,
    borderRadius: 40,
    backgroundColor: '#9EEFC3',

  },
  TextPut: {
    textAlign: 'center',
    width: '150%',
    color: "white",
    fontSize: 20,
    fontWeight: 400,
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderBottomColor: "#9EEFC3",
  },
  caixaCalcular: {
    justifyContent: 'center',
    marginTop: 30
  },
  calcularTexto: {
    textAlign: 'center',
    color: 'white',
    marginBottom: 10,
  },
  resultado: {
    textAlign: 'center',
    color: "#9EEFC3",
    fontSize: 18,
    fontWeight: 500,
  }
});