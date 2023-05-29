import React, { useState } from "react";
import { Modal } from "antd";
import { IoSearchOutline } from "react-icons/io5";

import SearchSectionContainer from "@containers/search-section-container/SearchSectionContainer";
import "./SearchIcon.scss";

const SearchIcon = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <IoSearchOutline onClick={showModal} />

      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={720}
        style={{ top: "50px" }}
        footer={false}
      >
        <SearchSectionContainer />
      </Modal>
    </>
  );
};

export { SearchIcon };
