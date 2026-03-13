/* global gapi */
import { Buffer } from 'buffer';

const API_KEY = 'YOUR_API_KEY';
const CLIENT_ID = 'YOUR_CLIENT_ID';
const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'];
const SCOPES = 'https://www.googleapis.com/auth/drive.readonly';

let tokenClient;
let gapiInited = false;
let gisInited = false;

// Initialize the Google API client
function gapiInit() {
  gapi.client
    .init({
      apiKey: API_KEY,
      discoveryDocs: DISCOVERY_DOCS,
    })
    .then(() => {
      gapiInited = true;
    });
}

// Initialize the Google Identity Services client
function gisInit() {
  tokenClient = google.accounts.oauth2.initTokenClient({
    client_id: CLIENT_ID,
    scope: SCOPES,
    callback: '', // defined later
  });
  gisInited = true;
}

// Entry point for Google API initialization
export function handleClientLoad() {
  // Load the GAPI client and GIS library
  const scriptGapi = document.createElement('script');
  scriptGapi.src = 'https://apis.google.com/js/api.js';
  scriptGapi.onload = () => {
    gapi.load('client', gapiInit);
  };
  document.body.appendChild(scriptGapi);

  const scriptGis = document.createElement('script');
  scriptGis.src = 'https://accounts.google.com/gsi/client';
  scriptGis.onload = () => {
    gisInit();
  };
  document.body.appendChild(scriptGis);
}

// Sign in the user
export function handleAuthClick() {
  return new Promise((resolve, reject) => {
    if (!gapiInited || !gisInited) {
      reject('Google API clients are not initialized.');
      return;
    }

    tokenClient.callback = async (resp) => {
      if (resp.error) {
        reject(resp.error);
        return;
      }
      await gapi.client.setToken(resp);
      resolve();
    };

    if (gapi.client.getToken() === null) {
      // Prompt the user to select a Google Account and ask for consent to share their data
      // when establishing a new session.
      tokenClient.requestAccessToken({ prompt: 'consent' });
    } else {
      // Skip display of account chooser and consent dialog for an existing session.
      tokenClient.requestAccessToken({ prompt: '' });
    }
  });
}

// Sign out the user
export function handleSignoutClick() {
  const token = gapi.client.getToken();
  if (token) {
    google.accounts.oauth2.revoke(token.access_token, () => {
      gapi.client.setToken(null);
    });
  }
}

// List files from a specific folder
export async function listFiles(folderId) {
  if (!gapiInited) {
    throw new Error('Google API client is not initialized.');
  }

  try {
    const response = await gapi.client.drive.files.list({
      q: `'${folderId}' in parents`,
      fields: 'files(id, name, mimeType, webViewLink, thumbnailLink)',
    });
    return response.result.files;
  } catch (err) {
    console.error('Error listing files:', err);
    throw err;
  }
}
