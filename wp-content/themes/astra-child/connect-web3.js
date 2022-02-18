jQuery(document).ready(async function () {

    const contract_abi = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" }], "name": "ApprovalForAll", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256[]", "name": "ids", "type": "uint256[]" }, { "indexed": false, "internalType": "uint256[]", "name": "values", "type": "uint256[]" }], "name": "TransferBatch", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "id", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "TransferSingle", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "string", "name": "value", "type": "string" }, { "indexed": true, "internalType": "uint256", "name": "id", "type": "uint256" }], "name": "URI", "type": "event" }, { "inputs": [], "name": "_nftcreator", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "addressMintedBalance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "id", "type": "uint256" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address[]", "name": "accounts", "type": "address[]" }, { "internalType": "uint256[]", "name": "ids", "type": "uint256[]" }], "name": "balanceOfBatch", "outputs": [{ "internalType": "uint256[]", "name": "", "type": "uint256[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "baseExtension", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "baseURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "cost", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "deployedverified", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getRemainCollections", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" }], "name": "isApprovedForAll", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "isPaused", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_user", "type": "address" }], "name": "isWhitelisted", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maxMintAmount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maxSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_mintAmount", "type": "uint256" }], "name": "mint", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "nftPerAddressLimit", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "notRevealedUri", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "onlyWhitelisted", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bool", "name": "_state", "type": "bool" }], "name": "pause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "paused", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "remainTokenAmount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "reveal", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "revealed", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256[]", "name": "ids", "type": "uint256[]" }, { "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "safeBatchTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" }], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "_newBaseExtension", "type": "string" }], "name": "setBaseExtension", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "_newBaseURI", "type": "string" }], "name": "setBaseURI", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_newCost", "type": "uint256" }], "name": "setCost", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_activeCreater", "type": "address" }], "name": "setNftCreatedAccount", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_limit", "type": "uint256" }], "name": "setNftPerAddressLimit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "setNftRevealedURI", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "_notRevealedURI", "type": "string" }], "name": "setNotRevealedURI", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bool", "name": "_state", "type": "bool" }], "name": "setOnlyWhitelisted", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_newmaxMintAmount", "type": "uint256" }], "name": "setmaxMintAmount", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "tokenURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "uri", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "walletOfOwner", "outputs": [{ "internalType": "uint256[]", "name": "", "type": "uint256[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address[]", "name": "_users", "type": "address[]" }], "name": "whitelistUsers", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "whitelistedAddresses", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "withdraw", "outputs": [], "stateMutability": "payable", "type": "function" }];

    const NFTAddress = '0x23647cA0952331e52AB7eE0d8d02B17936ce886e';

    var today = new Date().toJSON().slice(0, 10).replace(/-/g, '');
    if (parseInt(today) < 20220201) {
        jQuery("#mint_nft_button").hide();
        jQuery("#mint_counter").hide();
        jQuery("#available_text").hide();
    } else {
        jQuery("#mint_coming").hide();
    }

    async function check_status() {
        const web3 = new Web3(window.ethereum)
        const NftToken = new web3.eth.Contract(contract_abi, NFTAddress);

        const remainNFT = await NftToken.methods.getRemainCollections().call();
        
        const minted = 10001- parseInt(remainNFT);
        jQuery('#available_text div h2 span b').text( minted+'/10000');

        const check_pause = await NftToken.methods.isPaused().call();

        if (!check_pause) {
            console.log(check_pause)
            jQuery("#mint_nft_button").hide();
            jQuery("#mint_counter").hide();

            jQuery("#mint_coming").show();
            jQuery("#mint_coming span span:nth-child(2)").text('MINT IS COMING AGAIN');
        }
    }

    if (typeof window.ethereum !== "undefined") {
        check_status();
    }

    jQuery("#connect_wallet").click(async function () {

        let currentAccount = null;
        if (typeof window.ethereum !== "undefined") {
            console.log("Metamask is installed")

            var ethereum = window.ethereum;
            ethereum.request({
                method: 'eth_requestAccounts'
            })

            ethereum
                .request({ method: 'eth_accounts' })
                .then(handleAccountsChanged)
                .catch((err) => {
                    console.error(err);
                });


            ethereum.on('accountsChanged', handleAccountsChanged);

            // For now, 'eth_accounts' will continue to always return an array
            function handleAccountsChanged(accounts) {
                if (accounts.length === 0) {
                    // MetaMask is locked or the user has not connected any accounts
                    console.log('Please connect to MetaMask.');
                } else if (accounts[0] !== currentAccount) {
                    currentAccount = accounts[0];
                    jQuery("#connect_wallet span span").text(currentAccount.substring(0, 5) + '...' + currentAccount.substring(currentAccount.length - 4, currentAccount.length));
                }
            }
        } else {
            console.log("not installed");
            alert("You have to create Metamask Wallet!")
            var URL = "https://metamask.io/download.html";
            var win = window.open(URL, '_blank');
        }

        try {
            await ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: '0x4' }],
            });
        } catch (switchError) {
            // This error code indicates that the chain has not been added to MetaMask.
            if (switchError.code === 4902) {
                try {
                    await ethereum.request({
                        method: 'wallet_addEthereumChain',
                        params: [{ chainId: '0x4' }],
                    });
                } catch (addError) {
                    // handle "add" error
                }
            }
            // handle other "switch" errors
        }
    });

    jQuery("#plus_amount div div div").click(function () {
        console.log('plus')
        let amount = parseInt(jQuery('#amount div h2').text());
        jQuery('#amount div h2').text(amount + 1);
    })

    jQuery("#minus_amount div div div").click(function () {
        let amount = parseInt(jQuery('#amount div h2').text());
        if (amount > 1) {
            jQuery('#amount div h2').text(amount - 1);
        }
    })

    jQuery("#mint_nft_button").click(async function () {
        console.log('I am clicked');
        let currentAccount = null;
        if (typeof window.ethereum !== "undefined") {
            var ethereum = window.ethereum;
            ethereum.request({
                method: 'eth_requestAccounts'
            })

            ethereum
                .request({ method: 'eth_accounts' })
                .then(handleAccountsChanged)
                .catch((err) => {
                    console.error(err);
                });

            ethereum.on('accountsChanged', handleAccountsChanged);

            // For now, 'eth_accounts' will continue to always return an array
            async function handleAccountsChanged(accounts) {
                if (accounts.length === 0) {
                    // MetaMask is locked or the user has not connected any accounts
                    console.log('Please connect to MetaMask.');
                } else if (accounts[0] !== currentAccount) {


                    try {
                        await ethereum.request({
                            method: 'wallet_switchEthereumChain',
                            params: [{ chainId: '0x4' }],
                        });
                    } catch (switchError) {
                        // This error code indicates that the chain has not been added to MetaMask.
                        if (switchError.code === 4902) {
                            try {
                                await ethereum.request({
                                    method: 'wallet_addEthereumChain',
                                    params: [{ chainId: '0x4' }],
                                });
                            } catch (addError) {
                                // handle "add" error
                            }
                        }
                        // handle other "switch" errors
                    }

                    currentAccount = accounts[0];
                    jQuery("#connect_wallet span span").text(currentAccount.substring(0, 5) + '...' + currentAccount.substring(currentAccount.length - 4, currentAccount.length));


                    const web3 = new Web3(window.ethereum)
                    const NftToken = new web3.eth.Contract(contract_abi, NFTAddress);
                    const amount = parseFloat(jQuery('#amount div h2').text());

                    jQuery('#mint_nft_button span span:nth-child(2)').text("Processing...");
                    jQuery('#mint_nft_button').css({ 'pointer-events': "none",'cursor':'default' });
                    NftToken.methods.mint(amount).send({
                        from: currentAccount,
                        value: amount * 0.05 * 10 ** 18,
                    }).then(res => {
                        check_status();
                        jQuery('#mint_nft_button span span:nth-child(2)').text("MINT");
                        jQuery('#mint_nft_button').css({ 'pointer-events': "",'cursor':'' });
                    }).catch(err=>{
                        console.log(err)
                        jQuery('#mint_nft_button span span:nth-child(2)').text("MINT");
                        jQuery('#mint_nft_button').css({ 'pointer-events': "",'cursor':'' });
                    });

                }
            }
        } else {
            console.log("not installed");
            alert("You have to create Metamask Wallet!")
            var URL = "https://metamask.io/download.html";
            var win = window.open(URL, '_blank');
        }

    })
});
