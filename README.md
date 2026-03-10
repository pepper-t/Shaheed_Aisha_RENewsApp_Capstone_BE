# CAPSTONE PROJECT: Real Estate News App

The HouseTrap Free Zone website is an educational tool for people who want to learn about real estate investing without falling prey to get-rich-quick schemes.

In addition to a blog, the HouseTrap Free Zone Website is now introducing a real estate news app that will provide headlines about current real estate events around the world.

There is an email subscriber form for users to complete. This is where CRUD will be used for:

-Creating users: Submit name and email address via form
-Update: Change user information in their profile.
-Delete users: Remove user profile from system 



##### DEVELOPMENT PROCESS #####

WEBSITE OUTLINE: 

Four pages: Homepage, About, Blog, Real Estate News App, Subscriber page  

Links: Navigation bar - highlight clicked link for that page

Design: Header with an image based on website theme, images related to real estate investing, scams, education

FRONTEND TOOLS:
React
Router for navigating website
Axios for fetching data from news API

FUNCTION

The website uses a NewsAPI url for accessing real estate news headlines, NewsGrid.jsx. A contribution link is required in which I complied.

There is no need to register to view these articles. Just click to the page.

BACKEND SERVER TOOLS:
Mongo DB for database
Cors for connecting backend server to frontend
Nodemailer for using email subscriber form



# HELPFUL RESOURCES #

NEWSAPI INTEGRATION INTO FRONTEND CODE

I watched the following YouTube videos for learning how to use NewsAPI in my code:

1 - https://www.youtube.com/watch?v=m1Z9lVdlQuM&list=TLPQMDQwMzIwMjYplN5yEfqEBw&index=2

I also checked out his repo at https://github.com/AndyUGA/news-api-project-tutorial 


DESIGN IDEAS FOR REACT ROUTER NAVBAR:

https://github.com/sunil9813/NavBar-React-Router/tree/master/src/compoent (GorkCoder's repo)

https://youtu.be/LrGfxexv4nM?si=BVRznSuGSNacKrn5 - GorkCoder

[Google.com](https://share.google/aimode/BLrJTxOK66V0clwBP) 


CREATING LOGIN/SIGNUP FORM ON FRONTEND

I sought ideas from https://www.youtube.com/watch?v=S9eCBX-Re8A - Techy Web Dev and his repo: https://github.com/jahid28/React-Login-Form/blob/main/app.js 

I also edited the code from the fullstack superheroes project done in class: https://github.com/comeaudc/superhero_fe and https://github.com/comeaudc/superhero_server

I added the edited/updated code to components/Login.jsx and components/SignUp.jsx



## ERRORS/DEBUGGING ##

I updated my script to have React routers. None of the YouTube videos or repos associated with them had React routers. I adapted my script for that.

When the pages for http://localhost:5173 appeared blank the Google Dev Tool indicated that NewsGrid.jsx had an import/export issue on App.jsx. Originally, it was import { NewsGrid } from '../components'. 

When I updated as per Google's Dev Tool instructions to import NewsGrid from '../components' the router links appeared for each page.

REACT ROUTER NAVBAR DESIGN
I updated my navbar according to instructions from github and things went awry.
However, I was able to update my navbar following the instructions I googled and it came out as I had liked.

I edited an image of the housetrap image at canva.com. I used the image to create a transparent background for each page as well as a small logo image in the navbar.




### INSTRUCTIONS ###



##### FRONTEND & BACKEND SERVER: CONNECTED #####

GITHUB REPO -> FRONTEND:    https://github.com/pepper-t/Shaheed_Aisha_RENewsApp_Capstone_FE 

GITHUB REPO -> BACKEND:     https://github.com/pepper-t/Shaheed_Aisha_RENewsApp_Capstone_BE



