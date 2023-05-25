package com.pk.Entity;

import lombok.Data;
import lombok.RequiredArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.LocalDate;
import java.time.LocalDateTime;
@Data
@Entity
public class Tweet {
 @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
 private Long tweetId;
 private String username;
 private String profileimage;
 private String tweettime;
 private String content;
 private int likes;
 private int retweets;

}
