//11-04-2014 
//DMS 316 Game Tech : http://gametechdms.wordpress.com/

//attach this to the weapon

#pragma strict
var bullet : Transform;
var fireRate : float = 0.5;
internal var nextFire : float;

function Start () {

}

function Update () {
	 if (Input.GetButton ("Fire1") && Time.time > nextFire) {
   		nextFire = Time.time + fireRate;
   		 var clone : Transform = Instantiate (bullet, transform.position, transform.rotation);
   	}
}