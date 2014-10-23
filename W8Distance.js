#pragma strict

var target : GameObject;
var dist : float;

function Start () {
	target = GameObject.Find("First Person Controller");
}

function Update () {
	if(target != null) {
		dist = Vector3.Distance(target.transform.position, this.transform.position); 
		Debug.Log ("The charater is " + dist + "meter away");
		if (dist < 5){
			transform.Rotate (0,10* Time.deltaTime, 0);
		}
	}
}