#pragma strict
var t : float;

function Start () {
	//set the time limit here 
	t = 10000;
}

function Update () {
	//total time - elapsed time
	t = t - Time.fixedTime;
	//GUIText.text takes only string
	//So, the time expressed in float should be converted to string --> ToString()
	GetComponent(GUIText).text = parseInt(t).ToString();
}