import { Map } from "./map"
import CarIcon from "../../icons/car-icon.svg?react"
import BusIcon from "../../icons/bus-icon.svg?react"
import { LazyDiv } from "../lazyDiv"
import { LOCATION, LOCATION_ADDRESS } from "../../const"

export const Location = () => {
  return (
    <>
      <LazyDiv className="card location">
        <h2 className="english">Location</h2>
        <div className="addr">
          {LOCATION}
          <div className="detail">{LOCATION_ADDRESS}</div>
        </div>
        <Map />
      </LazyDiv>
      <LazyDiv className="card location">
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <BusIcon className="transportation-icon" />
          </div>
          <div className="heading">대중교통</div>
          <div />
          <div className="content">
            * 지하철 이용시
            <br />
            수인분당구 영통역 1번 출구
            <br />
            100m 직진 후
            <br />
            홈플러스에서 우회전 200m,
            <br />
            호원빌딩 4층 404호
            <br />
            (영통역에서 도보 7분)
          </div>
          <div />
          <div className="content">
            * 버스 이용 시
            <br />
            주변 정류장
            <br />
            - 영일중학교. 수원출입국외국인청
            <br />
            - 살구골공원, 영통역3번출구
            <br />
            - 영통홈플러스
            <br />
            - 동수원 세무소. 영통역2번출구
            <br />
            - 영통역
          </div>
        </div>
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <CarIcon className="transportation-icon" />
          </div>
          <div className="heading">자가용</div>
          <div />
          <div className="content">
            네이버 지도, 카카오 네비, 티맵 등 이용
            <br />
            <b>{'<본시그니처 주차장>'}</b> 검색
            <br />
            바로 옆 건물 주차타워(영통동 1009-2)로 안내됩니다.
            <br />
            지상 3층에 주차하신 뒤, 삿뽀로 입구로 들어오셔서 공용계단으로 한층 올라오시면 됩니다.
          </div>
          <div />
          <div className="content">
            <b>
              ※ 계단 이용이 어려우신 분들은 본건물 주차장에서 엘레베이터 이용하시고 
              차주만 주차타워에 주차하신 후 계단 이용 부탁드립니다.
            </b>
          </div>
        </div>
      </LazyDiv>
    </>
  )
}
