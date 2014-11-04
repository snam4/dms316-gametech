
//11-04-2014 
//DMS 316 Game Tech : http://gametechdms.wordpress.com/

//Simple AI / Enemy 
//Attach this code to the enemy

#pragma strict
var target : Transform; 
var enemy : Transform;
var damp = 10;

function Start () {

}

function Update () {
// http://docs.unity3d.com/ScriptReference/Quaternion.Slerp.html
	var rotate = Quaternion.LookRotation (target.position - enemy.position); // Calculate the degree between two objects
	// then rotate the enemy - delay
	enemy.rotation = Quaternion.Slerp (enemy.rotation, rotate, Time.deltaTime * damp);
}