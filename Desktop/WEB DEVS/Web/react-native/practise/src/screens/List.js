import { StyleSheet,Text,FlatList,View } from "react-native";


const List = () =>{
  
    const people = [{
        id: 0,
        name: 'Creola Katherine Johnson',
        profession: 'mathematician',
      }, {
        id: 1,
        name: 'Mario José Molina-Pasquel Henríquez',
        profession: 'chemist',
      }, {
        id: 2,
        name: 'Mohammad Abdus Salam',
        profession: 'physicist',
      }, {
        name: 'Percy Lavon Julian',
        profession: 'chemist',  
      }, {
        name: 'Subrahmanyan Chandrasekhar',
        profession: 'astrophysicist',
      }];
    
return (<View>
    <FlatList
    data={people}
    keyExtrator={(people)=>{people.id} }
    renderItem={({item}) =>{
        return <Text>{item.name}</Text>
    }}
    />
</View>)

}

const styles = StyleSheet.create({

})
export default List;