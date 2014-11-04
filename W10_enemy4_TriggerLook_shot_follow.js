//10-29-2014 
//DMS 316 Game Tech : http://gametechdms.wordpress.com/

#pragma strict
var target : Transform; 
var enemy : Transform;
var moveSpeed = 3.0;
var damp = 10;

var bullet : Transform;
var bulletSpawn : Transform;
var timer = 0.0;

function Start () {

}

function Update () {


}

function OnTriggerStay (triggerCollider : Collider){

	timer += Time.deltaTime; //Shooting timer - 
	
	if (triggerCollider.transform == target){ // Check if the entered obj is the player
		var rotate = Quaternion.LookRotation (target.position - enemy.position);
		enemy.rotation = Quaternion.Slerp (enemy.rotation, rotate, Time.deltaTime * damp);
		
		//with the rotated body toward to the player, go straight
		enemy.Translate(Vector3.forward * moveSpeed * Time.deltaTime);
		
	}
	
	if (timer >3.0){ // Every 3 second, this happens.. 
		Instantiate (bullet, bulletSpawn.position, bulletSpawn.rotation); //instantiate bullet and reset timer
		timer = 0.0;
	}
	
}