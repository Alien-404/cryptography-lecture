// require library
const prompt = require('prompt-sync')({sigint: true});

// algorithm
const bcrypt = require('bcrypt');
const {encrypt, decrypt} = require('./self'); // self made

let choose; // init var

do {
    // choose algorithm
    console.log('Simple Encrypt (self made) [1]\nBcrypt [2]\nExit [0]');
    choose = prompt('Choose : ');

    // logic check algorithm
    if(isNaN(choose)) {
        console.error('Please input a number!\n');
    } else {
        switch (Number(choose)) {
            case 0:
                choose = 0;
                break;
            case 1:
                console.log('\n=====Simple Algorithm=====\nencrypt [1]\ndecrypt[2]');
                const input = prompt('Choose : ');
                self(input);
                break;
            case 2:
                console.log('\n=====Bcrypt Algorithm=====\nencrypt [1]\ndecrypt[2]');
                const inputBcr = prompt('Choose : ');
                bcr(inputBcr);
                break;
            default:
                console.log('out of list!\n');
                break;
        }
    }

} while (choose != 0);

// self made algoritm
function self(input) {
    const n = Number(input);

    if(isNaN(n)) {
        console.error('Please input a number!\n');
    } else if (n == 1) {
        // get user input
        console.log('');
        const plainText = prompt('plain teks : ');

        // logic encrypt
        const encryptText = encrypt(plainText.toLowerCase());

        // print results
        console.log(`\n===== Results =====\nPlain Text : ${plainText}`);
        console.log(`encrypted : ${encryptText}\n`);
    } else if (n == 2) {
        // get user input
        console.log('');
        const encryptedText = prompt('enkripsi teks : ');

        // logic decrypt
        const decryptText = decrypt(encryptedText);

        // print results
        console.log(`\n===== Results =====\nencrypted : ${encryptedText}`);
        console.log(`decrypt : ${decryptText}\n`);
    }
    
}

// bcrypt algorithm
function bcr(input) {
    const n = Number(input);
    const saltRounds = 10;

    if(isNaN(n)) {
        console.error('Please input a number!\n');
    } else if (n == 1) {
        // get user input
        console.log('');
        const plainText = prompt('plain teks : ');

        // logic hash
        const encryptText = bcrypt.hashSync(plainText, saltRounds, (err, hash) => {
            if(err) {
                return err;
            } else {
                return hash;
            }
        });

        // print results
        console.log(`\n===== Results =====\nPlain Text : ${plainText}`);
        console.log(`encrypted : ${encryptText}\n`);
    } else if (n == 2) {
        // get input
        console.log('');
        const plainText = prompt('plain teks : ');

        console.log('');
        const encryptedText = prompt('enkripsi teks : ');
        
        // logic compare
        const decryptText = bcrypt.compareSync(plainText, encryptedText, (err, result) => {
            if(err) {
                return err;
            } else {
                return result;
            }
        })

        // print results
        console.log(`\n===== Results =====\nencrypted : ${encryptedText}`);
        console.log(`decrypt : ${decryptText}\n`);
    }
}
