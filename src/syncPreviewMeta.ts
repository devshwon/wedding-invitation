import {
  LOCATION,
  WEDDING_DATE,
  WEDDING_DATE_FOR_FA,
  WEDDING_DATE_FORMAT,
} from "./const"

/**
 * ?for=fa 인 링크를 연 브라우저에서 og:description 등을 맞는 예식일로 맞춤.
 * 카카오·메타 등 크롤러가 JS 없이 HTML만 가져오면 초기(빌드) 문구만 보일 수 있음.
 */
function applyPreviewMetaFromUrl() {
  if (typeof document === "undefined") return

  const forFa = new URLSearchParams(window.location.search).get("for") === "fa"
  const date = forFa ? WEDDING_DATE_FOR_FA : WEDDING_DATE
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
