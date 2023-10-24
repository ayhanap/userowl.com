declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_ENDPOINT: string;
      NEXT_PUBLIC_API_ENDPOINT: string;
      COOKIE_DOMAIN: string;
      NEXT_PUBLIC_COOKIE_DOMAIN: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
