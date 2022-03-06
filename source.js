const windows=[];var time=Date.now(); document.body.insertAdjacentHTML("beforeEnd","<div id='"+time+"' style='height:100px;width:200px;overflow:hidden;resize:both;z-index:10000;display:flex;flex-direction:column;color:#878787;background-color:#363636;border:1px groove white;position:absolute;top:25px;left:25px"+"'></div>")
document.getElementById(time).insertAdjacentHTML("beforeEnd","<div style='position:absolute;right:0;height:15px;width:15px;z-index:10000' onclick='document.getElementById("+time+").remove();fliter("+time+")'></div>")
document.getElementById(time).insertAdjacentHTML("beforeEnd","<div id='"+time+"toolbar"+"' style='width:-webkit-fill-available;height:15px;z-index:1000'></div>")
document.getElementById(time).insertAdjacentHTML("beforeEnd","<div id='"+time+"canvas"+"' style='width:inherit;height:inherit;position:absolute'></div>")
dragElement(document.getElementById(time));
document.getElementById(time+"canvas").insertAdjacentHTML("beforeEnd","<iframe id='"+time+"iframe"+"' src='"+"https://aeroweb.netlify.com/"+"' style='width: 200%; height: 200%; position: absolute; transform: scale(0.5); -webkit-transform-origin-y: top; -webkit-transform-origin-x: left'></iframe>")
                                       
function dragElement(elmnt) {
    const position =[0,0,0,0]

    document.getElementById(elmnt.id+"toolbar").onmousedown = dragMouseDown;
    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        position[2] = e.clientX;
        position[3] = e.clientY;
        document.onmouseup = function(){
            // stop moving when mouse button is released:
            document.onmouseup = null;
            document.onmousemove = null;
        };
        // call a function whenever the cursor moves:
    document.onmousemove = function(e){      
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        position[0] = position[2] - e.clientX;
        position[1] = position[3] - e.clientY;
        position[2] = e.clientX;
        position[3] = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - position[1]) + "px";
        elmnt.style.left = (elmnt.offsetLeft - position[0]) + "px";
        };
    }
  } 
  function fliter(data){
    for(var index=0,len=windows.length;index<len;index++){
        if (windows[index]==data){
            windows.splice(index)
        }
    }
}
  dragElement(document.getElementById(time));