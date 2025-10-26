interface Window {
  gtag: (...args: any[]) => void;
}

declare namespace NodeJS {
  interface ProcessEnv {
    readonly VITE_API_BASE_URL: string;
    readonly VITE_GOOGLE_ANALYTICS_ID: string;
    readonly VITE_MAPBOX_TOKEN: string;
    readonly VITE_RECAPTCHA_SITE_KEY: string;
  }
}