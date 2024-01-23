// The enum type help us to store constant's. It does not allow duplicate value.
// Enum types can be numeric, string , hetergenous

enum RType {SUCCESS, FAILURE, UNAUTHENTICATED, FORBIDDEN}

interface APIResponsee<T> {
    status:number;
    type: RType;
    data:T
}

const responsee:APIResponsee<string> = {
    status:200,
    type:RType.SUCCESS, // here it will return the index of SUCCESS in Rtype
    data:'test'
}

