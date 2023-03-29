# BlockChain project, which interact with deployed smart contract on Ethereum's blockchain 
This project allows a user to (a) utilise a smart contract of charity that can be deployed on Ethereum's blockchain, (b) connect the smart contract to a local repository, (c) interact with the smart contract through a frontend, and (d) customize frontend whilst still being connected to the smart contract. 

- (a): `Charity.sol`: Smart contract written in Solidity 
- (b): `javascript/app.js`: Interacting with the smart contract on Ethereum's blockchain - change two variables to add your own contract once you have deployed it.
- (c): `javascript/app.js`, `total.html`, and `index.html`: Intuitive and simple interaction between the html (frontend) and JavaScript (using web3.js to interact with the smart contract)
- (d): `assets`: It's a simple Html CSS template to customize the website. Which includes css, fonts, images, js, and sass

### Get Started
1. Clone Repository
2. cd To Repository
3. Run `npm install`
4. Run local server: `npm run dev`
5. Edit changes to the template in a code editor. Changes are automatically shown on localhost. 

### The smart contract
This repository is connected to a deployed contract on Goerli Test Network. The smart contract in this repository [Charity.sol] is included setDonation(), getTotalDonation(), getLastDonation(), getDonationFromAddress(). To add your own contract:

1. Use the smart contract in this repository as your template
2. Go to Remix IDE (https://remix.ethereum.org/) and try interacting with the template to check that everything works
3. Deploy the contract 
4. Go to [app.js] and change the `ABI` and `var contractAddress`

### Secret.sol
Our  contract is written in Solidity and has two main funcitons:
- `setDonation` allows the user to donate the money "amount of donation"
- `getTotalDonation`: retrieving the total "total donations"
- `getLastDonation`: retrieving the latest "last donation"
- `getDonationFromAddress`: retrieving the donation "donation from particular person"


### How To Donate?:
1. Simply land on the home page and you will sse the donate now button.
2. Click on it
3. Fill the amount (all the other details are not important)
3. Submit the buttom "Donate Now"

### How to see total donations?:
1. Simply land on the home page and you will see a section "Total Donation" in the nav bar.
2. Click on it
3. Now, Click on the button Get "Total Donations!"
3. Now, you can see the total donations


### Please read:
1. You need MetaMask for this project - it is injecting the web3
2. If you are using the pre-made project, remember switching to "Goerli Test Network" on MetaMask
