import "./css/Flights.css";

export default function Flights() {
  return (
    <div className="flights">
      <div className="container f-center">
        <div className="flights__type">
          <div className="flights__type-airplane f-center">
            <box-icon type="solid" name="plane-alt" color="blue"></box-icon>
            <small>Flights</small>
          </div>
          <div className="flights__type-airplane f-center">
            <box-icon name="hotel" type="solid" color="blue"></box-icon>
            <small>Hotel</small>
          </div>
        </div>
        <div className="flights__time">
          <div className="flights__time-where">
            <div className="flights__time-where_done">
              <div>
                <small>Living From</small>
                <small className="place">Dubai</small>
              </div>
              <div className="airplane d-grid">
                <box-icon
                  name="plane"
                  type="solid"
                  color="gray"
                  rotate="90"
                ></box-icon>
              </div>
              <div>
                <small>Going To</small>
                <small className="place">New York</small>
              </div>
            </div>
            <div className="flights__time-where_prepare">
              <div>
                <div>
                  <small>Leave</small>
                  <box-icon
                    name="plane"
                    type="solid"
                    color="blue"
                    rotate="90"
                  ></box-icon>
                </div>
                <small className="place">23 Jan, Sat</small>
              </div>
              <div className="calender d-grid">
                <box-icon name="calendar" type="solid" color="gray"></box-icon>
              </div>
              <div>
                <div>
                  <small>Return</small>
                  <box-icon
                    name="plane"
                    type="solid"
                    color="blue"
                    rotate="270"
                  ></box-icon>
                </div>
                <small className="place">14 Jan, Thu</small>
              </div>
            </div>
          </div>
          <div className="flights__time-search">
            <box-icon name="search" color="white"></box-icon>
          </div>
        </div>
      </div>
    </div>
  );
}
