import React, { useEffect, useState } from 'react'
import apiClient from './services/apiClient'
import bookingDialogService from './services/bookingDialogService'


export default function Homes (){
    
 

const [homesState,setHomesState] = useState([])

useEffect(()=>{

    const homesDataPromise = apiClient.getHomes()
   // const homesDataPromise = Promise.resolve([
   //     {
   //   title:"Test Home 1",
   //   location:"location 1",
   //   image:"listing.jpg",
   //   price:"1",
   //    },
   // {
   //     title:"Test Home 2",
   //     location:"location 2",
   //     image:"listing.jpg",
   //     price:"2",
   // },
   // {
   //     title:"Test Home 1",
   //     location:"location 3",
   //     image:"listing.jpg",
   //     price:"3",
   // },
   // {
   //     title:"Test Home 4",
   //     location:"location 4",
   //     image:"listing.jpg",
   //     price:"4",
   // },])


    homesDataPromise.then((homesData)=>{
setHomesState(homesData)
    })


},[])

//let homes;

   const homes = homesState?homesState.map((home,index)=>(
        <div className="col-6 col-md-6 col-lg-4 col-xl-3 col-mb-3">
            <div key={index} data-testid="home" className="card-w100" >
            <img data-testid="home-image" src={home.image} alt="" className="card-img-top"/>

           <div className='card-body'>
               <div data-testid="home-title">
                 {home.title}
               </div>

              
               <div data-testid="home-location">
                 {home.location}
               </div>

               <div data-testid="home-price">
                 ${home.price}/night
               </div>


             <div className="d-flex justify-content-end">
               <div onClick={(home)=>{bookingDialogService.open(home)}}
               type="btn" className="btn btn-primary" data-testid="home-booking-btn">
                 Book
               </div>
            </div>


            </div>      
               
            </div>
    </div>
   )):[]



    return (
        <>
         <div className="container-m2">
           
          <h1>Homes</h1>
         <div className="row">
            {homes}
         </div>
         </div>
        </>
    )


}