# Model View Controller (MVC): TechBlog
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/GrassHopper12345/MVC-TechBlog/blob/main/LICENSE)

## Description
This application that follows a tech blog concept where a user can signup and login and out. THe user can also make tech related posts that are posted to the sites landing page. The user can utilize their own dashboard to post, edit, and delete. The user also has the ability to comment on individual posts.

## Table of Contents
- [Overview](#Overview)
- [User Story](#UserStory)
- [Acceptance Criteria](#AcceptanceCriteria)
- [Usage Instructions](#UsageInstructions)
- [Deployed Link](#DeployedLink)
- [GitHub Repository](#GitHubRepository)
- [ScreenShots](#ScreenShots)
- [Installation](#Installation)
- [Technologies](#Technologies)
- [License](#License)

## Overview


## User Story
```
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```
## Acceptance Criteria
```
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view posts and comments but I am prompted to log in again before I can add, update, or delete posts
```

## Usage Instructions
1. Follow the embedded link to the site below.
2. Signup by clicking the signup button in the top right corner and enter required login information.
3. If previously signed-up, select the login button in the top right corner and login with you user credentials.
4. Once logged-in, a use can create a post from their dashboard by clicking the `New Post` button
5. A user can view existing blog posts from the home screen by clicking on the post .cards and will be redirected to a comment on post page.
6. A user can comment on each post by clicking on the post and filling in the body of the comment input section.
7. A user can edit or delete their personal blog posts from their dashboard by clicking on the Delete of Edit buttons.
8. A user can log-out by clicking on the logout button in the top right hand corner of the navi.

## [Deployed Link](https://tech-blog-m-v-c-61d77c39b81f.herokuapp.com/)


## [GitHub Reppository](GrassHopper12345/MVC-TechBlog)


## Screenshots
![Alt text](<Screenshot 2024-01-31 at 4.12.50 PM.png>)

![Alt text](<Screenshot 2024-01-31 at 4.13.49 PM.png>)

![Alt text](<Screenshot 2024-01-31 at 4.14.20 PM.png>)

![Alt text](<Screenshot 2024-01-31 at 4.14.39 PM.png>)

![Alt text](<Screenshot 2024-01-31 at 4.14.55 PM.png>)

![Alt text](<Screenshot 2024-01-31 at 4.15.28 PM.png>)

## Installation
1. Follow the link above to the repository and clone the repository to your local machine using code editing software similar to VS Code editor.

## Technologies
- Express Handlebars: [5.2.0](https://www.npmjs.com/package/express-handlebars)
- Dynamic JavaScript
- Node.js [Version 16.18.1](https://nodejs.org/en/blog/release/v16.18.1/)
- Express.js:[Express.js](https://expressjs.com/en/starter/installing.html)
- Bcryptjs: [2.4.3](https://www.npmjs.com/package/bcryptjs)
- Dotenv: [8.6.0](https://www.npmjs.com/package/dotenv)
- Express: [4.17.1](https://www.npmjs.com/package/express)
- Express-Session: [1.17.1](https://www.npmjs.com/package/express-session)
- Handlebars.js: [4.7.6](https://www.npmjs.com/package/handlebars)
- Node MySql2: [2.3.3](https://www.npmjs.com/package/mysql2)
- Sequelize: [6.29.3](https://www.npmjs.com/package/sequelize)
- JSON:[ JSON](https://www.npmjs.com/package/json)
- License Badge: [Shields.io](https://shields.io/)
- Visual Studio Code: [Website](https://code.visualstudio.com/)
- Connect Session Store using Sequelize: [7.0.4](https://www.npmjs.com/package/connect-session-sequelize)

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/GrassHopper12345/MVC-TechBlog/blob/main/LICENSE)

MIT License

Copyright (c) 2024 BrianH

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Author
If you have any questions, please contact me at: [brian.hopper@live.com](brian.hopper@live.com).
My GitHub page is: [GrassHopper12345](https://github.com/Grasshopper12345)
