import React from 'react'
import Homes from './Homes'
import {act, getAllByTestId, getByTestId, render} from '@testing-library/react'

let container = null

beforeEach(async()=>{

    container = render(<Homes/>).container

    await act(async()=>{}) // act is used to cover for useEffect in react
})


it('it should show homes',()=>{

   const homes =  expect(getAllByTestId(container,'home'))

   expect(homes.length).toBeGreaterThan(0)
})




