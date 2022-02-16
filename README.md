
# Block Chain Web 3.0

**Here we are created fully working Block-Chain Application with ReactJs and Solidity. And we implemented the Alchemy for virtualization purposes. Finally we used ropsten for local testing and deployed on ropsten using hardhat**

**Project Link** - ***https://alanbinu-crypto.web.app/***

## Tech We Used

- ReactJs
- Firebase Hosting
- Firebase Auth
- Solidity
- Alchemy
- Ropsten
- Hardhat
- Ropsten Etherscan

## Features

- Send Etherium
- Can able to view all the transacations

## Steps to run in your machine

You need to install MetaMask in your browser  :  https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en  and creeate one account.

Create on account in Alchemy (for virtualization purposes) : https://dashboard.alchemyapi.io/ and create one app


#### Run the following commands
```
clone this repo
```
Go to both folders and run thew following command

```
npm install
```
Go to Alchemy and copy thr HTTP ID of the app that we created --> and paste it in smart_contract/hardhat.config.js
```
url : "<HTTP ID>"
```

Then go to MetaMask and copy the Eth account PRIVATE ID under Account Details and paste it in smart_contract/hardhat.config.js
```
accounts :["PRIVATE KEY"]
```

Then run the following command in smart_contract root folder

```
npx hardhat run scripts/deploy.js --network ropsten
```

The you can see that some compiled files are generated and also one DEPLOYED ADDRESS copy that address --> go to client/src/utils/constants.js
```
export const contractAddress = "<DEPLLOYED ADDRESS>"
```

Then go to smart_contract/artifact/contracts/Transactions/ and copy the Transacation.json (which contains all our contract details in json form) ---> and paste it into client/src/utils/

## NOTE:<br>

Inoder to run this application it required some gas (some kind of fee), so your must need some Eth<br><br>
For testing purposes, here comes ROPSTEN. It provide free Eth for testing purposes.<br>
To claim free test Eth go to your MetaMask -> Network Settings -> Turn ON test network and connect to "Ropsten test network".<br><br>
Then copy your account address and go to : https://faucet.egorfine.com/ and paste your address and claim free test Eth of 0.300 Eth.<br>

### Feel Free to contact me any time, always happy to help 💖

#### Hope you liked this project, don't forget to ⭐ the repo.
