import { useState } from "react";

export const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [submittedName, setSubmittedName] = useState("");
    const [submittedEmail, setSubmittedEmail] = useState("");
    const [error, setError] = useState("");
    const [mailError, setMailError] = useState("");

    function handleSubmit(event) {

        event.preventDefault();

        if (name.trim() === "") {
            setError("Name is required");
            return;
        }

        setError("");

        if (email.trim() === "") {
            setMailError("Email is required");
            return;
        }
        else if (!/\S+@\S+\.\S+/.test(email)) {
            setMailError("Email is invalid");
            return;
        }

        setMailError("");

        console.log("Name:", name);
        console.log("Email:", email);
        setSubmittedName(name);
        setSubmittedEmail(email);
        setName("");
        setEmail("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}

                />

                {error && <p style={{ color: "red" }}>{error}</p>}

            </div>
            <div>

                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {mailError && <p style={{ color: "red" }}>{mailError}</p>}
                <h1>{name}</h1>
                <p>{email}</p>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};