import React from "react";
import { Snackbar, Alert } from "@mui/material";

function SnackBar(props) {
    const { open, handleClose, message} = props;
    const vertical = 'top';
    const horizontal = 'center';
    return (
        <div>
            <Snackbar open={open} autoHideDuration={4000} onClose={handleClose} sx={{ maxWidth: 600 }} anchorOrigin={{ vertical, horizontal }}>
                <Alert onClose={handleClose} severity="info">
                    {message}
                </Alert>
            </Snackbar>
        </div>
    );
}

export default SnackBar;