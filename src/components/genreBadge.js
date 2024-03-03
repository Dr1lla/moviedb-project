import React from 'react';
import Badge from '@mui/material/Badge';

const GenreBadge = ({ genre }) => {
    return <Badge color="primary" variant="dot" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>{genre}</Badge>;
};

export default GenreBadge;
