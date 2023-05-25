import { CustomDrawer } from "@components/common/drawer/CustomDrawer";
import Modal from "@components/common/modal/Modal";
import React, { useState } from "react";
import Stripe from "stripe";

const TestComp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <CustomDrawer
        title="Drawer Title"
        placement="right"
        closable={false}
        width={300}
      >
        <p>Drawer content</p>
        <p>Drawer content</p>
        <p>Drawer content</p>
      </CustomDrawer>
    </div>
  );
};

export default TestComp;
