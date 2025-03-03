import {Auth0Client, User} from '@auth0/auth0-spa-js';
import {auth0 as $auth0} from '@core/constants/auth0';
import {createRoot, createSignal} from 'solid-js';

type AuthState = User | null;

export function $auth0State() {
  let auth0!: Auth0Client;
  const [state, setState] = createSignal<AuthState>();

  async function initLogin() {
    auth0 = await $auth0;
    const queryParams = new URLSearchParams(window.location.search);
    if (!auth0) return;
    if (queryParams.has('code') && queryParams.has('state')) {
      const data = await auth0.handleRedirectCallback().catch(() => null);
      setState(await auth0.getUser());
      history.replaceState(data?.appState, '', window.location.origin);
      if (data) {
        // should always be null?
      }
    } else {
      if (await auth0.isAuthenticated()) {
        setState(await auth0.getUser());
      }
    }
  }

  async function login() {
    auth0.loginWithRedirect({connection: 'github'});
  }

  async function signOut() {
    await auth0.logout();
  }

  const getToken = () => {
    return auth0.getTokenSilently();
  };

  const loggedIn = () => !!state();

  const user = () => {
    const $user = state();
    if (!$user) return null;
    return Object.assign($user, {
      id: $user.sub?.split('|')[1],
    });
  };

  return {
    user,
    getToken,
    login,
    signOut,
    loggedIn,
    initLogin,
  };
}

const auth0State = createRoot($auth0State);

export function getAuth0State() {
  return auth0State;
}
