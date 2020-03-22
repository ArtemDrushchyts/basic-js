class VigenereCipheringMachine {
    constructor( direct = true){
        this.direct = direct;
        this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        return this;
    }

    encrypt(message, key) {
        if(!message || !key) {
           throw 'Not implemented';
        }
        
        let encryptMessage = '';
    
        for(let i = 0, j = 0; i < message.length; i++){
            if(/[A-Za-z]/.test(message[i]) == true){
                encryptMessage += this.alphabet[(this.alphabet.indexOf(message[i].toUpperCase()) + this.alphabet.indexOf(key[j%key.length].toUpperCase())) % this.alphabet.length];
                j++;
            }else{
                encryptMessage += message[i];
            }
        }
        return this.direct? encryptMessage: encryptMessage.split('').reverse().join('');
    }

    decrypt(encryptedMessage, key) {

        if(!encryptedMessage || !key){
            throw 'Not implemented';
        }

        let message = '';
    
        for(let i = 0, j = 0; i < encryptedMessage.length; i++){
            if(/[A-Za-z]/.test(encryptedMessage[i]) == true){
                message += this.alphabet[(this.alphabet.length - this.alphabet.indexOf(key[j%key.length].toUpperCase()) + this.alphabet.indexOf(encryptedMessage[i].toUpperCase()))%this.alphabet.length];
                j++;
            }else{
               message += encryptedMessage[i];
            }
        }
        return this.direct ? message: message.split('').reverse().join(''); 
    }
    
}

module.exports = VigenereCipheringMachine;
