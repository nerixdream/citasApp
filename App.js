import React, {useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  Pressable,
  FlatList,
  Alert,
  Modal,
  StatusBar,
} from 'react-native';

// Componentes
import {Formulario} from './src/components/Formulario';
import {InformacionPaciente} from './src/components/InformacionPaciente';
import {Paciente} from './src/components/Paciente';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalPaciente, setModalPaciente] = useState(false);
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  // Edita una cita
  const pacienteEditar = id => {
    const pacienteEditar = pacientes.filter(paciente => paciente.id === id);
    setPaciente(pacienteEditar[0]);
  };

  // Elimina una cita
  const eliminarCita = id => {
    Alert.alert(
      '¿Deseas eliminar este paciente?',
      'Un paciente eliminado no se puede recuperar',
      [
        {text: 'Cancelar'},
        {
          text: 'Si, eliminar',
          onPress: () => {
            const citasActualizadas = pacientes.filter(
              paciente => paciente.id !== id,
            );
            setPacientes(citasActualizadas);
          },
        },
      ],
    );
  };

  return (
    <SafeAreaView style={styles.contenedor}>
      <Text style={styles.titulo}>
        Administrador de Citas{' '}
        <Text style={styles.tituloBold}>Veterinaria</Text>
      </Text>

      <Pressable
        onPress={() => setModalVisible(true)}
        style={styles.btnNuevaCita}>
        <Text style={styles.btnTextoNuevaCita}>Nueva Cita</Text>
      </Pressable>

      {pacientes.length === 0 ? (
        <Text style={styles.noHayPacientes}>No hay pacientes</Text>
      ) : (
        <FlatList
          data={pacientes}
          keyExtractor={item => item.id}
          renderItem={item => (
            <Paciente
              item={item}
              setModalVisible={setModalVisible}
              pacienteEditar={pacienteEditar}
              eliminarCita={eliminarCita}
              setModalPaciente={setModalPaciente}
              setPaciente={setPaciente}
            />
          )}
          style={styles.listado}
        />
      )}

      {modalVisible && (
        <Formulario
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
      )}

      <Modal
        visible={modalPaciente}
        animationType="fade"
        onRequestClose={() => {
          setModalPaciente(false);
          setPaciente({});
        }}>
        <InformacionPaciente
          paciente={paciente}
          setPaciente={setPaciente}
          setModalPaciente={setModalPaciente}
        />
      </Modal>

      <StatusBar backgroundColor={'#f3f4f6'} barStyle="dark-content" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#f3f4f6',
    flex: 1,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 30,
    color: '#374151',
    fontWeight: '600',
    marginHorizontal: 30,
  },
  tituloBold: {
    fontWeight: '900',
    color: '#6d28d9',
  },
  btnNuevaCita: {
    backgroundColor: '#6d28d9',
    padding: 15,
    marginTop: 30,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  btnTextoNuevaCita: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  noHayPacientes: {
    marginTop: 40,
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#374151',
  },
  listado: {
    marginTop: 50,
    marginHorizontal: 30,
  },
});

export default App;
