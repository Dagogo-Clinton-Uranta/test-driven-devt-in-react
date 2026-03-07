import React, { useEffect, useState } from 'react'


export default function Homes (){
    
 

const [homesState,setHomesState] = useState([])

useEffect(()=>{


    const homesDataPromise = Promise.resolve([
        {
      title:"Test Home 1",
      location:"location 1",
      image:"listing.jpg",
      price:"1",
       },
    {
        title:"Test Home 2",
        location:"location 2",
        image:"listing.jpg",
        price:"2",
    },
    {
        title:"Test Home 1",
        location:"location 3",
        image:"listing.jpg",
        price:"3",
    },
    {
        title:"Test Home 4",
        location:"location 4",
        image:"listing.jpg",
        price:"4",
    },])


    homesDataPromise.then((homesData)=>{
setHomesState(homesData)
    })


},[])

let homes;

    homes = homesState.map((home,index)=>{
        return (
            <div key={index} data-testid="home">{home}</div>
        )
    })



    return (
        <>
         <div >
            {homes}
         </div>
        </>
    )


}