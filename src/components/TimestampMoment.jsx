"use client";

import Moment from "react-moment";

export default function TimestampMoment({ timestamp, css }) {
  return (
    <Moment fromNow className={css}>
      {timestamp}
    </Moment>
  );
}
