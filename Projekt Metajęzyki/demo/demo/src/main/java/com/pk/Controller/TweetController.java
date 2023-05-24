package com.pk.Controller;

import com.pk.Entity.Tweet;
import com.pk.Repository.TweetRepository;
import com.pk.Services.TweetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TweetController {
@Autowired
    private  TweetService tweetService;



  @GetMapping()
  public List<Tweet> getTweets(){
      List<Tweet> tweetList = tweetService.list();
        return tweetList;
    }
    @GetMapping(value="{username}")
    public ResponseEntity<List> getTweetsByUserName(@PathVariable String username){
        List<Tweet> list = tweetService.getTweetsByUserName(username);
        return new ResponseEntity<>(list,HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity<Tweet> save(@RequestBody Tweet tweet){
      tweet = tweetService.addTweet(tweet);
      return  new ResponseEntity<>(tweet,HttpStatus.CREATED);
    }
    @DeleteMapping(value ="{id}")
    public  ResponseEntity<Tweet> delete(@PathVariable final Long id) {
       Tweet tweet = tweetService.deleteTweet(id);
        return new ResponseEntity<>(tweet, HttpStatus.OK);
    }
    @DeleteMapping("/deleteTweets")
    public void deleteAll(){
      tweetService.deleteTweets();
    }
}
