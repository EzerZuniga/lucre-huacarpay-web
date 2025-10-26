/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string;
  readonly VITE_GOOGLE_ANALYTICS_ID: string;
  readonly VITE_MAPBOX_TOKEN: string;
  readonly VITE_RECAPTCHA_SITE_KEY: string;
  // agregar más variables de entorno según sea necesario
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}