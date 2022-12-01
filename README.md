
# Easy Buy Ecomerce App

Simple and responsive ecomerce web app developed using Node.Js Express and React.JS



## Run Locally

- Clone the project:

```bash
  git clone https://github.com/lfvm/EasyBuy_Ecomerce.git
```

- Go to the project directory:

```bash
  cd EasyBuy_Ecomerce
```

### Initialize API
- Go to server directory and install dependencies:
```bash
  cd server
```
```bash
  npm install
```

- Build Project and Start the server:
```bash
  npm run build
```
```bash
  npm start
```
### Initialize Web App
 - Open a new terminal and go to web app directory:
```bash
  cd EasyBuy_Ecomerce/web-app
```
 - Install dependencies and runn app
 ```bash
  npm install && npm start
```

After the last command a new window should open in your browser.

It is very important to intialize api whenever running the web application, otherwise
the following error will ocurr:

<img width="490" alt="app screenshot" src="https://user-images.githubusercontent.com/57450093/202343037-4ae6205a-dc77-49b8-9112-c614914c8382.png">



## Screenshots

<img width="495" alt="Captura de Pantalla 2022-12-01 a la(s) 17 46 52" src="https://user-images.githubusercontent.com/57450093/205182805-94cb67c1-9570-4a07-9717-d67d0274a28e.png">


## Features

- Vizualise Products
- Filter products by price
- Add products to cart
- Remove products from cart 
- Stripe payment integration
- Responsive App




## Tech Stack

**Client:** React, Material UI, TailwindCSS

**Server:** Node, Express, Fakestore Api, Stripe

