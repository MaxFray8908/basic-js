const { VigenereCipheringMachine } = require('./vigenere-cipher.js');


const directMachine = new VigenereCipheringMachine(false);

// const reverseMachine = new VigenereCipheringMachine(false);

// directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'

// directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'

// reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 
// reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'


console.log(directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse'));

