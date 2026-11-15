import { useState } from 'react'

function LoginForm() {

    const [username, setUsername] = useState("");

    return (
        <input
            value={username}
            onChange={e => setUsername(e.target.value)}
            placeholder="Enter username"
        />
    );
}

export default LoginForm;