export class ArrayUtil {
    static repeatElement(num: number, text:string) {
        let arr = [];
        for(let i=0; i<num; i++){
            arr.push(text);
        }
        return arr;
    }
}
