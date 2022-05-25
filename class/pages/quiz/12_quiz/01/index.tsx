// 12-03 perv로 리팩토링
import { Button, Modal } from "antd";
import { useState } from "react";
import DaumPostcode from "react-daum-postcode";

export default function ModalCustomPage() {
  const handleComplete = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <DaumPostcode onComplete={handleComplete} />
    </>
  );
}
