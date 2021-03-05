window.onload = pageLoaded;
function pageLoaded(){//start load
    //set current time
    var myTime = document.getElementById("current-time");
   var now = new Date(); 
    myDate = now.toDateString();
    myTime.innerHTML = "The current time is:" + myDate;
    
    var subBtn = document.getElementById("submit-btn");
        subBtn.onclick = processContent;
        function processContent(){//Start processContent
            //Add li 
            var li = document.createElement("li");//code credit: W3C school
            var planValue = document.getElementById("yourplan").value;
            var textN = document.createTextNode(planValue);//code credit: W3C school
            li.appendChild(textN);//code credit: W3C school
            //add delete button
            var deleteBtn = document.createElement("button");
           deleteBtn.appendChild(document.createTextNode("X"));
	       li.appendChild(deleteBtn);
            deleteBtn.classList.add("delbutton");
            deleteBtn.onclick = deleteContent;
            function deleteContent(){
                li.style.display = "none";
            }
            //add finish function
	        li.onclick = doThis;
            function doThis(){
              li.classList.add("done");
            }
            //add refresh page
            var refresh = document.getElementById("refresh-btn");
            refresh.onclick = refreshPage;
            function refreshPage(){
                
             window.location.reload();
            
            }
            
            //choose which day
            var slctBox = document.getElementById("subject").value;
          var selectValue = slctBox;
          switch(slctBox){
            case "1":
            document.getElementById("ul1").appendChild(li);
            li.classList.add("list");
            break;
            case "2":
           document.getElementById("ul2").appendChild(li);
           li.classList.add("list");
            break;
            case "3":
            document.getElementById("ul3").appendChild(li);
           li.classList.add("list");
            break;
            case "4":
           document.getElementById("ul4").appendChild(li);
           li.classList.add("list");
            break;
            case "5":
            document.getElementById("ul5").appendChild(li);
           li.classList.add("list");
            break;
            case "6":
            document.getElementById("ul6").appendChild(li);
           li.classList.add("list");
            break;
           }//end switch
            
        }//end form
  
    
}//end load
