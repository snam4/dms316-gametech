//10-29-2014 
//DMS 316 Game Tech
// Spawn Object and Destory after a few seconds 
// Attach this code to prefab spawn object

#pragma strict

function Start () {
	//Destory 5 seconds after spawning
	Destroy (gameObject,5);
}

function Update () {

}