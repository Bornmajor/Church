import * as SQLite from 'expo-sqlite';
import { useEffect } from 'react';
import { Alert } from 'react-native';

const db = SQLite.openDatabase('example');

// useEffect(()=>{

// },[]);

export default function SqliteScreen(){
  db.transaction((tx) =>{
    tx.executeSql(
    'create table if not exists customers (id integer primary key not null, name text);'
    );
    tx.executeSql(
    'insert into customers(name) values(?),(?)',[
      'Mark',
      'Osborn',  
    ]);
    tx.executeSql('select * from customers', [] , (_, {rows}) =>
    Alert.alert(JSON.stringify(rows))
    );
    });
}