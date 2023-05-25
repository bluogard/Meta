package com.pk.Services;

import com.pk.Entity.Tweet;
import com.pk.Repository.TweetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TweetService {
@Autowired
    private TweetRepository tweetRepository;
    public  Tweet getTweet(Long id){
        return tweetRepository.findById(id).orElseThrow(() -> new RuntimeException());

    }
    public List<Tweet> list(){
        return tweetRepository.findAll();
    }
    public  List<Tweet> getTweetsByUserName(String username) {
        try {
            return tweetRepository.findByusername(username);
        }
        catch(RuntimeException e){
            return null;
        }
    }
    public Tweet addTweet(Tweet tweet){
        return tweetRepository.save(tweet);
    }
    public  Tweet deleteTweet(Long id){
        Tweet tweet = getTweet(id);
        tweetRepository.delete(tweet);
        return tweet;
    }
    public void deleteTweets(){
        tweetRepository.deleteAll();
    }
}
