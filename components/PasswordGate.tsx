import React, { useState, useEffect } from 'react';

const SESSION_KEY = 'portfolio_auth';
const PASSWORD = import.meta.env.VITE_PORTFOLIO_PASSWORD as string | undefined;

const isAuthenticated = () => sessionStorage.getItem(SESSION_KEY) === 'true';

const PasswordGate: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [authed, setAuthed] = useState(isAuthenticated);
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!PASSWORD) {
      // No password set — open access in dev
      setAuthed(true);
    }
  }, []);

  if (authed) return <>{children}</>;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, 'true');
      setAuthed(true);
    } else {
      setError(true);
      setInput('');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-bg px-6">
      <div className="w-full max-w-sm">
        <h1 className="text-2xl font-semibold text-stone-900 mb-2">Portfolio</h1>
        <p className="text-stone-500 text-sm mb-8">This portfolio is private. Enter the password to continue.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={input}
            onChange={e => { setInput(e.target.value); setError(false); }}
            placeholder="Password"
            autoFocus
            className={`w-full px-4 py-3 rounded-xl border text-stone-900 bg-white outline-none transition-all focus:ring-2 focus:ring-amber-400 ${error ? 'border-red-400 ring-2 ring-red-200' : 'border-stone-200'}`}
          />
          {error && <p className="text-red-500 text-sm">Incorrect password</p>}
          <button
            type="submit"
            className="w-full px-4 py-3 bg-stone-900 text-white rounded-xl font-medium hover:bg-amber-600 transition-colors"
          >
            Enter
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordGate;
