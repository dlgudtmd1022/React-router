import React from "react";
import {useLocation, useSearchParams} from "react-router-dom";


const About = () => {
    // const location = useLocation();
    const[searchParams, setSearchParams] = useSearchParams();
    const detail = searchParams.get('detail');
    const mode = searchParams.get('mode');

    const onToggleDetail = () => {
        // 이벤트 함수, toggle은 항상 속성을 반대로 만들어주는 것을 의미함
        // setSearchParams는 현재 detail, mode 두 가지 상태변수를 처리합니다.
        // mode는 그대로 두고, detail의 경우는 true면 false로, false면 true로 뒤집어서 다시 세팅하도록 합니다.
        setSearchParams({mode, detail: detail === 'true' ? false : true});
    }

    const onIncreaseMode = () => {
        // mode의 다음 값으로 null이면 1, 아니면 (기존 값 + 1)로 저장
        // const nextMode = mode === null ? 1 : parseInt(mode) + 1; 왜 안되는지는 모르지만 아래로 변경
        const nextMode = mode === null || isNaN(parseInt(mode)) ? 1 : parseInt(mode) + 1;
        // 위에서 저장한 내용을 mode변수에 반영. detail은 그냥 불변성 유지를 위해서 뒤에 적음.
        setSearchParams({ mode: nextMode, detail});
    }

    return(
        <div>
            <h1>소개</h1>
            <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
            <p>쿼리스트링 : 사용안함 </p>
            <p>detail : {detail}</p>
            <p>mode : {mode}</p>
            <button onClick={onToggleDetail}>Toggle detail</button>
            <button onClick={onIncreaseMode}>mode + 1</button>
        </div>
    )
}

export default About;