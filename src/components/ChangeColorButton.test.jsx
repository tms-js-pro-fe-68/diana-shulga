import React from 'react'
import {fireEvent, render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ChangeColorButton from './ColorButton'

describe("ChangeColorButton", () => {
    it("should render without crashes", () => {
        const {getByText} = render(<ChangeColorButton/>)
        expect(getByText('click on me')).toBeInTheDocument()
    })

    it("should change color on click", () => {
        const {getByText} = render(<ChangeColorButton/>)
        const changeColorButton = getByText('click on me')
        expect(changeColorButton).toHaveStyle({ backgroundColor: 'yellow' })
        fireEvent.click(changeColorButton)
        expect(changeColorButton).toHaveStyle({ backgroundColor: 'blue' })
        fireEvent.click(changeColorButton)
        expect(changeColorButton).toHaveStyle({ backgroundColor: 'yellow' })
    })
})