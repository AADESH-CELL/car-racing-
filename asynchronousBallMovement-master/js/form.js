class Form{
    constructor (){

    }
    display (){
var title = createElement('h1')
title.html("car racing")
title.position (300,100)

var input = createInput("name")
input.position(300,200)
var button = createButton('submit')
button.position(400,300)
var greeting = createElement('h3')

button.mousePressed(function(){
    input.hide()
    button.hide()
    var name = input.value()
    playerCount+=1
    player.updateCount(playerCount)
    player.update(name)

    greeting.html("hello "+name)
    greeting.position(250,250)
})
    }
}