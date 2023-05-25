import React, { useState } from "react";
import { Drawer, Button } from "antd";

const CustomDrawer = ({ title, placement, closable, width, children }) => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Open Drawer
      </Button>
      <Drawer
        title={title}
        placement={placement}
        closable={closable}
        onClose={onClose}
        visibleProp={visible}
        width={width}
      >
        {children}
      </Drawer>
    </>
  );
};

export { CustomDrawer };
