import React,{useState,useEffect} from 'react';
import {View, StyleSheet,FlatList,Text,Image} from 'react-native';
import axios from 'axios'


const FoodScreen = () => {
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
        <View>
             <FlatList
      data={foods}
      renderItem={({item,index})=>(
        <View>
      <Text>{item.strCategory}</Text>
      <Image source={{uri:`${item.strCategoryThumb}`}} style={{width:50,height:50}}/> 
      </View>
      )}
      />
        </View>
    );
}

const styles = StyleSheet.create({})

export default FoodScreen;
