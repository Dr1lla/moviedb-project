import React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const UserInfo = ({ name, imageUrl }) => {
    return (
        <Stack direction="row" alignItems="center" spacing={1}>
            <Avatar alt={name} src={imageUrl} />
            <span>{name}</span>
        </Stack>
    );
};

export default UserInfo;
