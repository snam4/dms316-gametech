//10-29-2014 
//DMS 316 Game Tech : http://gametechdms.wordpress.com/

//Do this code after "ItemCollision" code

#pragma strict

static var score : int; // Make this variable static. We need to access to this variable in "DisplayGUI" code. 

function Start () {

}

function Update () {

}

function OnCollisionEnter (collision : Collision){
	if (collision.transform.name == ("Item") ){ //"Item" is the object(Prefab) name. 
		score += 1; // Whenever you hit "Item" object, add 1. We are counting the number of collected object
		// x +=1; is a short cut for x = x +1;
	}
}