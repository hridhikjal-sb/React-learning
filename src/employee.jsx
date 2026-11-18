import { useState } from "react";

export const Employee = () => {
  const [employees, setEmployees] = useState([
    { id: 1, name: "Rahul", department: "IT" },
    { id: 2, name: "Anu", department: "HR" },
    { id: 3, name: "Arun", department: "IT" }
  ]);
  const [search, setSearch] = useState("");
  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search employee"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      {filteredEmployees.map(employee => (
        <p key={employee.id}>{employee.name}</p>
      ))}
    </div>
  );
};