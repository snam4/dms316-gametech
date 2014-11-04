//10-29-2014 
//DMS 316 Game Tech : http://gametechdms.wordpress.com/

//AI with trigger

#pragma strict
var target : Transform; 
var enemy : Transform;
var damp = 10;

function Start () {
}
function Update () {
}

function OnTriggerStay (triggerCollider : Collider){

	if (triggerCollider.transform == target){ // check if the entered obj is the player! 
		var rotate = Quaternion.LookRotation (target.position - enemy.position);
		enemy.rotation = Quaternion.Slerp (enemy.rotation, rotate, Time.deltaTime * damp);
	}
	
}