import {React,useEffect,useState} from 'react'
import Navabar from '../components/Navabar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Carousel from '../components/Carousel'

export default function Home() {
 const [foodCat,setFoodCat]=useState([]);
 const [foodItem,setFoodItem]=useState([]);
 const loadData= async()=>
 {
  let response= await fetch("http://localhost:5000/api/foodData",{
    method:"POST",
     headers:{
      'Content-Type':'application/json'
    }

  });
  response=await response.json()
  console.log(response)
  setFoodItem(response[0])
  setFoodCat(response[1])
 }

    useEffect(()=>{
      loadData()
    },[])

 console.log(foodCat)




  return (
    <div>
      <div>
        <Navabar />
      </div>
      <div>
        <Carousel />
      </div>
      <div className='container'>
        {
         foodCat!==[]
         ? foodCat.map((data)=>{
          return(
          <div>hiiii</div>
          )
         })
         
         :
         <div>"""""</div>
        
        }
       
      </div>
      <div className='m-3'>
        <Footer/>
      </div>
    </div>
  )
      }
