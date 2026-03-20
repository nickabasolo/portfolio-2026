
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { PostHogProvider } from '@posthog/react';
import App from './App';

const posthogOptions = {
  api_host: 'https://us.i.posthog.com',
  loaded: (ph: { opt_out_capturing: () => void }) => {
    if (import.meta.env.DEV) ph.opt_out_capturing();
  },
};

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <PostHogProvider apiKey="phc_Yn1Bf8klzHIgOBMSp6jUS6GVtXnJ8Orx1gsV2kMaVii" options={posthogOptions}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PostHogProvider>
  </React.StrictMode>
);
