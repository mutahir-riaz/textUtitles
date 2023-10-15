import React, { useState } from 'react';

function MultiplicationTable() {
  const [number, setNumber] = useState(2); // Initial number for the table
  const [table, setTable] = useState([]);

  const generateTable = () => {
    const rows = 10; // Number of rows in the table
    const columns = 10; // Number of columns in the table

    const newTable = [];

    for (let i = 1; i <= rows; i++) {
      const row = [];
      for (let j = 1; j <= columns; j++) {
        row.push(i * j);
      }
      newTable.push(row);
    }

    setTable(newTable);
  };

  const handleNumberChange = (event) => {
    const newNumber = parseInt(event.target.value, 10);
    if (!isNaN(newNumber)) {
      setNumber(newNumber);
    }
  };

  return (
    <div>
      <h1>Multiplication Table Generator</h1>
      <input
        type="number"
        value={number}
        onChange={handleNumberChange}
        placeholder="Enter a number"
      />
      <button onClick={generateTable}>Generate Table</button>
      <table>
        <tbody>
          {table.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, columnIndex) => (
                <td key={columnIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MultiplicationTable;
