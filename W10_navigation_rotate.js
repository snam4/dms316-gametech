#pragma strict

var speed = 5.0;
var jumpSpeed = 10;
function Start () {

}

function Update () {
 if(Input.GetKey("left")){
 	transform.Rotate(Vector3(0,-30 * speed * Time.deltaTime,0));
 	}
 if(Input.GetKey("right")){
 	transform.Rotate(Vector3(0,30 * speed * Time.deltaTime,0));
 	}
 	
 if(Input.GetKey("up")){
 	transform.Translate(Vector3.forward * speed * Time.deltaTime);
 	}
 if(Input.GetKey("down")){
 	transform.Translate(Vector3.back * speed * Time.deltaTime);
 	}
 	
 	if(Input.GetKey("space")){
 	transform.Translate(Vector3.up * jumpSpeed * Time.deltaTime);
 	}
}