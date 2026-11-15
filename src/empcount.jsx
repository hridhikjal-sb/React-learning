// Import React's state hook so this component can remember changing values.
import { useState } from "react";

// Define the employee dashboard component.
function EmployeeCounter() {

    // Store all added employee names in an array; it starts empty.
    const [employees, setEmployees] = useState([]);

    // Store the text currently typed into the employee-name input.
    const [employeeName, setEmployeeName] = useState("");

    // Store the bonus amount paid to each employee.
    const [bonus, setBonus] = useState(5000);

    // Calculate the total bonus using the per-employee amount and employee count.
    const totalBonus = bonus * employees.length;

    // Add the typed employee name to the employee list.
    function addEmployee() {
        // Remove spaces from the beginning and end of the entered name.
        const trimmedName = employeeName.trim();

        // Do not add a name if the input is empty or contains only spaces.
        if (!trimmedName) return;

        // Add the new name while keeping all names already in the list.
        setEmployees(currentEmployees => [...currentEmployees, trimmedName]);

        // Clear the input after adding the employee.
        setEmployeeName("");
    }

    // Remove the most recently added employee, if there is one.
    function removeEmployee() {
        setEmployees(currentEmployees => currentEmployees.slice(0, -1));
    }

    // Render the dashboard and its controls.
    return (
        <div>
            {/* Show the dashboard heading. */}
            <h2>Employee Dashboard</h2>

            {/* Show how many employees have been added. */}
            <p>Employees: {employees.length}</p>

            {/* Show the bonus amount for each employee. */}
            <p>Bonus per employee: {bonus}</p>

            {/* Show the calculated total bonus for all employees. */}
            <h3>Total Bonus: {totalBonus}</h3>

            {/* Submit the form to add an employee. */}
            <form onSubmit={event => {
                // Prevent the browser from reloading the page on form submission.
                event.preventDefault();

                // Add the entered name to the employee list.
                addEmployee();
            }}>
                {/* Keep the input value in React state as the user types. */}
                <input
                    value={employeeName}
                    onChange={event => setEmployeeName(event.target.value)}
                    placeholder="Enter employee name"
                />
                {/* Submit the form when this button is clicked. */}
                <button type="submit">Add Employee</button>
            </form>

            {/* Display every employee name as a list item. */}
            <ul>
                {employees.map((employee, index) => (
                    // Give each list item a key so React can track it.
                    <li key={`${employee}-${index}`}>{employee}</li>
                ))}
            </ul>

            {/* Remove the last employee when clicked. */}
            <button onClick={removeEmployee}>
                Remove Employee
            </button>

            {/* Change the per-employee bonus to 6000 when clicked. */}
            <button onClick={() => setBonus(6000)}>
                Update Bonus
            </button>
        </div>
    );
}

export default EmployeeCounter;