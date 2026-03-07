import React from 'react'
import Header from './Header'
import {getByTestId, render} from '@testing-library/react'

let container = null

beforeEach(()=>{

    container = render(<Header/>).container
})


it('it should show the logo',()=>{

    expect(getByTestId(container,'logo')).toBeTruthy() //temp test

})


it('it should have a searchbar',()=>{

    expect(getByTestId(container,'search')).toBeTruthy() //temp test

})


it('it should show menu',()=>{

    expect(getByTestId(container,'menu')).toBeTruthy() //temp test

})



it('it should show filters',()=>{

    expect(getByTestId(container,'home-type')).toBeTruthy(); //temp test
    expect(getByTestId(container,'dates')).toBeTruthy();
    expect(getByTestId(container,'guests')).toBeTruthy();
    expect(getByTestId(container,'price')).toBeTruthy();
    expect(getByTestId(container,'rooms')).toBeTruthy();
    expect(getByTestId(container,'amenities')).toBeTruthy();
})


