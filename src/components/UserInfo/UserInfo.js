import React from 'react';
import Avatar from '../Avatar';
import './userInfo.css';

const UserInfo = (props) => (
    <div className="user-info">
        <Avatar
            url="https://i.kinja-img.com/gawker-media/image/upload/s--KicRiFQ5--/c_scale,f_auto,fl_progressive,q_80,w_800/dh58ggwna1am5pfbvv9t.jpg"
            alt="Image de perfil"/>
        <span className="user-info__name">{props.user.username}</span>
    </div>
);

export default UserInfo;