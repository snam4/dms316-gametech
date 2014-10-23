#pragma strict
//IsTrigger Demo 10-23-2014
//http://docs.unity3d.com/ScriptReference/Collider.OnTriggerEnter.html


var inner : ParticleEmitter ; 
var outer : ParticleEmitter ;
var smoke : ParticleEmitter ;

function Start () {
	//turn off the particle when start
	inner.emit = false;
	outer.emit = false;
	smoke.emit = false;
}

function Update () {
	//nothing happens based on frame!
}


 
function OnTriggerEnter(other : Collider){
 	//when the character enters to a collider, turn the particles on
    inner.emit = true ;
    outer.emit = true ;
    smoke.emit = true;
}
 
function OnTriggerExit(other : Collider){
	//when the character exits to a collider,  turn the particles off
    inner.emit =false ;
    outer.emit = false ;
    smoke.emit = false ;
}