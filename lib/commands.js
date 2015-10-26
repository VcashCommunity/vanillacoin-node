
var commands = module.exports.commands = [
    'backupWallet'
  , 'checkWallet'
  , 'databaseFind'
  , 'databaseStore'
  , 'dumpPrivKey'
  , 'encryptWallet'
  , 'getAccount'
  , 'getAccountAddress'
  , 'getAddressesByAccount'
  , 'getBalance'
  , 'getBlock'
  , 'getBlockCount'
  , 'getBlockHash'
  , 'getBlockTemplate'
  , 'getDifficulty'
  , 'getIncentiveInfo'
  , 'getInfo'
  , 'getMiningInfo'
  , 'getNetworkHashps'
  , 'getNewAddress'
  , 'getPeerInfo'
  , 'getRawTransaction'
  , 'getTransaction'
  , 'importPrivKey'
  , 'listReceivedByAccount'
  , 'listReceivedByAddress'
  , 'listSinceBlock'
  , 'listTransactions'
  , 'sendMany'
  , 'sendRawTransaction'
  , 'sendToAddress'
  , 'setTxFee'
  , 'validateAddress'
  , 'walletLock'
  , 'walletPassphrase'
  , 'walletPassphraseChange'
]

module.exports.isCommand = function(command) {
  command = command.toLowerCase()
  for (var i=0, len=commands.length; i<len; i++) {
    if (commands[i].toLowerCase() === command) {
        return true
    }
  }
}
