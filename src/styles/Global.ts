import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
   :root {
    --primary: #000;
    --secondary: #15181C;
    --search: #202327;
    
    --gray: #7A7A7A;
    --outline: #2F3336;
    --retweet: #00C06B;
    --like: #E8265E;
    
    --gray-7d: #6e767d;
    --gray-d9: #d9d9d9;
    --twitter: #33A1F2;
    --twitter-dark-hover: #011017;
    --twitter-light-hover: #2C8ED6;
    --twitter-menubar-hover: rgba(217,217,217, 0.1);

    --sidebar-item-hover: rgba(255, 255, 255, 0.03);

    --button-follow-color: #0f1419;
    --button-follow-hover: #d7dbdc;

    --button-color: #ffffff;
    --button-tweet: #7856ff;
    --button-tweet-hover: #6c4de6;

    --button-show-more-color: #1d9bf0;

    --button-unfollow-color: #f4212e;
    --button-unfollow-background: rgba(244, 33, 46, 0.1);
    --button-unfollow-border-color: rgb(103, 7, 15 );

    --button-tweet-outlined: #eff3f4;
    --button-tweet-outlined-hover: rgba(239, 243, 244, 0.1);
    --button-outlined-border: rgb(83, 100, 113);
  }
  
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: var(--gray-d9);
  }


  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;

    height: 100%;
    width: 100%;
  }

  html {
    background: var(--primary);
  }

 *, input, button {
   background: none;
   border: 0;

   font-family: -apple-system, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
 }
`;
