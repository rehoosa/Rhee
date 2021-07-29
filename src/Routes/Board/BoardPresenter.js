import React from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes, { array } from "prop-types";
import styled from "styled-components";
import axios from "axios";

const MainBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

/* Board Box */
const BoardBox = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 1190px;
    padding: 0 25px;
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const MyTd = styled.td`
    display:block;
    height:20px;
    text-align:center;
`;

const MyTh = styled.tr`
    display:flex;
    text-align:center;
    margin:0 auto;
`;
const BoardWriteBox = styled.div`
    
`;

const BoardTable = styled.table`
    display:block;
    margin-top:20px;
`;

const MyInput=  styled.input`
    border: 5px solid whitesmoke;
    font-size : 28px;
`;

const BoardPresenter = ({
    data,
    title,
    date,
    btnClick,
    termChange,
    menuChange,
    btnSearch,
    loading,
    isLogined,
    nickname,
    searchTerm,
    searchMenu
}) => (
    <>
        {loading ? (<div>loading...</div>) : (
            <MainBox>
                <BoardBox>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <MyInput type="text" onChange={termChange} />
                    <select onChange={menuChange} name="menu">
                        <option value="hashtag">해시태그</option>
                        <option value="content">제목+내용</option>
                        <option value="writer">작성자</option>
                    </select>
                    <button onClick={btnSearch}>글 검색하기</button>
                    <br/>
                    <button onClick={btnClick}>글 작성하기</button>
                    <div>
                        <BoardTable>
                            <thead>
                                <MyTh>
                                    <td></td>
                                </MyTh>
                            </thead>
                            <tbody>
                                <tr>
                                    {data.map((content, index) => (
                                        <>
                                            <MyTd key={index * 3 + 1} className={"data_nickname"}>작성자 {content.nickname}</MyTd>
                                            <MyTd key={index * 3 + 2} className={"data_title"}><Link to={`/detail/${content.board_id}`}>제목 {content.title}</Link></MyTd>
                                            <MyTd key={index * 3 + 3} className={"data_date"}>일시 {content.date}</MyTd>
                                            <MyTd/>
                                        </>
                                    ))}
                                </tr>
                            </tbody>
                        </BoardTable>
                    </div>
                </BoardBox>
            </MainBox>
        )}
    </>
);

BoardPresenter.propTypes = {
    data: PropTypes.array,
    title: PropTypes.string,
    date: PropTypes.string,
    btnClick: PropTypes.func.isRequired,
    termChange: PropTypes.func.isRequired,
    menuChange: PropTypes.func.isRequired,
    btnSearch: PropTypes.func.isRequired,
    isLogined: PropTypes.bool,
    nickname: PropTypes.string,
    searchTerm: PropTypes.string,
    searchMenu: PropTypes.string
}

export default BoardPresenter;