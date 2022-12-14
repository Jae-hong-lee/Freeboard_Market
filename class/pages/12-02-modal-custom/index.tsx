import { Button, Modal } from "antd";
import { useState } from "react";

export default function ModalCustomPage() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [password, setPassword] = useState("");

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onChagePassword = (event) => {
    setPassword(event.target.value);
  };
  return (
    <>
      <Button onClick={showModal}>Open Modal</Button>
      <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        비밀번호 입력: <input type="password" onChange={onChagePassword} />
      </Modal>
    </>
  );
}
