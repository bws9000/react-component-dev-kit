import { Routes, Route } from 'react-router-dom';
import { OAuthLoginButton } from '@charmr/oauth-button';
import { OAuthCallbackHandler } from './OAuthCallbackHandler';
import type { OAuthSuccess, OAuthError } from '@charmr/oauth-core'; //use only in dev env here. published package is @charmr/oauth-button

export default function App() {
  return (
    <Routes>
      <Route path="/" element={
        <OAuthLoginButton
          provider="google"
          clientId="<YOUR CLIENT ID FROM GOOGLES>"
          redirectUri="http://localhost:5173/oauth/callback"
          onSuccess={(token: OAuthSuccess) => console.log('Token:', token)}
          onError={(err: OAuthError) => console.error('Error:', err)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
          style={{ fontWeight: 'bold' }}
        />
      } />
      <Route path="/oauth/callback" element={
        <OAuthCallbackHandler
          onSuccess={(token: any) => {
            console.log('Success from callback:', token);
          }}
          onError={(error: any) => {
            console.error('OAuth error:', error);
          }}
        />
      } />
    </Routes>
  );
}