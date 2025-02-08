import encKey from './encryptionKey';

export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000',
  localHostDevelopment: false,
  debugMode: true,
  encryptionKey: encKey,
  currentInstance: 'development',
};
