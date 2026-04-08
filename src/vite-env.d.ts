/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WEDDING_DATE_VARIANT?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
