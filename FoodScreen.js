import React,{useState,useEffect} from 'react';
import {View, StyleSheet,FlatList,Text,Image} from 'react-native';
import axios from 'axios';




export default function FoodScreen (){



//const FoodScreen = () => {
    const [foods,setFoods] =useState([])

   useEffect(()=>{
    getFood()
    },[])
  const getFood = async () =>{
    try{
    const response = await axios.get('https://themealdb.com/api/json/v1/1/categories.php')
    console.log(response)
    if(response && response.data){
        setFoods(response.data.categories)
    }
    } catch(err) {
   console.log(err.message)
    }
  }
    return (
        <View style={styles.food}>
             <FlatList
               numColumns={2}
                data={foods}
                renderItem={({item,index})=>(
                  <View>
                <Text style={styles.foodText}>{item.strCategory}</Text>
                <Image source={{uri:`${item.strCategoryThumb}`}} style={{width:200,height:200, borderRadius:10,backgroundColor:'#8B6C70'}}/> 
                </View>
      )}
      />
        </View>
    );
}

const styles = StyleSheet.create({
 food:{
  width:'100%',
        backgroundColor: '#E4DDDE',
        alignItems:'center',
        
        padding: 5

 },
 foodText:{
  color:'#8B6C70',
  fontWeight:'bold',
  fontSize:'20',
  marginTop:24
 }

});