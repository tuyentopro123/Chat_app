import React from 'react'
import { Row, Col } from 'antd';
import UserInfor from './UserInfor';
import RoomList from './RoomList';
import styled from 'styled-components';

const SidebarStyled = styled.div`
  background: #0084ff;
  color: white;
  height: 100vh;
`;

export default function Sidebar() {
    return (
        <div>
            <SidebarStyled>
                <Row>
                    <Col span={24}><UserInfor/></Col>
                    <Col span={24}><RoomList/></Col>

                </Row>
            </SidebarStyled>
        </div>
    )
}
