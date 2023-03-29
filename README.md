# BlockChain project, which interact with deployed smart contract on Ethereum's blockchain 
This project allows a user to (a) utilise a smart contract of charity that can be deployed on Ethereum's blockchain, (b) connect the smart contract to a local repository, (c) interact with the smart contract through a frontend, and (d) customize frontend whilst still being connected to the smart contract. 

- (a): `Charity.sol`: Smart contract written in Solidity 
- (b): `javascript/app.js`: Interacting with the smart contract on Ethereum's blockchain - change two variables to add your own contract once you have deployed it.
- (c): `javascript/app.js`, `total.html`, and `index.html`: Intuitive and simple interaction between the html (frontend) and JavaScript (using web3.js to interact with the smart contract)
- (d): `assets`: It's a simple Html CSS template to customize the website. Which includes css, fonts, images, js, and sass

![image](https://user-images.githubusercontent.com/29563979/228442661-b9bc14be-ea32-475c-ab86-4a61c80d1620.png)

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
![image](https://user-images.githubusercontent.com/29563979/228442105-8249835a-a01a-4d75-aef2-dfb25760a229.png)

### How to see total donations?:
1. Simply land on the home page and you will see a section "Total Donation" in the nav bar.
2. Click on it
3. Now, Click on the button Get "Total Donations!"
3. Now, you can see the total donations
![image](https://user-images.githubusercontent.com/29563979/228442249-71138180-1f4f-498b-9c50-86e257987594.png)

### Published Contract:
- Contract Address: 0xd771c88f5Fee5241a1A9a3725c66FFEEc3B5d9c6
- ABI: [{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"donations","outputs":[{"internalType":"uint256","name":"date","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"}],"name":"getDonationFromAddress","outputs":[{"components":[{"internalType":"uint256","name":"date","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"internalType":"struct Charity.Donation","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLastDonation","outputs":[{"components":[{"internalType":"uint256","name":"date","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"internalType":"struct Charity.Donation","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalDonation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"setDonation","outputs":[],"stateMutability":"nonpayable","type":"function"}]

### Please read:
1. You need MetaMask for this project - it is injecting the web3
2. If you are using the pre-made project, remember switching to "Goerli Test Network" on MetaMask
