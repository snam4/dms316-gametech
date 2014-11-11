#pragma strict

function Start () {

}

function Update () {
   if (Input.GetAxis("Vertical") > 0.2)
       animation.CrossFade ("walk");
   else
      animation.CrossFade ("idle");

	if (Input.GetButton("Fire1"))
      animation.CrossFade("shoot");
}
