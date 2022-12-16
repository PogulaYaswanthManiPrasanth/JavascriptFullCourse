//=============This======================//

// For all regular functions calls, this points to WINDOW object

console.log(this);

var user = {
    name : "Yaswanth",
    courseCount : 4,
    getCourseCount : function(){
        console.log("LINE 11",this);

        // Regular Functions points the Window object not the object we are refferring in this context
        //If we need mor e clarity on this copy the code and paste in the browser console then,
        //  we will get the regular function as a window Object
      
    function sayHello(){
        console.log("Hello");
        console.log("LINE 19",this)
    }    
sayHello();

    },
};
user.getCourseCount();



//======================Browser Console Is looking like this ==============================//


/* user.getCourseCount();
VM284:1 Window {window: Window, self: Window, document: document, name: '', location: Location, …}
VM284:7 LINE 11 {name: 'Yaswanth', courseCount: 4, getCourseCount: ƒ}
VM284:14 Hello
VM284:15 LINE 19 Window {window: Window, self: Window, document: document, name: '', location: Location, …}
undefined
 */


