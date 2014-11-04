//10-29-2014 
//DMS 316 Game Tech : http://gametechdms.wordpress.com/

//OnCollisionEnter & Collecting Iterm Demo

// OnCollisionEnter (or anu Collision function) works only with an object with Rigid body
//So, we cannot use the first person controller from controller package

//This is for a custom controller with Rigid Body 
#pragma strict
var forward : float ;
var side : float ;

function Start () {

}

function Update () {
	transform.Translate (side,0,forward);
	
	if (Input.GetKey ("w") || Input.GetKey (KeyCode.UpArrow)){
		forward = 0.2;
	} else if(Input.GetKey ("s") || Input.GetKey (KeyCode.DownArrow)){
		forward = -0.2;
	} else {
		forward = 0.0;}

	if (Input.GetKey ("a") || Input.GetKey (KeyCode.LeftArrow)){
		side = -0.2;
	} else if(Input.GetKey ("d") || Input.GetKey (KeyCode.RightArrow)){
		side = 0.2;
	}else {
		side = 0.0;}

}