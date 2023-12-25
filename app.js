let treeContainer = document.querySelector('.tree .container');

setInterval(() => {
    treeContainer.innerHTML = '<span class="red"><span class="yellow"> O </span><br><span class="yellow"> O </span><span class="yellow"> O </span><br><span class="yellow"> O </span><span class="yellow"> O </span><span class="yellow"> O </span>';
    
    lights();
    
    treeContainer.innerHTML += '</span>';
    
    treeContainer.innerHTML += '<div class="orange">mWm</div><div class="orange">mWm</div><br><span class="red">and lots of <span class="rainbows">C</span><span class="rainbows">O</span><span class="rainbows">D</span><span class="rainbows">E</span> in 2023</span>';
    
    let rainbow = document.querySelectorAll('.rainbow');
    let rainbows = document.querySelectorAll('.rainbows');
    
    for(let i=0; i<rainbow.length; i++){
        rainbow[i].innerHTML = ' O ';
        rainbowColor(rainbow[i]);
    }

    for(let i=0; i<rainbows.length; i++){
        rainbowColor(rainbows[i]);
    }
}, 150)

function lights(){
    for(let i=3; i<20; i+=1){
        treeContainer.innerHTML += '<br>';
        for(let j=0; j<=i; j++){

                treeContainer.innerHTML += '<span class="rainbow"> O </span>';
            
        }
    }
}

function rainbowColor(element){
    element.style['color'] = `rgb(${rand1to255()}, ${rand1to255()}, ${rand1to255()})`;
    element.style['text-shadow'] = `rgb(${rand1to255()}, ${rand1to255()}, ${rand1to255()}) 0 0 5px`;
}

function rand1to255(){
    return Math.ceil(Math.random()*255);
}