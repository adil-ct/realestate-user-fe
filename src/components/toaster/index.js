import React from 'react'
import Stack from '@mui/material/Stack'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'

function Toaster(props) {
    const { open, handleClose, message, type, position } = props
    return (
        <Stack spacing={2} sx={{ width: '100%' }}>
            <Snackbar
                open={open}
                autoHideDuration={7000}
                onClose={handleClose}
                anchorOrigin={position}
            >
                <Alert
                    elevation={6}
                    variant="filled"
                    onClose={handleClose}
                    severity={type}
                    sx={{ width: '100%' }}
                >
                    {message}
                </Alert>
            </Snackbar>
        </Stack>
    )
}

export default Toaster
