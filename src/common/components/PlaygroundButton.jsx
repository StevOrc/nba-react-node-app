import React from "react";
import _ from "lodash";

const PlaygroundButton = () => {
  let istested = false;

  const persons = [
    { name: "Steven", age: 33, isGold: true },
    { name: "Bernard", age: 23, isGold: true },
    { name: "Jocelyne", age: 5, isGold: false },
    { name: "Paul", age: 17, isGold: false },
    { name: "Serena", age: 60, isGold: false },
    { name: "Theo", age: 76, isGold: true },
    { name: "Adem", age: 30, isGold: true },
    { name: "Clara", age: 31, isGold: false },
    { name: "Ako", age: 21, isGold: false },
    { name: "Gabriel", age: 10, isGold: true },
    { name: "Christelle", age: 13, isGold: true },
    { name: "Claudia", age: 2, isGold: true },
    { name: "Thérèse", age: 45, isGold: false },
    { name: "Jean", age: 50, isGold: false },
    { name: "Matthieu", age: 56, isGold: true },
    { name: "Théophile", age: 88, isGold: false },
    { name: "Marie", age: 25, isGold: true },
    { name: "Shérine", age: 53, isGold: false },
    { name: "Alain", age: 77, isGold: true },
    { name: "Stéphanie", age: 29, isGold: true },
    { name: "Luc", age: 44, isGold: true },
    { name: "Brenda", age: 16, isGold: false },
    { name: "Laurent", age: 4, isGold: false },
    { name: "Jesus", age: 54, isGold: true },
  ];

  const columns = [
    { path: "name", label: "Prénom" },
    { path: "age", label: "Age" },
    {
      path: "isGold",
      label: "Client Gold",
      content: (item) =>
        item.isGold ? (
          <i className="fa fa-star" style={{ color: "gold" }}></i>
        ) : (
          <p> - </p>
        ),
    },
  ];

  const renderCells = (item, column) => {
    if (column.content) return column.content(item);

    return _.get(item, column.path);
  };

  const calculMoreThan18 = () => {
    const result = persons.reduce((acc, el) => {
      if (el.age > 17) acc.push(el);
      return acc;
    }, []);

    return result;
  };

  const calculNumberOfGold = () => {
    const result = persons.reduce((acc, el) => {
      if (el.isGold) acc++;
      return acc;
    }, 0);

    console.log(result);
    return result;
  };

  const calculNumberOfGoldAndMoreThan18 = () => {
    const result = persons.reduce((acc, el) => {
      if (el.isGold && el.age > 17) acc++;
      return acc;
    }, 0);

    console.log(result);
    return result;
  };

  const calculNumberOfGoldAndLessThan18 = () => {
    const result = persons.reduce((acc, el) => {
      if (el.isGold && el.age < 18) acc++;
      return acc;
    }, 0);

    console.log(result);
    return result;
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6">
          <table className="table">
            <thead>
              <tr>
                {columns.map((column) => (
                  <th key={column.path}> {column.label} </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {persons.map((person) => (
                <tr key={person.name}>
                  {columns.map((column) => (
                    <td key={column.path}> {renderCells(person, column)} </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-6 p-5">
          <div className="row mb-2">
            <p className="mr-2">Nombre de personnes : </p>
            <p> {persons.length} </p>
          </div>
          <div className="row mb-2">
            <p className="mr-2">Nombre de personnes majeurs : </p>
            <p> {calculMoreThan18().length} </p>
          </div>
          <div className="row mb-2">
            <p className="mr-2">Nombre de personnes mineurs : </p>
            <p> {persons.length - calculMoreThan18().length} </p>
          </div>
          <div className="row mb-2">
            <p className="mr-2">Nombre de personnes Gold : </p>
            <p> {calculNumberOfGold()} </p>
          </div>
          <div className="row mb-2">
            <p className="mr-2">Nombre de personnes Gold et majeur: </p>
            <p> {calculNumberOfGoldAndMoreThan18()} </p>
          </div>
          <div className="row mb-2">
            <p className="mr-2">Nombre de personnes Gold et majeur: </p>
            <p> {calculNumberOfGoldAndLessThan18()} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaygroundButton;
