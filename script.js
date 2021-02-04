
function add_events()
{
let inpt=document.getElementById("input");
let h=document.createElement("li");
let list=document.getElementById('list');
	
	if(inpt.value=="")
		{
			alert("Cannot be left blank!!!")
		}
	else
		{
			//creating text element and storing it in text variable
		var text=document.createTextNode(inpt.value);
		h.appendChild(text);
		let btn=document.createElement('input');
		btn.type="button";
		//to get the x symbol on the delete button
		btn.value='x';
		h.appendChild(btn);
		list.appendChild(h);
		inpt.value="";
		btn.addEventListener('click',function () 
		{
			list.removeChild(h);
		})


	}
}