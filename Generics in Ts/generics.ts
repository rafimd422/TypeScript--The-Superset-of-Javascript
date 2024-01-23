// Generics is a reuseable block of code which we can use for types.

// Generic with interface:
interface APIResponse<T> {
    status: number;
    type: string;
    data: T;
}

const response:APIResponse<object> = {
status:200,
type:'Good',
data:{
    something:'something'
}
} // here we just pass a generic sign(<T>) with interface and defined the type on the response variable