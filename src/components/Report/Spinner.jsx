import React from "react";
import ReactLoading from "react-loading";
import { Row, Col } from "shards-react";

export default function Spinner({ color, witdh, height, type, text }) {
  return (
    <Row
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100%" }}
    >
      <div>
        <Col className="col-12 col-md-12 d-flex justify-content-center">
          <div>
            <ReactLoading
              type={type}
              color={color}
              witdh={witdh}
              height={height}
            />
          </div>
        </Col>
        <Col className="col-12 col-md-12 d-flex justify-content-center">
          <div>
            <p style={{ color: `${color}`, fontWeight: "bold" }}>{`${
              text || "Cargando..."
            }`}</p>
          </div>
        </Col>
      </div>
    </Row>
  );
}
