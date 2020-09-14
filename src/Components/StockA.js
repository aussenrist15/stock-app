import React, {useContext} from 'react'
import { CalculatorContext } from '../Context/CalculatorContext'

export const StockA = () => {
    

    const {StockData} = useContext(CalculatorContext)
    const retval = StockData.length ===0 ? (
        <h1>No Data Found</h1>
    ) :
    (
        StockData.map(item=> item.date)
    )
    return (
        <div>
            <h1> {retval} </h1>
            
        </div>
    )
}
