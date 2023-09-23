import {View, Text, FlatList} from 'react-native';
import {React, useState, useEffect} from 'react';
import Employee from './Employee';

export default function EmployeesCard() {
  const [person, setPerson] = useState([]);

  const employees = async () => {
    const res = await fetch('https://atomic-test-api.onrender.com/names');
    const data = await res.json();
    console.log(data);
    setPerson(data);
  };
  useEffect(() => {
    employees();
  }, []);

  return (
    <View>
      {person.map((worker, key) => {
        return <Employee worker={worker} key={key} />;
      })}
    </View>
  );
}
