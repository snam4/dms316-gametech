//10-29-2014 
//DMS 316 Game Tech : http://gametechdms.wordpress.com/

#pragma strict
static var itemCount : int; //We are getting value from other code. Make this variable "static"!
var myTexture : Texture2D; // you can assign either text or imagen to GUI elements
var mainSkin : GUISkin; // Customize your GUI :  Assets->Create->GUI Skin
// More : http://docs.unity3d.com/Manual/class-GUISkin.html

function Start () {

}

function Update () {
}

function OnGUI (){
	GUI.skin = mainSkin; //GUI Skin Assign!
	
	itemCount = W9_1030Counter.score;// We are receiving the value of variable named "score", in "Counter" script
	//Debug.Log (itemCount);
	var itemCountText = itemCount.ToString(); // Remember converting number to string? Data type!

	GUI.Label(Rect (55,60,25,25), itemCountText); 
	// The seceond parameter cannot takes number (int or float) - that is why we had to convert the data type
	
	GUI.Box (Rect (10,10, 100, 100),"MY SCORE!");
	
	if (GUI.Button(Rect(120,10,100,30),"Restart Game")){
	// or, assign a texture in the inspector window! 
	//Then change the code to : GUI.Button(Rect(120,10,100,30),myTexture)
		Application.LoadLevel (0); // Scene change 
	}
}