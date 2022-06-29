import { useEffect, useRef, useState } from "react";
import LazyLoad from "react-lazy-load";
export default function ImageLoadingPage() {
  const [imgTag, setImgTag] = useState<HTMLImageElement>();
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const img = new Image();
    img.src = "/31quizimg/1.jpeg";
    img.onload = () => {
      setImgTag(img);
    };
  }, []);

  const onClickPreload = () => {
    if (imgTag) divRef.current?.appendChild(imgTag);
  };
  return (
    <>
      <div className="filler" />
      <LazyLoad height={500}>
        <img src="/31quizimg/1.jpeg" />
      </LazyLoad>
      <div className="filler" />
      <LazyLoad height={500}>
        <img src="/31quizimg/2.jpeg" />
      </LazyLoad>
      <div className="filler" />
      <LazyLoad height={500}>
        <img src="/31quizimg/3.jpeg" />
      </LazyLoad>
      <div className="filler" />
      <LazyLoad height={500}>
        <img src="/31quizimg/4.jpeg" />
      </LazyLoad>
      <div className="filler" />
      <LazyLoad height={500}>
        <img src="/31quizimg/5.jpeg" />
      </LazyLoad>
      <div className="filler" />
      <LazyLoad height={500}>
        <img src="/31quizimg/6.jpeg" />
      </LazyLoad>
      <div className="filler" />
      <LazyLoad height={500}>
        <img src="/31quizimg/7.jpeg" />
      </LazyLoad>
      <div className="filler" />
      <LazyLoad height={500}>
        <img src="/31quizimg/8.jpeg" />
      </LazyLoad>
      <div ref={divRef}></div>
      <button onClick={onClickPreload}> 이미지 프리로드!!!</button> <br />
    </>
  );
}
