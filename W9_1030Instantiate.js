//10-29-2014 
//DMS 316 Game Tech : http://gametechdms.wordpress.com/

//Spawning Demo

#pragma strict

var cube : GameObject;
var pos : Transform; // assign a transform of object (game object) as a center of spawning point
var spawn_position;
var timer = 0.0;


//Your own function!
function spawn_cube(){
	spawn_position = pos.position + Vector3(Random.Range(-10.0, 10.0), 0, Random.Range(-10.0, 10.0));
	//http://docs.unity3d.com/ScriptReference/Object.Instantiate.html
	var temp_spawn : GameObject = Instantiate (cube, spawn_position, Quaternion.identity);
}

function Start (){

}

function Update(){
	timer += Time.deltaTime; // Remember timer demo?
	
	if (timer >3){ 
		spawn_cube();
		timer = 0.0; // every 3 seconds, timer resets to 0. 
	}
}
