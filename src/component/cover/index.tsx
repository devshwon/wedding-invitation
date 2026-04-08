import {
  BRIDE_FULLNAME,
  GROOM_FULLNAME,
  LOCATION,
  WEDDING_DATE_FORMAT,
} from "../../const"
import { COVER_IMAGE } from "../../images"
import { useEffectiveWeddingDate } from "../../useEffectiveWeddingDate"
import { LazyDiv } from "../lazyDiv"

const DAY_OF_WEEK = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]

export const Cover = () => {
  const weddingDate = useEffectiveWeddingDate()
  return (
    <LazyDiv className="card cover">
      <div className="wedding-date">
        {weddingDate.format("YYYY")}
        <div className="divider" />
        {weddingDate.format("MM")}
        <div className="divider" />
        {weddingDate.format("DD")}
      </div>
      <div className="wedding-day-of-week">
        {DAY_OF_WEEK[weddingDate.day()]}
      </div>
      <div className="image-wrapper">
        <img src={COVER_IMAGE} alt="sample" />
      </div>
      <div className="subtitle">Save the date for the wedding of</div>
      <div className="names">
        {GROOM_FULLNAME}
        <div className="divider" />
        {BRIDE_FULLNAME}
      </div>
      <div className="info">{weddingDate.format(WEDDING_DATE_FORMAT)}</div>
      <div className="info">{LOCATION}</div>
    </LazyDiv>
  )
}
