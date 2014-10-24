#pragma strict
//10-23-2014
//OnTriggerEnter - bare minimun script


//declare your variable
var speed :float = 10.0;
//declare a game object variable to make a space to assign a target obj
var target : GameObject;

function Start () {
	//automatic assignment "myCube" to target (game object variable)
	target = GameObject.Find ("myCube");
}

function Update () {

}

function OnTriggerEnter (other : Collider) {
	// This rotation will not be very interesting because it will be executed only for a frame (the frame of entering)
	//target.transform.Rotate(0, speed * Time.deltaTime, 0 );
	//if you want to rotate the cube when the character is in the trigger look into "OnTriggerStay"
	
	//So will print just a message to make sure that it works fine
	Debug.Log ("I sense you");
	}

//Review for Mouse Interaction! 
function OnMouseDown(){
	//and new function "Destroy"
	Destroy (target);
}
