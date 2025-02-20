// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length ; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`)
    }

    return gifts
}

wrapGifts(gifts)

function writeCards(arr, e) {
    let array = []
    for(let i = 0; i < arr.length; i++) {
        array.push(`Thank you, ${arr[i]}, for the wonderful surprise gift!`)
    }

    return array
}

function countDown(num) {
    while(num >= 0) {
        debugger;
        console.log(num--)
    }
}