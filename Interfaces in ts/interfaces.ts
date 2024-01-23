// Interfaces are a feature of TypeScropt what allows us to define structure or shap of an object and specify the properties and methods that an object has or should have 


// implement interface on function
interface RectanglOptions {
    width:number;
    length:number;
}

function drowRectangle(options:RectanglOptions){
    let width = options.width;
    let length = options.length;
    return width + '' + length
}

drowRectangle({width:54, length:75})

