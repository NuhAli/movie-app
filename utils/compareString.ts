export function compareStrings(str1: string, str2: string ) {
    let regex = new RegExp(str1, 'i');
    return regex.test(str2);
}