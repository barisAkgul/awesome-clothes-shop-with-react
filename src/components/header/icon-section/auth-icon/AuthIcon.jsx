import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import { IoPersonOutline } from "react-icons/io5";
import { CgLogOff } from "react-icons/cg";

import LoginSectionContainer from "@containers/login-section-container/LoginSectionContainer";
import "./AuthIcon.scss";
import { useStore } from "@stores/index";

const AuthIcon = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user, signOut, onAuthStateChanged } = useStore();

  const handleLogout = async () => {
    try {
      await signOut();
    } catch (error) {
      console.log(error);
    }
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    onAuthStateChanged(); // Sayfa yenilendiğinde kullanıcı bilgisini kontrol et

    // Temizleme işlemi
    return () => {
      // İstediğiniz temizleme işlemlerini yapabilirsiniz
    };
  }, []);

  return (
    <>
      {!user ? (
        <IoPersonOutline onClick={showModal} />
      ) : (
        <div className="dropdown">
          <div className="user-name">
            <span>{user?.displayName}</span>
          </div>
          <div className="dropdown-content">
            <ul>
              <li>{user.email}</li>
              <li>Orders</li>
              <li>Dashboard</li>
              <li onClick={handleLogout}> Logout</li>
            </ul>
          </div>
        </div>
      )}

      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={500}
        style={{ top: "50px" }}
        footer={null}
      >
        <LoginSectionContainer />
      </Modal>
    </>
  );
};

export default AuthIcon;
