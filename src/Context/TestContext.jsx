import { useEffect } from "react";
import { useContext, createContext, useState } from "react";

const TestContext = createContext()
TestContext.displayName = "TestContext"

export const useTestContext = () => useContext(TestContext)

const mockTests = {
    id: 0 ,
    question: "Node Js nima ?",
    variants: [
        {
            id: 0,
            content: "Dasturlash tili",
            isRight: false
        },
        {
            id: 1,
            content: "Dastur",
            isRight: false
        },
        {
            id: 2,
            content: "Runtime Server",
            isRight: false
        },
        {
            id: 3,
            content: " Bu JavaScript runtime server (divijok)",
            isRight: false
        }
    ]
}

function TestContextProvider ({children}) {
const [test, setTests] = useState()
const [isLoading, setIsLoading] = useState()
useEffect(()=>{
    setTimeout(()=>{
        setTests(mockTests)
    }, 1500)
}, [])
const loadTest = ()=> {

}
    return(
        <TestContextProvider value={"TestContext"}>
            {children}
        </TestContextProvider>
    )
}

export default TestContextProvider