import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import svgr from "vite-plugin-svgr"
import fs from "fs"
import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"
import "dayjs/locale/ko"

import pkg from "./package.json"
import { createHtmlPlugin } from "vite-plugin-html"
import { GROOM_FULLNAME, BRIDE_FULLNAME, LOCATION } from "./src/siteCopy"
import { WEDDING_DATE_ISO_FA, WEDDING_DATE_ISO_MAIN } from "./src/weddingDates"

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.locale("ko")

const distFolder = "build"

const htmlWeddingDate = dayjs.tz(
  process.env.VITE_WEDDING_DATE_VARIANT === "fa"
    ? WEDDING_DATE_ISO_FA
    : WEDDING_DATE_ISO_MAIN,
  "Asia/Seoul",
)
const htmlWeddingFormat = `YYYY년 MMMM D일 dddd A h시${htmlWeddingDate.minute() === 0 ? "" : " m분"}`

let base = "/"
if (process.env.VITE_BASE_PATH?.trim()) {
  const p = process.env.VITE_BASE_PATH.trim()
  base = p.endsWith("/") ? p : `${p}/`
} else {
  try {
    const path = new URL(pkg.homepage).pathname
    base = path.endsWith("/") ? path : `${path}/`
  } catch {
    base = typeof pkg.homepage === "string" ? pkg.homepage : "/"
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    createHtmlPlugin({
      inject: {
        data: {
          GROOM_FULLNAME,
          BRIDE_FULLNAME,
          DESCRIPTION: `${htmlWeddingDate.format(htmlWeddingFormat)} ${LOCATION}`,
        },
      },
    }),
    {
      name: "manifest-inject",
      writeBundle() {
        const content = fs.readFileSync("public/manifest.json", "utf-8")
        const processed = content
          .replace(/<%= GROOM_FULLNAME %>/g, GROOM_FULLNAME)
          .replace(/<%= BRIDE_FULLNAME %>/g, BRIDE_FULLNAME)
        fs.writeFileSync(`${distFolder}/manifest.json`, processed)
      },
    },
  ],
  server: { port: 3000 },
  build: { outDir: distFolder },
  base,
})
