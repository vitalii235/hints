export const mainAction =payload=>{
    return {
        type:'HELLO',
        payload
    }
}
export const increment = ()=>{
    return{
        type:'INCREMENT'
    }
}