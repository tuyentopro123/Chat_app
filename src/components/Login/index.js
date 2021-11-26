import React from 'react'
import { Row, Col, Button, Typography } from 'antd'
import { GoogleOutlined,FacebookOutlined } from '@ant-design/icons'
import "./Login.css";
import firebase, { auth } from '../../firebase/config'
import { addDocument, generateKeywords } from '../../firebase/services';

const {Title} = Typography

const fbProvider = new firebase.auth.FacebookAuthProvider()
const ggProvider = new firebase.auth.GoogleAuthProvider();

export default function Login() {
    
    const handleLogin = async (provider) => {
        const { additionalUserInfo, user } = await auth.signInWithPopup(provider)

        if(additionalUserInfo?.isNewUser) {
            addDocument('users', {
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                uid: user.uid,
                providerId: additionalUserInfo.providerId,
                keywords: generateKeywords(user.displayName?.toLowerCase()),
            })
        }
    }
    
   
    return (
        <div className="login">
            <Row justify='center' style={{ height: 747}}>
                <Col className="login_col" span={8}>
                    <Title className="login_title" style={{ textAlign: 'center'}} >Tealive App</Title>
                    <Button icon={<GoogleOutlined />} style={{ width: '100%', marginBottom: 5}}
                    onClick={() => handleLogin(ggProvider)}>
                        Đăng nhập bằng Google
                    </Button>
                    <Button icon={<FacebookOutlined />} style={{ width: '100%'}} 
                    onClick={() => handleLogin(fbProvider)}>
                        Đăng nhập bằng Facebook
                    </Button>
                </Col>
            </Row>
            
        </div>
    )
}
