
/**
 * This returns an array with the url parameters. If there is no parameter, this function will return the string: "No parameters found".
 * Example: mysite.com/?my_parameter=HelloWorld ---> "my_parameter" is the parameter and "HelloWorld" is the value.
 * Returned structure: [{key:"my_parameter",value:"HelloWorld"},{key:"otherParameter",value:"ByeWorld"}]
 */
export function GET(){
    const hash = window.location.hash;
    if(hash.includes('?')){
        const viewHash = hash.split('?')[0];
        const paramsStr = hash.replace(`${viewHash}?`, "");
        var arrayOfParams = paramsStr.split("&");
        arrayOfParams.forEach( (param,i) => {
            const keyAndValue = param.split("=");
            const key = keyAndValue[0];
            const value = keyAndValue[1];
            arrayOfParams[i] = {
                key: key,
                value: value
            }
        });
        return arrayOfParams;
    }else{
        return "No parameters found";
    }
}