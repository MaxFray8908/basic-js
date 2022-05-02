const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  constructor(modif) {
    this.modif = modif;
  }

  encrypt(message, key) {
    if( !message || !key) { throw new Error('Incorrect arguments!')}

    message = message.toUpperCase();
    key = key.toUpperCase();
    let messageEncrypt = '';
    let indexCharKey = 0;

    for (let char of message) {
      let indexChar = this.alphabet.indexOf(char);

      if (indexChar !== -1) {
        messageEncrypt += this.alphabet[(this.alphabet.indexOf(key[indexCharKey]) + indexChar) % 26];
        indexCharKey++;
      }
      else {
        messageEncrypt += char;
      }

      if (indexCharKey >= key.length) { 
        indexCharKey = 0;
      }
    }

    if (this.modif === false){
      messageEncrypt = messageEncrypt.split('').reverse().join('');
    }

    return messageEncrypt;
  }

  decrypt(encryptedMessage, key) {
    if( !encryptedMessage || !key) { throw new Error('Incorrect arguments!')}

    key = key.toUpperCase();
    let messageDecrypt = '';
    let indexCharKey = 0;

    for (let char of encryptedMessage) {
      let indexChar = this.alphabet.indexOf(char);

      if (indexChar !== -1) {
        messageDecrypt += this.alphabet[(indexChar - (this.alphabet.indexOf(key[indexCharKey])) + 26 ) % 26];
        indexCharKey++;
      }
      else {
        messageDecrypt += char;
      }

      if (indexCharKey >= key.length) { 
        indexCharKey = 0;
      }
    }

    if (this.modif === false){
      messageDecrypt = messageDecrypt.split('').reverse().join('');
    }

    return messageDecrypt;
  }
}

module.exports = {
  VigenereCipheringMachine
};
