//10-29-2014 
//DMS 316 Game Tech : http://gametechdms.wordpress.com/

//Destroy (or Collect) an object Demo
//Attach this code to the object you want to destroy

// TIP : drag the object with this code to project window to make a prefab 
// then reuse as adding instances of the prefab in the scene (hierarchy window)

#pragma strict

function Start () {

}

function OnCollisionEnter (collision : Collision) { // Event Function - now sounds familiar, right?
		print (collision.transform.name); // print is same with Debug.Log() - Use Debug.Log, if possible
		Destroy (gameObject); // Destory "this" object!	 
}