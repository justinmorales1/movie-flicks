import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const AvatarImage = () => {
    return (
        <Stack direction="row" spacing={2}>
            <Avatar
                alt="Remy Sharp"
                src="https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=800"
                sx={{ width: 56, height: 56 }}
            />
        </Stack>
    );
}

export default AvatarImage;
