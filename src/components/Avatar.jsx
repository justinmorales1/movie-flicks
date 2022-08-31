import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const AvatarImage = () => {
    return (
        <Stack direction="row" spacing={2}>
            <Avatar
                alt="Remy Sharp"
                src="https://images.pexels.com/photos/886285/pexels-photo-886285.jpeg?auto=compress&cs=tinysrgb&w=600"
                sx={{ width: 56, height: 56 }}
            />
        </Stack>
    );
}

export default AvatarImage;
