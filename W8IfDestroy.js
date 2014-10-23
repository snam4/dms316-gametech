#pragma strict
//Add to First Person Controller

var gobj : GameObject ; 
var target : GameObject;
var dist : float;

function Start () {

}

function Update () {
	//Edit - Project Setting - Input : check what is Fire 1
	
		if(target != null) {
		dist = Vector3.Distance(target.transform.position, this.transform.position); 
		Debug.Log ("The object is " + dist + "meter away");
		if (dist < 5 && Input.GetButtonDown ("Fire1")){

		Destroy (gobj); //gobj should be assigned
		
		}
	}
	
}
