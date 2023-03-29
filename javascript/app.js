
const  Web3 = require('web3');

window.App = {
	instance: "No instance has been initiated, yet.", // For the console
	network: "No network connected yet.", // For the console

  start: function(){
    let self = this

    self.fetchAccount()
    .then(function(account){

      $(document).on('click', '#getDonation', (event) => { // This is where you click to get the donation word //
        App.getTotalDonation(account) // Allows you to fetch the "getdonationWord" function from the smart contract //
      });

			$(document).on('click', '#setDonation', (event) => { // This is where you set the donation word
				let input = document.getElementById("newDonation").value; // This function allows you to put in a new donation word every time
				App.setDonation(account,input) // Allows you to fetch the "setdonationWord" function from the smart contract
      });

      return account
    })


  },

  fetchAccount: function(){ // Function for getting the account
    let self = this;

    return new Promise(function(res, rej){

      // window.ethereum.enable();
      // const accounts = web3.eth.getAccounts();
      // console.log(accounts)

      web3.eth.getAccounts(function(err, accounts) { // Getting the initial account balance so it can be displayed.
        if (err != null) {
			    document.getElementById("error").innerHTML = "Error: " + "There was an error fetching your accounts.";
          rej("There was an error fetching your accounts.")
        }

        if (accounts.length == 0) {
             window.ethereum.enable();
      const accounts = web3.eth.getAccounts();
      console.log(accounts)
			    // document.getElementById("error").innerHTML = "Error: " + "Couldn't get any accounts! Make sure your Ethereum client is configured correctly."; 
          // rej("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
    }

        res(accounts[0])

      });
    })
  },

  getTotalDonation:  function(account) { // Function for getting the donation Word
    let self = this;
    var output = self.instance.getTotalDonation.call({from: account},
      function(error, result)
      {
        total_donation = result.c[0]
			  
        document.getElementById("donationWordOutput").innerHTML = "€ " + total_donation ;
      }
    )
  
  },

  setDonation: function(account, input) { // Function for setting the donation word
		let self = this;

		let donationWord = new Promise(function(resolve, reject){
      self.instance.setDonation(input, {from: account}, function(err, res){
        resolve(res)
      })
    })

    Promise.resolve(donationWord)
    .then(function(string){
			console.log("setting the new donation: '"+input+"'"); // Showing the donation word in console
    })
  }

};


window.addEventListener('load', function() {
  if (typeof web3 !== 'undefined') {  // Checking if Web3 has been injected by the browser (Mist/MetaMask)

    window.web3 = new Web3(web3.currentProvider); // Use Mist/MetaMask's provider
    web3.version.getNetwork((err, netId) => {

      switch (netId) { // Allowing us to change between multiple Ethereum networks

        // NetId = 1 is Ethereum Main Net

        
        case "1":
          console.warn('You are using the Ethereum Main Network')
          var abi = [
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "donations",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "date",
                  "type": "uint256"
                },
                {
                  "internalType": "string",
                  "name": "message",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_from",
                  "type": "address"
                }
              ],
              "name": "getDonationFromAddress",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "date",
                      "type": "uint256"
                    },
                    {
                      "internalType": "string",
                      "name": "message",
                      "type": "string"
                    }
                  ],
                  "internalType": "struct Charity.Donation",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getLastDonation",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "date",
                      "type": "uint256"
                    },
                    {
                      "internalType": "string",
                      "name": "message",
                      "type": "string"
                    }
                  ],
                  "internalType": "struct Charity.Donation",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "string",
                  "name": "_message",
                  "type": "string"
                }
              ],
              "name": "setDonation",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ]
          var SharesContract = web3.eth.contract(abi);
          var contractAddress = '0x1DE44C17091176c7ad1063c348c21375C1cCe113' // Storing the contract address found in your Remix IDE
          var instance = SharesContract.at(contractAddress);
          App.instance = instance;
          App.network = 1;
          App.start();
          break

        //Currently, we are using this network
        case "5":
          console.warn('You are using the Goerli Test Network')
          var abi = 
          [{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"donations","outputs":[{"internalType":"uint256","name":"date","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"}],"name":"getDonationFromAddress","outputs":[{"components":[{"internalType":"uint256","name":"date","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"internalType":"struct Charity.Donation","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLastDonation","outputs":[{"components":[{"internalType":"uint256","name":"date","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"internalType":"struct Charity.Donation","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalDonation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"setDonation","outputs":[],"stateMutability":"nonpayable","type":"function"}]
          var SharesContract = web3.eth.contract(abi);
          var contractAddress = '0xd771c88f5Fee5241a1A9a3725c66FFEEc3B5d9c6' // Storing the contract address found in your Remix IDE
          var instance = SharesContract.at(contractAddress);
          App.instance = instance;
          App.network = 5;
          App.start();
          break
      

     
        default:
          console.warn('This is an unknown network. Please switch to either the Ropsten Test Network or the Ethereum Main Network.')
      }
    })

  } else {

    window.ethereum.enable();
      const accounts = web3.eth.getAccounts();
      console.log(accounts)
      
    console.warn("No web3 detected.");
  }

});
