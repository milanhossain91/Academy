<script>
    // 1st Problem solveing 
	/*
	console.log("E");
	setTimeout(() => {
	   console.log("0");
	}, 10000);
	console.log("C");
	*/
	
	// 2nd Problem solveing 
    /*
	console.log("E");
	setTimeout(() => {
	   console.log("0");
	}, 0);
	console.log("C");
	*/
	
	// 3rd Problem solveing 
    
	/*
	let a = [1,2,3];
	let b = a;
	a = [4,5,6];
	console.log(a);
	*/
	
	// Ans :  4, 5, 6 
	
	// 4th Problem solveing 
    
	/*
	let arr1 = [0,1,2];
	let arr2 = arr1;
	arr2[0] = 55;
	console.log(arr1);
	*/
	
	// Ans :  55, 1, 2
	
	// 5th Problem solveing 
    
	/*
	let obj1 = { a: 55};
	let obj = obj1;
	 obj.p = 555;
	console.log(obj1.p);
	*/
	
	
	// Ans :  555
	
	// 6th Problem solveing 
    
	/*
	let str1 = "engineer";
	let str2 = str1;
	 str2 = "ofcode";
	console.log(str1);
	*/
	
	
	
	// Ans :  engineer
	
	// 7th Problem solveing 
    
    /*
	let newArr = [1,2,3].push(4);
	console.log(newArr.push(5));
	*/
	
	
	// Ans :  error
	
	// 8th Problem solveing 
    /*
	let a = 10;
	b = 10;
	if(a==b){
	  console.log("Yes");
	}else{
	  console.log("No");
	}
	*/
	// Ans :  Yes
	
	// 9th Problem solveing 
    /*
	let a = 3;
	  b = 5;
	  console.log(a + b + "10");
	*/
	
	// Ans :  810
	
	// 10th Problem solveing 
    /*
	let num = 1;
	const list = ["a", "b", "c", "d"]
	console.log(list[num++]);
	*/
	
	// Ans :  b
	
	// 11th Problem solveing 
    /*
	getAge = () => {
	  "use strict";
	  age = 21;
	  console.log(age);
	};
	getAge();
	*/
	
	// Ans :  error
	
	// 12th Problem solveing 
    /*
	let str = "Follow engineer";
	let newStr = str.substr(2, 5);
	console.log(newStr);
	*/
	// Ans :  llow
	
	// 13th Problem solveing 
    /*
	var x = 1000;
	var y = 5000;
	
	console.log(y + z);
	
	var z = 2000 + x;
	*/

	// Ans :  NaN
	
	// 14th Problem solveing 
    /*
	let x = "5000";
	 
	 console.log(y);
	 
	let y = 10000;
    */
	// Ans :  Error
	
	// 15th Problem solveing 
    /*
	let x = 0;
	console.log(Boolean(x));
	console.log(!!x);
    */
	// Ans :  false false
	
	// 16th Problem solveing 
    /*
	let a = "10";
    let b = 10;
	console.log(a === b);
    */
	// Ans :  false 
	
	// 18th Problem solveing 
    /*
	console.log("5" + 3);
	console.log("5" - 3);
    */
	// Ans :  53  2
	
	// 19th Problem solveing 
    /*
	let arr = [20, 30, 40];
	console.log(arr[1]);
	arr.length = 1;
	console.log(arr[1]);
	*/
	// Ans :  30  undefined
	
	// 20th Problem solveing 
    /*
	let fan = "Hello Bangladesh";
	(()=>{
	  let fan = "Engineer";
	  console.log(fan);
	})();
	console.log(fan);
	*/
	// Ans :  Engineer, Hello Bangladesh
	
	// 20th Problem solveing 
    
    //console.log(null === undefined);
	//console.log(null == undefined);
	
	// Ans :  false , true
	
	// 21th Problem solveing 
    
	//console.log(null === undefined);
	//console.log(null == undefined);
	
	// Ans :  false , true
	
	// 22th Problem solveing 
    
	  //let x = 10;
	//let y = 12;
	//let result = x < y ? "x" : "Y";
	//console.log(result);
	
	// Ans :  x
	
	// 23th Problem solveing 
    
	  //(() => {
	    // var a = (b = 99);
	 // })();
	 // console.log(typeof a, typeof b);
	
	// Ans :  undefined number
	
	// 24th Problem solveing 
    
	 // let arr = [7, 5, 7, 5];
	 // arr[11] = 10;
	 // console.log(arr.length);
	
	// Ans :  12
	
	// 24th Problem solveing 
    
	 // let arr = [7, 5, 7, 5];
	 // arr[11] = 10;
	 // console.log(arr.length);
	
	// Ans :  12
	
	// 25th Problem solveing 
    
	 // let a = 10;
	 // let b = a++;
	 // console.log(a, b);
	
	// Ans :  11, 10
	
	// 26th Problem solveing 
	
	//console.log(3 + 4 + "5");
	
	// Ans :  75
	
	// 27th Problem solveing 
	
	// console.log({} == {});
	
	// Ans :  false
	
	// 28th Problem solveing 
	
	//console.log("5" + + "5");
	
	// Ans :  55 
	
	// 29th Problem solveing 
	
	//console.log(1 == true);
	
	// Ans :  true
	
	// 30th Problem solveing 
	
	//arr = new Set([1,2,3,4,2]).size;
	
	//console.log(arr);
	
	// Ans :  4
	
	// 31th Problem solveing 
	
     // console.log(typeof object.create(null));
	
	// Ans :  4
	
	// 32th Problem solveing 
	
     // console.log(2 + true);
	
	// Ans :  3
	
	// 33th Problem solveing 
	
      console.log(new Date(0).toUTCString());
	
	// Ans :  Thu, 01 Jan 1970 00:00:00 GMT
	
	// 34th Problem solveing 
	
      console.log([] == 0);
	
	// Ans :  True
	
	
</script>