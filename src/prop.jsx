export const Prop=()=>{
    return (
        <div>

            <Employee1
                name="Rahul"
                role="Developer"
                salary={30000}
            />

        </div>
    );
}

export const  Employee1=(props)=> {

    return (
        <div>

            <h2>{props.name}</h2>

            <p>{props.role}</p>

            <p>Salary: ₹{props.salary}</p>

        </div>
    );

}

export const EmployeeCard=({employee, onUpdate})=> {

    return (
         <div>

            <h2>{employee.name}</h2>

            <p>Role: {employee.role}</p>

            <p>Salary: ₹{employee.salary}</p>

            <button onClick={onUpdate}>
                Update Salary
            </button>

        </div>
    );

}