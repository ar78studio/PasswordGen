
const button1 = document.getElementById('pass1')
const button2 = document.getElementById('pass2')
const button3 = document.getElementById('pass3')
const button4 = document.getElementById('pass4')
const button5 = document.getElementById('pass5')
const button6 = document.getElementById('pass6')

// let randPassword1
// let randPassword2
// let randPassword3
// let randPassword4
// let randPassword5
// let randPassword6

// let switchArr = switchArray()

// function switchArray () {
//     if ( document.getElementById('pass-13').checked = true) {
//         randPassword1 = arrayThirteen
//     } 
//     if ( document.getElementById('pass-8').checked = true) {
//         randPassword1 = arrayEight
//     }
// }
    
   
    function generatePass() {

    if ( document.getElementById('pass-13').checked === true) {
        let randPassword1 = Array(13).fill("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()").map(function(x) { 
            return x[Math.floor(Math.random() * x.length)] 
        }).join('');
        button1.textContent = randPassword1
        // document.getElementById('pass1').textContent = "*************"
    } else if ( document.getElementById('pass-8').checked === true) {
        let randPassword1 = Array(8).fill("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()").map(function(x) { 
            return x[Math.floor(Math.random() * x.length)] 
        }).join('');
        button1.textContent = randPassword1
        // document.getElementById('pass1').textContent = "********"
    }

    if ( document.getElementById('pass-13').checked === true) {
        let randPassword2 = Array(13).fill("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()").map(function(x) { 
            return x[Math.floor(Math.random() * x.length)] 
        }).join('');
        button2.textContent = randPassword2
    } else if ( document.getElementById('pass-8').checked === true) {
        let randPassword2 = Array(8).fill("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()").map(function(x) { 
            return x[Math.floor(Math.random() * x.length)] 
        }).join('');
        button2.textContent = randPassword2
    }

    if ( document.getElementById('pass-13').checked === true) {
        let randPassword3 = Array(13).fill("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()").map(function(x) { 
            return x[Math.floor(Math.random() * x.length)] 
        }).join('');
        button3.textContent = randPassword3
    } else if ( document.getElementById('pass-8').checked === true) {
        let randPassword3 = Array(8).fill("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()").map(function(x) { 
            return x[Math.floor(Math.random() * x.length)] 
        }).join('');
        button3.textContent = randPassword3
    }

    if ( document.getElementById('pass-13').checked === true) {
        let randPassword4 = Array(13).fill("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()").map(function(x) { 
            return x[Math.floor(Math.random() * x.length)] 
        }).join('');
        button4.textContent = randPassword4
    } else if ( document.getElementById('pass-8').checked === true) {
        let randPassword4 = Array(8).fill("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()").map(function(x) { 
            return x[Math.floor(Math.random() * x.length)] 
        }).join('');
        button4.textContent = randPassword4
    }

    if ( document.getElementById('pass-13').checked === true) {
        let randPassword5 = Array(13).fill("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()").map(function(x) { 
            return x[Math.floor(Math.random() * x.length)] 
        }).join('');
        button5.textContent = randPassword5
    } else if ( document.getElementById('pass-8').checked === true) {
        let randPassword5 = Array(8).fill("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()").map(function(x) { 
            return x[Math.floor(Math.random() * x.length)] 
        }).join('');
        button5.textContent = randPassword5
    }

    if ( document.getElementById('pass-13').checked === true) {
        let randPassword6 = Array(13).fill("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()").map(function(x) { 
            return x[Math.floor(Math.random() * x.length)] 
        }).join('');
        button6.textContent = randPassword6
    } else if ( document.getElementById('pass-8').checked === true) {
        let randPassword6 = Array(8).fill("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()").map(function(x) { 
            return x[Math.floor(Math.random() * x.length)] 
        }).join('');
        button6.textContent = randPassword6
    }

    // ===== Original Attempt ====
    // Where I wanted to place a function into switchArr variable, but the .fill would not be reached??
    // let randPassword6 = switchArr.fill("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()").map(function(x) { 
    //     return x[Math.floor(Math.random() * x.length)] 
    // }).join('');
    // button6.textContent = randPassword6

    
}

// =========================================

// Here I attempted to create an Array, where the password length is checked instead of repeating the code many times as above

// Set the length of the password
// let passwordLengthArray = [randPassword1,randPassword2,randPassword3, randPassword4, randPassword5, randPassword6]

// if ( document.getElementById('pass-13').checked = true) {
//     for (i = 0; i < passwordLengthArray.length; i++) {
//         passwordLengthArray = arrayThirteen[i]
//     }
// } else if (document.getElementById('pass-8').checked) {
//     passwordLengthArray =  arrayEight[i]
// }

// =========================================



// WRITE GENERATED PASSWORDS TO A .TXT FILE USING FileSaver.js

$("#pass1").click(function() {
    let currentUrl = window.location.href // declares the variable with the current browser URL address
    let blob = new Blob([document.getElementById('pass1').textContent + " " + currentUrl],
    {type: "text/plain; charset=utf-8"});
    saveAs (blob, "password.txt");

    // ======== Attempting to copy to clipboard ========

    // let copyToClipboard = document.getElementById('pass1').textContent // copy generated password to clipboard from the Password Button
    // copyToClipboard.focus()
    // copyToClipboard.select() // select the generated password
    // //copyToClipboard.setSelectionRange(0,99999) // For mobile devices
    // navigator.clipboard.writeText(copyToClipboard) // copy the Generated Password from the Password Button
    // console.log(copyToClipboard) // log to console to chek if copying has worked
   
});

$("#pass2").click(function() {
    let currentUrl = window.location.href
    let blob = new Blob([document.getElementById('pass2').textContent + " " + currentUrl],
    {type: "text/plain; charset=utf-8"});
    saveAs (blob, "password.txt");
});

$("#pass3").click(function() {
    let currentUrl = window.location.href
    let blob = new Blob([document.getElementById('pass3').textContent + " " + currentUrl],
    {type: "text/plain; charset=utf-8"});
    saveAs (blob, "password.txt");
});

$("#pass4").click(function() {
    let currentUrl = window.location.href
    let blob = new Blob([document.getElementById('pass4').textContent + " " + currentUrl],
    {type: "text/plain; charset=utf-8"});
    saveAs (blob, "password.txt");
});

$("#pass5").click(function() {
    let currentUrl = window.location.href
    let blob = new Blob([document.getElementById('pass5').textContent + " " + currentUrl],
    {type: "text/plain; charset=utf-8"});
    saveAs (blob, "password.txt");
});

$("#pass6").click(function() {
    let currentUrl = window.location.href
    let blob = new Blob([document.getElementById('pass6').textContent + " " + currentUrl],
    {type: "text/plain; charset=utf-8"});
    saveAs (blob, "password.txt");
});

