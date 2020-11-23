import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import './Cards.css';
import axios from '../axios';

import { connect } from 'react-redux';
import { createCards } from '../store/Action/cardActions';
import { addLikes } from '../store/Action/cardActions';

function Cards(props) {

    const [people, setPeople] = useState([])

    const [likes, setLikes] = useState([])

    useEffect((props) => {
        async function fetchData() {
            const req = await axios.get("/tinder/cards");

            setPeople(req.data);
        }

        fetchData();
    }, [props.liked])

    // Put all cards in store
    props.createCards(people)
    console.log(props.allCards)

    const swiped = (direction, nameToDelete) => {
        console.log('removing', direction, nameToDelete);
        likes.push(nameToDelete)
        props.addLikes(likes)
        console.log(likes);
    }

    const outOfFrame = (name) => {
        console.log(name, 'left the screen');
    }

    return (
        <div className='cards'>
            <div className='cardsContainer'>
                <div className='cardsWrapper'>
                    {props.allCards.map(person => (
                        <TinderCard
                            className='swipe'
                            key={person.name}
                            preventSwip={['up', 'down']}
                            onSwipe={(dir) => swiped(dir, person.name)}
                            onCardLeftScreen={() => outOfFrame(person.name)}
                        >
                            <div
                                className='card'
                                style={{ backgroundImage: `url(${person.imgUrl})`, objectFit: 'contain' }}
                            >
                                <h3>{person.name}</h3>
                            </div>
                        </TinderCard>
                    ))}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        allCards: state.cards.allCards,
        liked: state.cards.liked
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createCards: (cards) => dispatch(createCards(cards)),
        addLikes: (like) => dispatch(addLikes(like))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
