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
import GoogleLogin from "react-google-login";
import { GoogleLogout } from "react-google-login";

function AddProfile({ profile }) {

    const [open, setOpen] = React.useState(false);

    const [person, setPerson] = useState('')
    const [ImageUrl, setImageUrl] = useState('')

    const [autherized, setAutherized] = useState(false)
    const [getEmail, setGetEmail] = useState({})



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

    const responseGoogle = (response) => {
        console.log(response.profileObj)
        setAutherized(true)
        profile(response.profileObj)
        setGetEmail(response.profileObj)
    }

    const logout = (response) => {
        setAutherized(false)
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
                    <div>
                        <p>
                        LogedIn as <small style={{ color: 'red' }}>{getEmail.email}</small>
                        </p>
                    </div>
                    <DialogContentText>
                        If you want to add your profile in "Tind-Talk" then you have to make make your acount first, then you can able to to add your photos inside it.
          </DialogContentText>
                    {
                        !autherized && (
                            // <GoogleLogin
                            //     clientId="465958398745-i98m3q243op25jrkvc0k6rsod66fc7ha.apps.googleusercontent.com"
                            //     buttonText="LogIn"
                            //     onSuccess={responseGoogle}
                            //     onFailure={responseGoogle}
                            //     cookiePolicy={'single_host_origin'}
                            //     isSignedIn={true}
                            // />
                            <GoogleLogin
                                clientId="465958398745-i98m3q243op25jrkvc0k6rsod66fc7ha.apps.googleusercontent.com" //TO BE CREATED
                                render={renderProps => (
                                    <Button variant="contained" color="primary"
                                        className="button"
                                        onClick={renderProps.onClick}
                                        disabled={renderProps.disabled}
                                    >
                                        LogIn
                                    </Button>
                                )}
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                cookiePolicy={'single_host_origin'}
                                isSignedIn={true}
                            />
                        )
                    }

                    {
                        autherized && (
                            // <GoogleLogout
                            // clientId="465958398745-i98m3q243op25jrkvc0k6rsod66fc7ha.apps.googleusercontent.com"
                            //     buttonText="LogOut"
                            //     onLogoutSuccess={logout}
                            // >
                            // </GoogleLogout>
                            <GoogleLogout
                                render={renderProps => (
                                    <Button variant="contained" color="secondary"
                                        className="logout-button"
                                        onClick={renderProps.onClick}
                                    >
                                        LogOut
                                    </Button>
                                )}
                                onLogoutSuccess={logout}
                            />
                        )
                    }

                    {
                        autherized ? (
                            <div>
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
                            </div>
                        )
                            :
                            <div>
                                <p>
                                    First you have to be autherized
                            </p>
                            </div>
                    }
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