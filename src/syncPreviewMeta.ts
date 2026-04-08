import {
  LOCATION,
  WEDDING_DATE,
  WEDDING_DATE_FOR_FA,
  WEDDING_DATE_FORMAT,
} from "./const"

/**
 * 18일 전용(/fa/) 빌드는 HTML에 이미 맞는 날짜가 박혀 있음.
 * 11일 기본 빌드에서만 `?for=fa`로 og:description 등을 클라이언트에서 덮어씀.
 */
function applyPreviewMetaFromUrl() {
  if (typeof document === "undefined") return

  let date = WEDDING_DATE
  if (import.meta.env.VITE_WEDDING_DATE_VARIANT !== "fa") {
    if (new URLSearchParams(window.location.search).get("for") === "fa") {
      date = WEDDING_DATE_FOR_FA
    }
  }
  const description = `${date.format(WEDDING_DATE_FORMAT)} ${LOCATION}`

  const ogDesc = document.querySelector('meta[property="og:description"]')
  if (ogDesc) ogDesc.setAttribute("content", description)

  let metaDesc = document.querySelector('meta[name="description"]')
  if (!metaDesc) {
    metaDesc = document.createElement("meta")
    metaDesc.setAttribute("name", "description")
    document.head.appendChild(metaDesc)
  }
  metaDesc.setAttribute("content", description)
}

applyPreviewMetaFromUrl()
