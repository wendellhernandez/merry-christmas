setInterval(function merryChristmass() {
    let treeContainer = document.querySelector('.tree .container');

    treeContainer.innerHTML = '<span class="red">';
    
    lights();
    
    treeContainer.innerHTML += '</span>';
    
    treeContainer.innerHTML += '<div class="orange">mWm</div><div class="orange">mWm</div><br><span class="red">MERRY CHRISTMAS<br>and lots of <span id="CC">C</span><span id="OO">O</span><span id="DD">D</span><span id="EE">E</span> in 2023</span>';
    
    function lights(){
        for(let i=0; i<24; i+=2){
            treeContainer.innerHTML += '<br>';
            for(let j=0; j<=i; j++){

                    treeContainer.innerHTML += '<span class="rainbow"> * </span>';
                
            }
        }
    }
    
    let rainbow = document.querySelectorAll('.rainbow');
    let CC = document.querySelector('#CC');
    let OO = document.querySelector('#OO');
    let DD = document.querySelector('#DD');
    let EE = document.querySelector('#EE');
    
    for(let i=0; i<rainbow.length; i++){
        rainbow[i].innerHTML = ' * ';
        rainbowColor(rainbow[i]);
    }
    
    rainbowColor(CC);
    rainbowColor(OO);
    rainbowColor(DD);
    rainbowColor(EE);
    
    function rainbowColor(element){
        element.style['color'] = `rgb(${rand1to255()}, ${rand1to255()}, ${rand1to255()})`;
    }
    
    function rand1to255(){
        return Math.ceil(Math.random()*255);
    }
}, 200)