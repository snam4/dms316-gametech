//10-29-2014 
//DMS 316 Game Tech : http://gametechdms.wordpress.com/


//Timer Demo
#pragma strict

var t : float;
var go : GameObject; // Assign a game object to destroy

function Start () {
	 t = 10; // Total time
}

function Update () {
	t = t - Time.deltaTime; // 10 - elapsed time will be "t" 
	GetComponent(GUIText).text = parseInt(t).ToString(); // GUI Text cannot take number! (int / float ) 
	//.ToString() is to convert number into string. 
	if (t < 0 ){// if "t" is less than 0, 
			Destroy (go); //then distory the assigned object! 
	}
	
}