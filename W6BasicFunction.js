#pragma strict
//DMS 316 : GAME TECH
//OCT 9
//BASIC UNITY SCRIPT


//var VARIABLENAME : DATATYPE;
//REMEMBER/SEARCH DATA TYPE, ESPECIALLY int, float, string, boolean
var speed : int;
var isRotating : boolean;
internal var go : GameObject; // internal/private var to make the variable invisible

function Start () {
 	//PREPARARION, EXECUTED ONLY WHEN IT STARTS : ONE TIME
 	speed = 10;// assign 10 to variable named 'speed' when the program starts
 	//if you want, you can change the variable 
	}

function Update () {
	//EXECUTED FOREVER
	}

function OnMouseOver () {
	//EVENT FUNCTION : EXECUTED ONLY 
	
	//CHANGE COLOR OF MATEIRAL 
	renderer.material.color = renderer.material.color - Color(0, 0.1, 0.1) * Time.deltaTime;
	
	//ROTATE OBJECT
	transform.Rotate(0,speed * Time.deltaTime,0);
	
	//MOVE OBJECT
	transform.Translate(0,1 * Time.deltaTime,0);
	
	//PRINT MESSAGE ON CONSOLE
	Debug.Log("Mouse is on me!");
	}