import React, {useState} from "react";

import style from './TweetForm.module.css';
import Card from "../UI/Card";
import Button from '../UI/Button';

const TweetForm = (props) => {

    const [enteredTweet, setEnteredTweet] = useState('');
    

    const addTweetHandler = (event) => {
        event.preventDefault();
        if (enteredTweet.trim().length === 0){
            return;
        }
        props.onAddTweet(enteredTweet);
        console.log("entered data", enteredTweet)
        setEnteredTweet('');
    };

    const tweetChangeHandler = (event) => {
        setEnteredTweet(event.target.value);
      
    }

    return (
        <Card className={style.input}>
            <form onSubmit={addTweetHandler}>
                <input placeholder="Let's tweet.."
                value={enteredTweet} 
                onChange={tweetChangeHandler}></input>
                <Button type="submit" className="button">Tweet</Button>
            </form>
        </Card>
    );
};

export default TweetForm;