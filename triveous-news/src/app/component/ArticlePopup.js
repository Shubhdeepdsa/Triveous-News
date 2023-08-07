import React from 'react';
import { Dialog, DialogContent, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useUserAuth } from '../context/AuthContext';

const ArticlePopup = () => {
    const { selectedArticle, closeArticle } = useUserAuth();

    return (
        <Dialog open={Boolean(selectedArticle)} onClose={closeArticle} maxWidth="md">
            {selectedArticle && (
                <DialogContent>
                    <IconButton
                        aria-label="Close"
                        sx={{ position: 'absolute', top: '10px', right: '10px' }}
                        onClick={closeArticle}
                    >
                        <CloseIcon />
                    </IconButton>
                    <Typography variant="h6" sx={{ marginBottom: '16px' }}>
                        {selectedArticle.name}
                    </Typography>
                    <Typography variant="h5" sx={{ marginBottom: '16px' }}>
                        {selectedArticle.title}
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: '16px' }}>
                        {selectedArticle.description}
                    </Typography>
                </DialogContent>
            )}
        </Dialog>
    );
};

export default ArticlePopup;
