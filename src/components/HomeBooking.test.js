import React from 'react'
import Homes from './Homes'
import {act, getAllByTestId, getByTestId, getNodeText, render} from '@testing-library/react'
import apiClient from './services/apiClient'
import bookingDialogService from './services/bookingDialogService'
import HomeBooking from './HomeBooking'

let container = null


const mockedHome = {
    title:"Test Home 1",
    location:"location 1",
    image:"listing.jpg",
    price:"125",
}

beforeEach(async()=>{

    container = render(<HomeBooking home={mockedHome} />).container

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


it('it should show title',()=>{

   const homesBooking =  getByTestId(container,'title')


   expect(homesBooking.textContent).toBe('Test Home 1')
})




it('it should show price',()=>{

    const homesBooking =  getByTestId(container,'price')
 
 
    expect(homesBooking.textContent).toBe('125')
 })


 it('it should show check-in',()=>{

    const homesBooking =  getByTestId(container,'check-in')
 
 
    expect(homesBooking).toBeTruthy()
 })


 it('it should show check-out',()=>{

    const homesBooking =  getByTestId(container,'check-out')
 
 
    expect(homesBooking).toBeTruthy()
 })


 it('should show empty when there is no home provided',()=>{

    container = render(<HomeBooking home={null} />).container


    expect(getByTestId(container,'empty').toBeTruthy())
 })
 

 //requirements list
 
//it should show home title,
// and price
//it should show field for check in date
//it should show check-out date field
//it should calculate total cost based on check in and check out
//should book home after clicking "BOOK" button
//it should close dialog and notification after booking the home