import { useState } from "react";
import { EmployeeCard } from "./prop";

export const Use = ()=>{
    const [employee, setEmployee] = useState({
        name: "Rahul",
        salary: 30000
    });

    function updateSalary() {

        setEmployee(previous => ({
            ...previous,
            salary: 50000
        }));

}
    return (
        <div>

            <EmployeeCard
                employee={employee}
                onUpdate={updateSalary}
            />

        </div>
    );

}