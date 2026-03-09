import React from 'react'
import Homes from './Homes'
import {act, getAllByTestId, getByTestId, getNodeText, render} from '@testing-library/react'
import apiClient from './services/apiClient'
import bookingDialogService from './services/bookingDialogService'

let container = null

beforeEach(async()=>{

    container = render(<Homes/>).container

    await act(async()=>{}) // act is used to cover for useEffect in react

    jest.spyOn(apiClient,'getHomes').mockImplementation(()=>{
       
      
      return Promise.resolve([
        {
      title:"Test Home 1",
      location:"location 1",
      image:"listing.jpg",
      price:"$1/night",
       },
    {
        title:"Test Home 2",
        location:"location 2",
        image:"listing.jpg",
        price:"$2/night",
    },
    {
        title:"Test Home 1",
        location:"location 3",
        image:"listing.jpg",
        price:"$3/night",
    },
    {
        title:"Test Home 4",
        location:"location 4",
        image:"listing.jpg",
        price:"$4/night",
    },])


   })
})


it('it should show homes',()=>{

   const homes =  getAllByTestId(container,'home')

   console.log(container.innerHTML)

   expect(homes.length).toBeGreaterThan(0)
})



it('it should show home titles',()=>{

    const homeTitles =  getAllByTestId(container,'home-title')
 
    expect(getNodeText(homeTitles[0])).toBe('Test Home 1') 
    //get node text is used to grab text content
    //Good UI tests should focus on what users see
   // Testing innerHTML INSTEAD OF GET NODE TEXT means you're testing:

    //tags
    //
    //formatting
    //
    //DOM structure
    //
    //instead of user-facing behavior.
 })





 it('it should show home image',()=>{

    const homeImages = getAllByTestId(container,'home-image')
 
    expect((homeImages[0])).toBeTruthy() //get node text is used to grab text content
 })

 it('should show home location',()=>{

    const homeLocation = getAllByTestId(container,'home-location')
    expect(getNodeText(homeLocation[0])).toBe('location 1')
 })


 it('should show home price',()=>{

    const homeLocation = getAllByTestId(container,'home-price')
    expect(getNodeText(homeLocation[0])).toBe('$1/night')
 })


 it('should show home booking button',()=>{
   

    const homeBookingBtn = getAllByTestId(container,'home-booking-btn')

    expect(homeBookingBtn[0]).toBeTruthy()
 })


 it('should open home booking dialog when clicking the button',()=>{
  
     jest.spyOn(bookingDialogService,'open').mockImplementation(()=>{ })


    const homeBookingBtn = getAllByTestId(container,'home-booking-btn')

    homeBookingBtn[0].click(); //note the action taen here

    expect(bookingDialogService.open).toHaveBeenCalledWith(
     //usung the first home object from the mock

     {
        title:"Test Home 1",
        location:"location 1",
        image:"listing.jpg",
        price:"$1/night",
         },
    )



 })


