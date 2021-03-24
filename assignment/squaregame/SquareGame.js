window.onload = pageLoad;

function pageLoad()
{
	var StrNow = document.getElementById('start');
	StrNow.onclick = startGame;
}

function startGame()
{
	alert("Ready");
	addBox();
	timeStart();	
}

function timeStart(){
	var TIMER_TICK = 1000;
	var timer = null;
	var min = 0.5; 
	var second = min*60; 
	var a = document.getElementById('clock');
	var str = document.getElementById('start');
	timer = setInterval(timeCount,TIMER_TICK);
	
	function timeCount()
	{
		second = second - 1;
		a.innerHTML = second;
		var allbox = document.querySelectorAll('#SquareGame-layer div');
		if(second >= 0)
		{
			str.style.display = 'none';
		}
		else
		{
			str.style.display = 'inline-block';
		}

		if(allbox.length <= 0)
		{
		alert('Congratulation you win!!!');
		clearScreen();
		clearInterval(timer);
		timer = null;
		str.style.display = "inline-block";
		
		}
		else if(second === 0){
		alert('game over')
		clearInterval(timer);
		timer = null;
		clearScreen();
		}
	}
}

function addBox()
{
	var numbox = document.getElementById('numbox').value; 
	//var parseIntNumber = parseInt(numbox);
	var gameLayer = document.getElementById('SquareGame-layer');
	var colorDrop = document.getElementById('color').value;
	for (var i =0; i<numbox;i++)
	{
		var tempbox = document.createElement('div');
		tempbox.classList.add(colorDrop);
		tempbox.classList.add("square");
		tempbox.id = "square"+i;
		tempbox.style.left = Math.random() * (500 - 25) + 'px';
		tempbox.style.top = Math.random() * (500 - 25) + 'px';
		gameLayer.appendChild(tempbox);
		//parseIntNumber.appendChild(numbox);
		bindBox(tempbox);
	}
}

function bindBox(numbox)
{
	var currentBoxinContainer = document.getElementById('SquareGame-layer')
	numbox.onclick = function()
	{
		currentBoxinContainer.removeChild(numbox);
	}
}

function clearScreen()
{
	var allbox = document.querySelectorAll('SquareGame-container');
	var Container = document.getElementById('SquareGame-container');
	for (var i=0;i<allbox.length;i++)
	{
		Container.removeChild(allbox[i]);
	}
}