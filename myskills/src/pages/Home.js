import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  TouchableOpacity,
} from 'react-native';

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);
  function handleAddNewSkill() {
    setMySkills(oldState => [...oldState, newSkill]);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Felipe</Text>
      <TextInput
        style={styles.input}
        placeholder={'New skill'}
        placeholderTextColor={'#555'}
        onChangeText={setNewSkill}
      />
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={handleAddNewSkill}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
      <Text style={[styles.title, {marginVertical: 50}]}>My Skills</Text>
      {mySkills.map((skill, index) => (
        <TouchableOpacity style={styles.buttonSkill} key={index}>
          <Text style={styles.textSkill}>{skill}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 20,
    paddingVertical: 70,
  },
  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#FFF',
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
  button: {
    backgroundColor: '#A370F7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
  buttonSkill: {
    padding: 15,
    borderRadius: 50,
    backgroundColor: '#1F1E25',
    alignItems: 'center',
    marginVertical: 10,
  },
  textSkill: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
