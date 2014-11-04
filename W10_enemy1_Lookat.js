//11-04-2014 
//DMS 316 Game Tech : http://gametechdms.wordpress.com/

//Very Simple AI

#pragma strict

var target : Transform;


function Start () {

}

function Update () {
	// Look at the player anytime, anywhere
	transform.LookAt (target);
}