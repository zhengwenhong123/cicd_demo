export function Councurrent(urls,maxNum){
    return new Promise((resolve, reject)=>{

        if(urls.length === 0){
            resolve([]);
            return;
        }

        let result = [];
        let nextIndex = 0;
        let count = 0;
        async function _request(){
            const i = nextIndex;
            const url = urls[nextIndex];
            nextIndex++;
            const resp = await fetch(url);
            result[i] =resp;

            if(nextIndex < urls.length){
                _request();
            }
            count++;
            if(count === urls.length){
                resolve(result);
            }
            console.log(result)

        }
        for(let i = 0;i<Math.min(urls.length, maxNum);i++){
            _request();
        }

    })
}