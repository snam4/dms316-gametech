//11-04-2014 
//DMS 316 Game Tech : http://gametechdms.wordpress.com/

//Projectile Bullet Code 
//Attach this code to the bullet prefab

#pragma strict

var speed = 20.0;

function Start () {

}

function Update () {
	//Bullet moving forward -
	transform.Translate (Vector3.forward * speed * Time.deltaTime, Space.Self);
	// Destroy after 5 sec, we don't want to accumulate bullet in the scene 
	Destroy (gameObject, 5);

}