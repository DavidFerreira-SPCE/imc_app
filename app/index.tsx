import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.principal}
    >
      <View style={styles.t}>
        <TouchableOpacity>
          <Text style={styles.button}>Resetar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.caixaTitulo}>
        <Text style={styles.t}>Calculadora IMC</Text>
      </View>

      <View> 
        <TextInput keyboardType="numeric" style={styles.TextPut} placeholder="Peso (Kg) example: 50.25"></TextInput>
        <TextInput keyboardType="numeric" style={styles.TextPut} placeholder="Altura (cm) example: 1.45"></TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  principal: //Container BASE
  {
    flex: 1,
    backgroundColor: '#353535'
  },

  t: { //Onde mover o Botão RESETAR
    marginTop: 36,
    marginRight: 20,
    marginLeft: -30,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    color: 'white',
    fontWeight: 600,
    fontSize: 28
  },

  caixaTitulo: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '80%',
    paddingTop: 100,
    paddingInline: 20,
    marginTop: 40,
    marginLeft: 36
  },

  button: { //Botão de Resetar
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    paddingTop: 10,
    height: 40,
    width: 75,
    borderRadius: 40,
    backgroundColor: '#9EEFC3'
  },

  TextPut :{
   backgroundColor: 'white',
   width: '80%',
   height: 70,
   margin: 20,
   marginLeft: 36,
   borderRadius: 10
  },
});