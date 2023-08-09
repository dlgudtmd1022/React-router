import React from "react";
import {useParams} from "react-router-dom";

const data ={
    velopert: {
        name: '김민준',
        description: '리액트 개발자'
    },
    gildong: {
        name: '홍길동',
        description: '홍길동전 주인공'
    },
    lee: {
        name: '우리쭁미니',
        description: '아레나 고수'
    }
};

const Profile = () => {
    const params = useParams();
    const profile = data[params.username];
    if(!profile){
        return <div>존재하지 않는 사용자입니다.</div>
    }
    return (
        <div>
            <h3>
                {params.username}({profile.name})
            </h3>
            <p>{profile.description}</p>
        </div>
    );
};

export default Profile;