
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

![Farmers' Market 1](https://github.com/kko-bugi/pure-market-client/assets/56028436/67b46d31-7b1d-4e3d-9b63-5b87822843ba)
![Farmers' Marekt 2](https://github.com/kko-bugi/pure-market-client/assets/56028436/36ff24a5-3b81-4bfb-ba23-7436c83dd13d)
![Farmers' Market 3](https://github.com/kko-bugi/pure-market-client/assets/56028436/b4766cb5-3569-4acc-b6f4-974099ffeecb)


You can buy and sell agricultural products directly.
If you have agricultural products you want to sell, you can write a post yourself, 
and after completing the sale, please update the status to indicate whether the transaction is completed.

### Sharing 
![Sharing 1](https://github.com/kko-bugi/pure-market-client/assets/56028436/ebec9148-876c-4c83-a9ac-a2f4905871fe)
![Sharing 2](https://github.com/kko-bugi/pure-market-client/assets/56028436/2de44750-e647-4f61-98d7-8509cdb6bcd0)
![Sharing 3](https://github.com/kko-bugi/pure-market-client/assets/56028436/d939ce1e-0f85-43e8-acbd-28cdd4b99a96)

You can write posts for free sharing.
If sharing is completed, please update the status to indicate whether the sharing is completed.

### Recipes

![Recipes 2](https://github.com/kko-bugi/pure-market-client/assets/56028436/4e4d5d1b-a15c-4420-a7a0-7206edc6dd0f)
![Recipes 3](https://github.com/kko-bugi/pure-market-client/assets/56028436/6cbb633e-6f07-4f1a-9917-aa747cfe64bc)

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
