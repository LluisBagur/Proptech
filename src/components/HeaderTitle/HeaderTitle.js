import React from "react";
import "./HeaderTitle.css";

export function HeaderTitle(props) {
  const title = props.header;
  return (
    <div className="header-title">
      <h1> {title}</h1>
    </div>
  );
}
