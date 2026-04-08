import { useMemo } from "react"
import { WEDDING_DATE, WEDDING_DATE_FOR_FA } from "./const"

/** URL에 ?for=fa 이면 4/18, 아니면 기본 예식일 */
export function useEffectiveWeddingDate() {
  return useMemo(() => {
    if (typeof window === "undefined") return WEDDING_DATE
    return new URLSearchParams(window.location.search).get("for") === "fa"
      ? WEDDING_DATE_FOR_FA
      : WEDDING_DATE
  }, [])
}
