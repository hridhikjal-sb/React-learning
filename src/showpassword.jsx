import { useState } from 'react';

export const ShowPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  return (
    <>
      <label htmlFor="password">Password</label>
      <input
        type={showPassword ? 'text' : 'password'}
        placeholder="Enter password"
        autoComplete="current-password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button
        type="button"
        onClick={() => setShowPassword((visible) => !visible)}
      >
        {showPassword ? 'Hide password' : 'Show password'}
      </button>
    </>
  );
};