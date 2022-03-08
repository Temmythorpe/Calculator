function clk(val){

    document.getElementById("screen").value=document.getElementById("screen").value+val;
}

function clrdisp(){
    document.getElementById("screen").value=""
}

function eql(){
    var text=document.getElementById("screen").value;
    var result=eval(text);
    document.getElementById("screen").value=document.getElementById("screen").value=result
}

function percent (val){
    var text=document.getElementById("screen").value;
    if(!text){
        alert("enter a number")
        return
    }
    else{
        var result=parseFloat(text)/100;
    document.getElementById("screen").value=document.getElementById("screen").value=result
    }
}