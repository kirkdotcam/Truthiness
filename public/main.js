//We're not on functions yet. Stop lookin' at mah functions! (Okay just ignore the function part for now and look at how my if-statements are written, and the formatting I used)


//array of things to test
function truthtest(index){
	var theManyTruths=[true, 4,"false",'4','4'+4=='44','I kind of like four','14'+4===18,0,1,!false,[],['Kirk','Better than', 'Picard'],'Houston'>'Dallas',true||false,[]+4,[]==false,-1,true&&false,true+false,true-false,true+2,true + "2",null,undefined,1/0,-0]; //Semicolons. They're tasty. Like Bacon.


	if (theManyTruths[index]){ //is true true? What goes in the parentheses is tested for truthiness. This if statement looks in the 'theManyTruths' array at a specified index and tests it.
		alert("true"); 
	}else {
		alert("false");
	}
}
