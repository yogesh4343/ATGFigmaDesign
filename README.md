
⭐️ This is a Project Link
https://65f5bb3e9a02abd2021c98dd--gregarious-kulfi-8673cb.netlify.app/


# Sample web repository
## _Code architecture followed by Yogesh Project._

https://65f5bb3e9a02abd2021c98dd--gregarious-kulfi-8673cb.netlify.app/

 ✨ This repository showing that how we are using clean code architecture, folder structure, and component reusability.✨

## Features

- _**Functionality**_  : Work correctly, efficiently, and robustly.
- _**Readability**_    : The primary audience for our code is other developers.
-  _**Extensibility**_ : Well-designed code should be extensible as a building                           block for solving new problems.
- _**Scalability**_    : The code that can scale along with the need of your                            business.

## Tech

- [React](https://reactjs.org/) - HTML enhanced for web apps!
- [TailWind Css] - Tailwind CSS is the greatest CSS framework for the Developers.


## Installation

Requires [Node.js](https://nodejs.org/)  to run.

Install the dependencies and devDependencies and start the server.

```sh
cd sample-web
npm i or npm install
node start
```

### Package manager - Npm
This project is using Npm as package manager, if you do not have this installed on your machine please start by looking at the [Npm docuentation and tutorials]([https://classic.yarnpkg.com/en/docs](https://docs.npmjs.com/)). After installing the package manager the following commands will be availible for you:
- `npm install` - Installing dev dependencies unless `mode=production`
- `npm start` - Starting the project
- `npm run build` - Building the source files

If you seem to still have issues with these commands, try running `yarn cache clean` and do `yarn install`



## Archirecture and Project structure

This project follows the `Clean Architecture`, and hence have focused the structuring of the project on the standard practices that are recommended by the `Clean Architecture`. You will find we have focused on `de-coupling` and `reusability` of the code


This project is structured in the following way:

```
├── .git
├── .gitignore
├── package.json
├── tailwind.config.js
├── public
|  └── index.html
├── README.md
├── src
| └── App.css
| └── App.js
| └── imdex.css
| └── imdex.js
|  ├── App.css
|  ├── assets
|  |  └── DropDown.jsx
|  |  └── FooterCont.jsx
|  |  └── FooterIcon.jsx
|  |  └── FooterName.jsx
|  |  └── FooterTextHeading.jsx
|  |  └── Heading.jsx
|  |  └── InputForm.jsx
|  |  └── Login.jsx
|  |  └── Para.jsx
|  |  └── Search.jsx
|  |  └── SignUp.jsx
|  |  └── Tag.jsx
|  |  ├── buttons
|  |     └── Buttons.jsx
|  |     └── FormBtn.jsx
|  |     └── LoginBtn.jsx
|  ├── Components
|  |  └── Card.jsx
|  |  └── Cards.jsx
|  |  └── Footer.jsx
|  |  └── Heading.jsx
|  |  └── LargeCard.jsx
|  |  └── NavBar.jsx
|  |  └── Testnomials.jsx
|  ├── Images
|  |  └── Logo.png
|  |  └── facebook.webp
|  |  └── google.webp
|  |  └── image.png
|  |  └── img1.png
|  |  └── img2.png
|  |  └── img3.png

     [File structure is recursive]
```

**pages** - There is a index.js file where we have already defined the route component. Now when you create a new page you have to add the route in the routes group. 

## How should a Page component look
A React component will look the same if it is a "Page" or just a heading somewhere, the only difference there is placement of it. These rules or guidelines should therefore be followed regardless to make it easier for new developers to join the project. 


**Components** - Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. They are sometimes called "presentational components" and the main concern is how things look. If any other components need to use the component placed here, then it should be moved to the common `Components` folder.


## License

** Personal Project **
