const API_KEY = 'AIzaSyDxRiYwJW5NvWM06T0sFG-qOLpXmbZT6GM';
const ROOT_FOLDER_ID = '1FxpX1ExBAEEJcPYwwUe7oHw9i_Lu1Om2'; // The shared folder ID

// Initialize the Google API client (optional, for consistency)
function gapiInit() {
  gapi.client
    .init({
      apiKey: API_KEY,
      discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'],
    })
    .then(() => {
      console.log('GAPI initialized');
    });
}

// Entry point for Google API initialization (optional)
export function handleClientLoad() {
  const script = document.createElement('script');
  script.src = 'https://apis.google.com/js/api.js';
  script.onload = () => {
    gapi.load('client', gapiInit);
  };
  document.body.appendChild(script);
}

// List files from a specific folder using fetch for public access
export async function listFiles(folderId) {
  const url = `https://www.googleapis.com/drive/v3/files?q='${folderId}' in parents&key=${API_KEY}&fields=files(id,name,mimeType,webViewLink,webContentLink,thumbnailLink)`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch files');
  }
  const data = await response.json();
  return data.files;
}

// Recursive function to build folder tree
export async function buildFolderTree(folderId, depth = 0) {
  const items = await listFiles(folderId);
  const tree = [];

  for (const item of items) {
    if (item.mimeType === 'application/vnd.google-apps.folder') {
      const children = depth < 2 ? await buildFolderTree(item.id, depth + 1) : []; // Limit depth to Year -> Course -> Files
      tree.push({
        id: item.id,
        name: item.name,
        type: 'folder',
        children,
      });
    } else {
      tree.push({
        id: item.id,
        name: item.name,
        type: 'file',
        webViewLink: item.webViewLink,
        webContentLink: item.webContentLink,
        thumbnailLink: item.thumbnailLink,
      });
    }
  }

  return tree;
}

// Get the root tree
export async function getRootTree() {
  return await buildFolderTree(ROOT_FOLDER_ID);
}
