import React from 'react'

export const ResulItem = ({idx, task}) => {
  return (
   <tr>
       <td>{idx}</td>
       <td>{task.name}</td>
       <td>{task.ans}</td>
       <td>{task.true}</td>
   </tr>
  )
}
