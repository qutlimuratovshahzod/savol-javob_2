import React from 'react'

const mockTasks = [
    {
        name:" Lorem ipsum dolor sit amet consectetur",
        ans: "LOrem",
        true:"Doral"
    },
    {
        name:" Lorem ipsum dolor sit amet consectetur",
        ans: "LOrem",
        true:"Doral"
    },
    {
        name:" Lorem ipsum dolor sit amet consectetur",
        ans: "LOrem",
        true:"Doral"
    }
]

export const Result = () => {
    return (
        <div className="max-w-7xl mx-auto mt-20">

            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Savol</th>
                            <th>Javob</th>
                            <th>To'g'ri javob</th>
                        </tr>
                    </thead>
                    <tbody>{
                        mockTasks.map((task, index)=>(
                          <ResultItem key={index} idx={index + 1} task={task} />  
                        ))
                        }
                        </tbody>
                </table>
            </div>
        </div>
    )
}
