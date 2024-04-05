import React, { useState } from 'react';
// fontawesome 사용하기 위해 import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Navbar = ( {authenticate, setAuthenticate} ) => { 
  // 로그인 로그아웃을 위해 authenticate props
  console.log("로그인상태는", authenticate);
  
  // 메뉴 만들어주기
  const menuList = ["여성" , "Divided", "남성", "신생아/유아", "아동", "H&M Home", "Sale", "지속가능성", ];
  
  // 로그인페이지로 이동
  const navigate = useNavigate();
  // 로그인창으로 이동하는 함수
  const goToLogin = () => {
    navigate("/login")
  }
  // 로그아웃 클릭시 홈으로 이동하는 함수
  const goToLogout = () => {
    navigate("/")
    setAuthenticate(false);
  }

  // 검색하는 함수 만들기
  const search = (event) => {
    if(event.key === "Enter"){
      // 입력한 검색어를 읽어와서 
      let keyword = event.target.value;
      console.log("검색할내용은", keyword);
      // url을 바꿔준다
      navigate(`/?q=${keyword}`);
    }    
  };
  // 모바일,태블릿 메뉴창
  

  return (
    <div>     
      <div>
        {
          authenticate ? (
            <div className="login-button" onClick={goToLogout}>
              <FontAwesomeIcon icon={faUser} />
              <div>로그아웃</div>
            </div>
          ) : (
            <div className="login-button" onClick={goToLogin}>
              <FontAwesomeIcon icon={faUser} />
              <div>로그인</div>
            </div>
          )
        }
      </div>

      <div className="nav-section" onClick={() => {navigate('/')}}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1280px-H%26M-Logo.svg.png" width= {100}/>
      </div>

      <div className="menu-area">
        <ul className="menu-list">
          {
            menuList.map((menu) => (
              <li>{menu}</li>
            ))
          }
        </ul>
           
        <div className="search-container">
            <FontAwesomeIcon icon={faSearch} className="search-icon"/>
            {/* 검색하기 기능 만들기 */}
            <input type="text" className="search-box" onKeyDown={(event) => search(event)}/>
        </div>
      </div>
    </div>
  )
}

export default Navbar