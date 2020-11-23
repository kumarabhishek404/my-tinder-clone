import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import PersonIcon from '@material-ui/icons/Person'
import axios from '../axios';
import IconButton from '@material-ui/core/IconButton';

function AddProfile() {

    const [open, setOpen] = React.useState(false);

    const [person, setPerson] = useState('')
    const [ImageUrl, setImageUrl] = useState('')

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        if (person !== '' && ImageUrl !== '') {
            console.log('submited', person, ImageUrl)
            axios.post('/tinder/cards', { name: person, imgUrl: ImageUrl })
                .then((res) => {
                    console.log(res.data)
                    setOpen(false)
                })
                .catch((err) => {
                    console.log(err)
                    setOpen(false);
                })
        }
        else {
            alert('Please fill all the inputs')
        }

    }

    return (
        <div>
            <IconButton>
                <Button color="primary" onClick={handleClickOpen}>
                    <PersonIcon fontSize='large' className='header_icon' />
                </Button>
            </IconButton>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add Profile</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        If you want to add your profile in "Tind-Talk" then you have to make make your acount first, then you can able to to add your photos inside it.
          </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="person"
                        label="Name"
                        type="text"
                        value={person}
                        onChange={e => setPerson(e.target.value)}
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="image"
                        label="Image URL"
                        type="text"
                        value={ImageUrl}
                        onChange={e => setImageUrl(e.target.value)}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
          </Button>
                    <Button onClick={handleSubmit} color="primary">
                        Add
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default AddProfile;