
import { useState } from "react";

function CharacterCounter() {

    // 1. Create state to store the user's text
    const [message, setMessage] = useState("");

    // 2. Calculate the number of characters
    const characterCount = message.length;

    // 3. Calculate remaining characters
    const remaining = 100 - characterCount;

    // 4. Handle text input
    const handleChange = (event) => {
        setMessage(event.target.value.slice(0, 100));
    };

    return (
        <div>
            <h2>Character Counter</h2>

            <textarea
                value={message}
                onChange={handleChange}
                placeholder="Start typing..."
                rows={5}
            />

            <p>
                Characters typed: {characterCount} / 100
            </p>

            <p>
                Remaining characters: {remaining}
            </p>

            {remaining === 0 && (
                <p style={{ color: "red" }}>
                    Character limit reached!
                </p>
            )}

            <button onClick={() => setMessage("")}>
                Clear
            </button>
        </div>
    );
}

export default CharacterCounter;