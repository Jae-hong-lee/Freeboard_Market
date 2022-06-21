import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { UPDATE_BOARD, CREATE_BOARD } from "./Write.create.board";
import WriteUI from "../news/Write.presenter";
import { Modal } from "antd";

export default function CreateBoardPage(props) {
  const [User, setUser] = useState("");
  const [Password, setPassword] = useState("");
  const [TitleContents, setTitleContens] = useState("");
  const [TitleInput, setTitleInput] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [addressInput, setAddressInput] = useState("");
  const [adreeZipcode, setAddressZipcode] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [fileUrls, setFileUrls] = useState(["", "", ""]);
  // 이미지배열

  const [ErrorUser, setErrorUser] = useState("");
  const [ErrorPw, setErrorPw] = useState("");
  const [ErrorTitleContents, setErrorTitleContents] = useState("");
  const [ErrorTitleInput, setErrorTitleInput] = useState("");

  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

  function onChangeUser(event) {
    setUser(event.target.value);
    if (event.target.value !== "") {
      setErrorUser("");
    }
    if (event.target.value && Password && TitleContents && TitleInput) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }
  function onChangePw(event) {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setErrorPw("");
    }
    if (User && event.target.value && TitleContents && TitleInput) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }
  function onChangeTitleContents(event) {
    setTitleContens(event.target.value);
    if (event.target.value !== "") {
      setErrorTitleContents("");
    }
    if (User && Password && event.target.value && TitleInput) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }
  function onChangeTitleInput(event) {
    setTitleInput(event.target.value);
    if (event.target.value !== "") {
      setErrorTitleInput("");
    }
    if (User && Password && TitleContents && event.target.value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }
  // 유튜브 url
  function onChangeYoutubeUrl(event) {
    setYoutubeUrl(event.target.value);
  }
  // 디테일 주소
  const onChangeAddressDetail = (event) => {
    setAddressDetail(event.target.value);
  };

  // 이미지 여러개 넣기
  const onChangeFileUrls = (fileUrl, index) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  const [createBoard] = useMutation(CREATE_BOARD);

  const SubmitButtonClick = async () => {
    if (!User) {
      setErrorUser("작성자가 입력되지 않았습니다.");
    }
    if (!Password) {
      setErrorPw("비밀번호가 입력되지 않았습니다.");
    }
    if (!TitleContents) {
      setErrorTitleContents("제목을 작성해주세요");
    }
    if (!TitleInput) {
      setErrorTitleInput("내용을 작성해주세요");
    }
    if (User && Password && TitleContents && TitleInput) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer: User,
              password: Password,
              title: TitleContents,
              contents: TitleInput,
              youtubeUrl,
              boardAddress: {
                zipcode: adreeZipcode,
                address: addressInput,
                addressDetail,
              },
              images: fileUrls,
            },
          },
        });
        console.log(result);
        // result 값 확인
        Modal.success({
          content: "게시글이 등록되었습니다!",
        });
        router.push(`/boarder/${result.data.createBoard._id}`);
      } catch (error) {
        Modal.error({
          title: "게시글 등록 실패!",
        });
      }
    }
  };

  const [updateBoard] = useMutation(UPDATE_BOARD);
  const UpdateButtonClick = async () => {
    const currentFiles = JSON.stringify(fileUrls);
    const defaultFiles = JSON.stringify(props.data.fetchBoard.images);
    const isChangedFiles = currentFiles !== defaultFiles;

    if (
      !TitleContents &&
      !TitleInput &&
      !youtubeUrl &&
      !addressInput &&
      !addressDetail &&
      !adreeZipcode &&
      !isChangedFiles
    ) {
      Modal.error({
        title: "수정한 내용이 없습니다.",
      });
      return;
    }

    if (!Password) {
      Modal.error({
        title: "비밀번호를 입력하세요.",
      });
      return;
    }

    const Editvariables = {};
    if (TitleContents) Editvariables.title = TitleContents;
    if (TitleInput) Editvariables.contents = TitleInput;
    if (youtubeUrl) Editvariables.youtubeUrl = youtubeUrl;
    if (addressInput || addressDetail || adreeZipcode) {
      Editvariables.boardAddress = {};
      if (adreeZipcode) Editvariables.boardAddress.zipcode = adreeZipcode;
      if (addressInput) Editvariables.boardAddress.address = addressInput;
      if (addressDetail)
        Editvariables.boardAddress.addressDetail = addressDetail;
    }
    try {
      await updateBoard({
        variables: {
          updateBoardInput: Editvariables,
          password: Password,
          boardId: router.query.boardId,
        },
      });
      Modal.success({
        content: "게시물 수정 완료!!",
      });
    } catch (error) {
      Modal.error({
        title: "수정 실패",
      });
    }
    router.push(`/boarder/${router.query.boardId}`);
  };
  // isModalView
  const [isModalView, setisModalView] = useState(false);

  const onToggleModal = () => {
    setisModalView((perv) => !perv);
  };

  const handleComplete = (data) => {
    console.log(data);
    onToggleModal();
    setAddressInput(data.address);
    setAddressZipcode(data.zonecode);
  };

  // 이미지 초기값 세팅 (Edit)
  useEffect(() => {
    if (props.data?.fetchBoard.images?.length) {
      setFileUrls([...props.data?.fetchBoard.images]);
    }
  }, [props.data]);

  return (
    <WriteUI
      onChangeFileUrls={onChangeFileUrls}
      fileUrls={fileUrls}
      // 이미지 추가
      SubmitButtonClick={SubmitButtonClick}
      UpdateButtonClick={UpdateButtonClick}
      onChangeTitleInput={onChangeTitleInput}
      onChangeTitleContents={onChangeTitleContents}
      onChangePw={onChangePw}
      onChangeUser={onChangeUser}
      ErrorUser={ErrorUser}
      ErrorPw={ErrorPw}
      ErrorTitleContents={ErrorTitleContents}
      ErrorTitleInput={ErrorTitleInput}
      // Edit
      data={props.data}
      isEdit={props.isEdit}
      isActive={isActive}
      // 유튜브
      onChangeYoutubeUrl={onChangeYoutubeUrl}
      // 주소
      handleComplete={handleComplete}
      onToggleModal={onToggleModal}
      isModalView={isModalView}
      addressInput={addressInput}
      adreeZipcode={adreeZipcode}
      onChangeAddressDetail={onChangeAddressDetail}
    />
  );
}
