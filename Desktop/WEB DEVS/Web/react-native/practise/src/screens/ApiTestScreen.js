import ApiData from "./components/ApiData";
import ApiResponse from './components/ApiResponse';
import { Text } from "react-native";

 const ApiTestScreen = () =>{

   const[result] = ApiResponse();

   <Text>{result}</Text>

 }

 export default ApiTestScreen;