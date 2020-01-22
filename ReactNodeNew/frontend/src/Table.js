import React from 'react';

const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Color</th>
                <th>Style</th>
                <th>Season</th>
            </tr>
        </thead>
    );
}

const TableBody = props => { 
    const rows = props.clothingData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.type}</td>
                <td>{row.color}</td>
                <td>{row.style}</td>
                <td>{row.season}</td>
                <td><button onClick={() => props.removeClothing(index)}>Delete</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

const Table = (props) => {
    const { clothingData, removeClothing } = props;
        return (
            <table>
                <TableHeader />
                <TableBody clothingData={clothingData} removeClothing={removeClothing} />
            </table>
        );
}

export default Table;