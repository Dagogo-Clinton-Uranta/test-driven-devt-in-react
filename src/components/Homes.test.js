import React from 'react'
import Homes from './Homes'
import {getAllByTestId, getByTestId, render} from '@testing-library/react'

let container = null

beforeEach(()=>{

    container = render(<Homes/>).container
})


it('it should show homes',()=>{

   const homes =  expect(getAllByTestId(container,'home'))

   expect(homes.length).toBeGreaterThan(0)
})




