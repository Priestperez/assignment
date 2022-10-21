let min = 1;
let max = 2;

const user = prompt('what is your name');
const game = () => {
    let userPick = prompt(`pick a number between ${min} - ${max}`)
    let answer = Math.floor(Math.random() * (max - min) + min)
    if (parseInt(userPick) >= min && parseInt(userPick) <= max) {
        if (parseInt(userPick) === answer) {
            prompt(`${user} correct`)
            max += 1
            game()
        } else {
            prompt(`${user} wrong`)
            game()
        }
    }
    else {
        prompt('out of range') 
        game()
    }
}
game()