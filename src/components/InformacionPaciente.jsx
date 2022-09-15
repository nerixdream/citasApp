import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Pressable,
  View,
  StatusBar,
} from 'react-native';

// Helper
import {formatearFecha} from './helpers';

export const InformacionPaciente = ({
  paciente,
  setPaciente,
  setModalPaciente,
}) => {
  return (
    <SafeAreaView style={styles.contenedor}>
      <Text style={styles.titulo}>
        Información
        <Text style={styles.tituloBold}> Paciente</Text>
      </Text>

      <View>
        <Pressable
          style={styles.btnCerrar}
          onPress={() => {
            setModalPaciente(false);
            setPaciente({});
          }}>
          <Text style={styles.btnCerrarTexto}>X Cerrar</Text>
        </Pressable>
      </View>

      <View style={styles.contenido}>
        <View style={styles.campo}>
          <Text style={styles.label}>Nombre:</Text>
          <Text style={styles.valor}>{paciente.paciente}</Text>
        </View>
        <View style={styles.campo}>
          <Text style={styles.label}>Propietario:</Text>
          <Text style={styles.valor}>{paciente.propietario}</Text>
        </View>
        <View style={styles.campo}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.valor}>{paciente.email}</Text>
        </View>
        <View style={styles.campo}>
          <Text style={styles.label}>Telefono:</Text>
          <Text style={styles.valor}>{paciente.telefono}</Text>
        </View>
        <View style={styles.campo}>
          <Text style={styles.label}>Fecha Alta:</Text>
          <Text style={styles.valor}>{formatearFecha(paciente.fecha)}</Text>
        </View>
        <View style={styles.campo}>
          <Text style={styles.label}>Síntomas:</Text>
          <Text style={styles.valor}>{paciente.sintomas}</Text>
        </View>
      </View>

      <StatusBar backgroundColor={'#f59e0b'} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#f59e0b',
    flex: 1,
  },
  titulo: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 30,
    color: '#fff',
  },
  tituloBold: {
    fontWeight: '900',
  },
  btnCerrar: {
    marginVertical: 30,
    backgroundColor: '#e06900',
    marginHorizontal: 30,
    padding: 15,
    borderRadius: 10,
  },
  btnCerrarTexto: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  contenido: {
    backgroundColor: '#fff',
    marginHorizontal: 30,
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  campo: {
    marginBottom: 10,
  },
  label: {
    color: '#9ca3af',
    fontSize: 14,
    fontWeight: '600',
  },
  valor: {
    color: '#4b5563',
    fontSize: 18,
    fontWeight: '700',
  },
});
