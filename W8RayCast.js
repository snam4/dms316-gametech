#pragma strict
var hit : RaycastHit;

function Start () {
}

function Update () {
	if(Physics.Raycast (transform.position, transform.forward,hit, 10)){
		Debug.Log ("There is the " + hit.transform.name);
	} else {
		Debug.Log("There is nothing!");
	}
	Debug.DrawRay (transform.position, transform.forward, Color.green);
}