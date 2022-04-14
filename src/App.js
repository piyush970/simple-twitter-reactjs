import React, {useState} from "react";

import TweetForm from "./components/Tweet/TweetForm";
import TweetList from "./components/Tweet/TweetList";

function App() {

  const [tweetList, setTweetList] = useState([]);
  // const [like, setLike] = useState('');

  const addTweetHandler = (tweet) => {
    setTweetList((prevTweets) => {
      return [{text: tweet, state: 'Like', id: Math.random().toString(),},...prevTweets,];
    });
  };

  // const likeChangeHandler = () => {
  //   if(like === 'Like'){
  //     setLike('Liked');
  //   }
  //   else if(like === 'Liked'){
  //     setLike('Disliked');
  //   }
  //   else if(like ==='Disliked'){
  //     setLike('Like')
  //   }
  // }
  
  const updateTweetHandler = (tweetId, likeState) => {
    setTweetList((prevTweets) => {
      return prevTweets.map(item => {
        if(item.id === tweetId){
          return {...item, state: likeState}
        }
        return item;
      });
    });
  };


  const deleteTweetHandler = (tweetId) => {
    setTweetList((prevTweets) => {
      const updatedTweets = prevTweets.filter(tweet => tweetId !== tweet.id);
      console.log({updatedTweets})
      return updatedTweets;
    });
  };

  let content = (
    <p style={{ textAlign: 'center' }}>No tweets found...</p>
  );

  if (tweetList.length > 0){
    content = (
      <TweetList 
      tweets={tweetList} 
      onDeleteItem={deleteTweetHandler} 
      onUpdate={updateTweetHandler}/>
    )
  }

  return (
    <div>
      <h2 style={{'textAlign': 'center','color':'DodgerBlue'}}>Twitter</h2>
      <TweetForm onAddTweet={addTweetHandler}/>
      {content}

    </div>
  );
}

export default App;
