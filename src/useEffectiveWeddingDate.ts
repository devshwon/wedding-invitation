import { useMemo } from "react"
import { WEDDING_DATE, WEDDING_DATE_FOR_FA } from "./const"

/** `/fa/` 18일 전용 빌드면 항상 WEDDING_DATE(18일). 기본 사이트는 `?for=fa`일 때만 18일 */
export function useEffectiveWeddingDate() {
  return useMemo(() => {
    if (import.meta.env.VITE_WEDDING_DATE_VARIANT === "fa") return WEDDING_DATE
    if (typeof window === "undefined") return WEDDING_DATE
    if (new URLSearchParams(window.location.search).get("for") === "fa") {
      return WEDDING_DATE_FOR_FA
    }
    return WEDDING_DATE
  }, [])
}
