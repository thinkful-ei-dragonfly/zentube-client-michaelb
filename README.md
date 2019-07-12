# zentube client

## Description

Currently works as a youTube clone.  Features to be added:

-comments associated with a timestamp on timeline.

-comments appear only at specific timesstamps when video is playing.

## STACK

Postgres, Express, React, Node

## SCREENSHOTS

Landing Page:
![screenshot](/screenshots/landing.png?raw=true)

View All Posts:
![screenshot](/screenshots/posts.png?raw=true)

Register:
![screenshot](/screenshots/register.png?raw=true)

View a single post:
![screenshot](/screenshots/view-post.png?raw=true)

Leave a comment:
![screenshot](/screenshots/leave-comment.png?raw=true)

## COMPONENTS
zentube-client-michaelb/
     src/
        components/
           App/
              App.js              Main routes
          CommentForm/
             CommentForm.js       CommentForm
          Header/
             Header.js            Header / Navigation
          LoginForm/
             LoginForm.js         Login Form
          PostListItem/
             PostListItem.js      List all posts
          RegistrationForm/
             RegistrationForm.js  Registration Form
          Utils/
             Utils.js             Various Utilites
          VideoPlayer/
             VideoPlayer.js       HTML5 video player

## Scripts

Start the application `npm start`
