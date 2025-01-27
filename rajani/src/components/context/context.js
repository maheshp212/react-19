import { createContext } from "react"
import Employee from "./employee"


export const empContext = createContext()

const Context = ( ) =>{

    let emp = [
        { id:34, name: 'rajani', location: 'hyd', salary: 40000},
        { id:35, name: 'syed', location: 'bang', salary: 140000},
    ]
    return <>
        <empContext.Provider value={emp}>
            <Employee/>
        </empContext.Provider>
    </>
}

export default Context