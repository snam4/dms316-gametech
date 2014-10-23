#pragma strict

function Start () {

}

function Update () {
	
}

function OnTriggerEnter (other : Collider){
	//Don'f forget to add scene in the build setting 
	//Application.LoadLevel (1);
	Application.LoadLevel ("sc00");
}