declare namespace NodeJS {
  interface ProcessEnv {
    MONGODB_URI: string
    PORT: number
    SECRET: string
    GMAIL_EMAIL: string
    GMAIL_PASS: string
  }
}
