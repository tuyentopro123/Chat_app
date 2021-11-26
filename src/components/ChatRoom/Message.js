import React from 'react';
import { Avatar, Typography, Tooltip } from 'antd';
import styled from 'styled-components';
import { formatRelative } from 'date-fns/esm';
import { AuthContext } from '../../Context/AuthProvider';


// const WrapperStyled = styled.div`
//   margin-bottom: 10px;
  // .header {
  //   display: flex;
  //   flex-direction: row-reverse;
  //   margin-right: 15px;
  //   margin-bottom: 8px;
  // }
  // .body {
  //   display: flex;
  //   flex-direction: row-reverse;
  // }
  // .author {
  //   margin-left: 5px;
  //   font-weight: bold;
  //   font-size: 14px;
  //   margin: 8px 8px;
  // }
  // .date {
  //   margin-left: 10px;
  //   font-size: 11px;
  //   color: #a7a7a7;
  // }
  // .content {
  //   margin-right: 25px;
  //   padding: 8px;
  //   border-radius: 10px;
  //   background-color: #e4e6eb;
  // }
const WrapperStyled = styled.div`

  margin-bottom: 10px;
  .header.none{
    margin-bottom: 10px;
  }
  .author.none{
    margin-left: 5px;
    font-weight: bold;
  }
  .content.none{
    margin-left: 30px;
    margin-right: 25px;
    padding: 8px;
    border-radius: 10px;
    background-color: #e4e6eb;
  }
  .header.active {
    display: flex;
    flex-direction: row-reverse;
    margin-right: 15px;
    margin-bottom: 8px;
  }
  .body.active {
    display: flex;
    flex-direction: row-reverse;
  }
  .author.active {
    margin-left: 5px;
    font-weight: bold;
    font-size: 14px;
    margin: 8px 8px;
  }
  .content.active {
    margin-right: 25px;
    padding: 8px;
    border-radius: 10px;
    background-color: #e4e6eb;
  }
`;

function formatDate(seconds) {
  let formattedDate = '';

  if (seconds) {
    formattedDate = formatRelative(new Date(seconds * 1000), new Date());

    formattedDate =
      formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  }

  return formattedDate;
}

export default function Message({ text, currentUid, displayName, createdAt, photoURL }) {
  const {
    user: { uid },
  } = React.useContext(AuthContext);
  const headerClasses = currentUid === uid ? 'header active' : 'header none'
  const authorClasses = currentUid === uid ? 'author active' : 'author none'
  const bodyClasses = currentUid === uid ? 'body active' : 'body none'
  const contentClasses = currentUid === uid ? 'content active' : 'content none'

  return (
    <WrapperStyled>
      <div className={headerClasses}>
        <Avatar size='big' src={photoURL}>
          {photoURL ? '' : displayName?.charAt(0)?.toUpperCase()}
        </Avatar>
        <Typography.Text className={authorClasses}>{displayName}</Typography.Text>
        {/* <Typography.Text className='date'>
          {formatDate(createdAt?.seconds)}
        </Typography.Text> */}
      </div>
      <div className={bodyClasses}> 
      <Tooltip title={formatDate(createdAt?.seconds)}>
        <Typography.Text className={contentClasses}>{text}</Typography.Text>
      </Tooltip>
      </div>
    </WrapperStyled>
  );
}