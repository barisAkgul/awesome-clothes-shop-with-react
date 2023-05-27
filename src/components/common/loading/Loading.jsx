import React from "react";
import { Space, Spin } from "antd";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Space size="middle">
        <Spin size="large" />
      </Space>
    </div>
  );
};

export default Loading;
