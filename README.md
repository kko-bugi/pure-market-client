
![Home](https://github.com/kko-bugi/pure-market-client/assets/56028436/cfb04d89-13bb-4f17-bde7-e2111be3a1c6)


## 🎥 Live Service

[https://pure-market-client-kkobugi.vercel.app/](https://pure-market-client-kkobugi.vercel.app/)

## **✈️ Tech stacks**

### **Core**

- React 18
- JavaScript
- Recoil
- React Router

### Data Fetching

- Axios for using RESTful API

### **Styling**

- Styled Components

### **Data Visualization**

- SALY of Alzea Arafat for 3D assets
- Heaps Good Icons for icons 
- Own created Design System

### **CD**

- Vercel

## **🛰 Features**

### Farmers' Market

![Farmers' Market 1](https://github.com/kko-bugi/pure-market-client/assets/56028436/14d64f66-cff4-4e9c-a7ab-08aae2d2d96e)
![Farmers' Market 2](https://github.com/kko-bugi/pure-market-client/assets/56028436/72fec2e5-0775-4183-8c58-5892c65be4a7)

You can buy and sell agricultural products directly.
If you have agricultural products you want to sell, you can write a post yourself, 
and after completing the sale, please update the status to indicate whether the transaction is completed.

### Sharing 

![Sharing 2](https://github.com/kko-bugi/pure-market-client/assets/56028436/e31a43f6-39de-40aa-a8ee-d30cd9a524a4)

You can write posts for free sharing.
If sharing is completed, please update the status to indicate whether the sharing is completed.

### Recipes

![Recipes 2](https://github.com/kko-bugi/pure-market-client/assets/56028436/4e4d5d1b-a15c-4420-a7a0-7206edc6dd0f)


You can share your own recipes.
You can list various ingredients and quantities.

### **Authentication**

- Access Token & Refresh Token
    - When a user requires an Access Token, it is obtained using the refresh Token stored in cookies.
    - The Access Token is then stored locally.
- Conditional Routes
    - if you are not authenticated, any private routes **can't be accessed.**
    - if you are not authenticated, some features may **be restricted.**
    - In root, loader **prevent** users from `NOT AUTHENTICATED`.

## 🏎 Getting Started

### Development

1. Clone this repository

    ```jsx
    $ git clone https://github.com/kko-bugi/pure-market-client.git
    ```

2. Install node packages with npm

    ```jsx
    $ npm install
    ```

3. Start developing

    ```jsx
    $ npm run dev
    ```

## 🐛 Bug Report

[Issues](https://github.com/kko-bugi/pure-market-client/issues)

## 💻 Contribution Guide

### Pull Request

### Forked strategy

```jsx
# Fork this repository to yours.
$ git clone https://github.com/kko-bugi/pure-market-client.git

# Install npm packages and start this project.
$ npm install
$ npm run dev

# (Working on your own..!)

# After that
$ git commit [...]
$ git push origin [YOUR_REPOSITORY]

# Enroll pull-request!
```

### Commit message rules

Consider starting the commit message:
 
- `Feat` : prefix
  - when creating new feature.
- `Fix` : prefix
  - when fixing bug
- `Env` : prefix
  - when setting related to development environment
- `Refactor` : prefix
  - when code refactoring (e.g., optimizing code for efficiency)
- `Design` : prefix
  - CSS or design-related additions/modifications
- `Comment` : prefix
  - when adding or modifying comments
- `Docs` : prefix
  - adding or modifying internal documentation
- `Remove` : prefix
  - deleting files

## LICENSE

Not yet decided.
