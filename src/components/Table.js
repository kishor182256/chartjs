import React from 'react'
import '../styles/Table.css';

const Table = ({countries}) => {
  return (
    <div className="table">
        {
            countries.map((countries)=>{
                return (
                    <tr>
                        <td>{countries.country}</td>
                        <td><strong>{countries.cases}</strong></td>
                    </tr>
                )
            })
        }
    </div>
  )
}

export default Table