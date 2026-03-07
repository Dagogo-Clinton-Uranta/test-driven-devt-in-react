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