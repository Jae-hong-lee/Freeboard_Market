// 12-03 perv로 리팩토링
import { Button, Modal } from "antd";
import { useState } from "react";
import DaumPostcode from "react-daum-postcode";

export default function ModalCustomPage() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  // const showModal = () => {
  //   // 현재값이 true 니까 기존값에 ! 붙이면 false
  //   setIsModalVisible((perv) => !perv);
  // };

  // 똑같은거 반복되니까 toggle로 통일시킴. ok, cancel 부분 교체
  const onToggleModal = () => {
    setIsModalVisible((perv) => !perv);
  };

  const handleComplete = (data: any) => {
    console.log(data);
    onToggleModal();
  };

  return (
    <>
      <Button onClick={onToggleModal}>Open Modal</Button>
      {/* 모달 삭제하고 새로 만드는 방법 */}
      {isModalVisible && (
        <Modal visible={true} onOk={onToggleModal} onCancel={onToggleModal}>
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      )}

      {/* 모달 숨겼다가 나타나게 하는 방법
        <Modal visible={true} onOk={handleOk} onCancel={handleCancel}>
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
     */}
    </>
  );
}
