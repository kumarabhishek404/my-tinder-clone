import React, { useState, useEffect } from 'react';
import './SwipeActions.css'

import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';

import { connect } from 'react-redux';
import { repeat } from '../store/Action/cardActions';
import { dislike } from '../store/Action/cardActions';
import { flate } from '../store/Action/cardActions';
import { like } from '../store/Action/cardActions';
import { boom } from '../store/Action/cardActions';

function SwipeActions( props ) {

    const [likedLength, setLikedLength] = useState(0)


    const handleRepeat = () => {
        props.repeat()
    }

    const handleDislike = () => {
        alert('Swipe Left')
        props.dislike()
    }

    const handleFlate = () => {
        alert('Swipe Up')
        props.flate()
    }

    const handleLike = () => {
        props.like()
        console.log(props.liked);
    }

    const handleBoom = () => {
        alert('Boom')
        props.boom()
    }
    
    useEffect(() => {
        // if (props.like !== undefined) {
        //     setLikedLength(props.like.length)
        //     console.log(props.like);
        // }
        // else {
        //     setLikedLength(0)
        // }
        console.log(props.length)
        setLikedLength(props.length)
    }, [likedLength])
    
    
    return (
        <div className='swipe_container'>
            <div className='swipe_actions'>
                <IconButton onClick={handleRepeat} className='swipeButtons_repeat'>
                    <ReplayIcon fontSize='large' />
                </IconButton>
                <IconButton onClick={handleDislike} className='swipeButtons_left'>
                    <CloseIcon fontSize='large' />
                </IconButton>
                <IconButton onClick={handleFlate} className='swipeButtons_star'>
                    <StarRateIcon fontSize='large' />
                </IconButton>
                <IconButton onClick={handleLike} className='swipeButtons_right'>
                    <FavoriteIcon fontSize='large' />
                </IconButton>
                <IconButton onClick={handleBoom} className='swipeButtons_lightning'>
                    <FlashOnIcon fontSize='large' />
                </IconButton>
            </div>
        </div>
    )
}

// const mapStateToProps = (state) => {
//     return {
//         liked: state.cards.liked
//     }
// }

const mapDispatchToProps = (dispatch) => {
    return {
        repeat: () => dispatch(repeat()),
        dislike: () => dispatch(dislike()),
        flate: () => dispatch(flate()),
        like: () => dispatch(like()),
        boom: () => dispatch(boom())
    }
}

export default connect(null, mapDispatchToProps)(SwipeActions)
