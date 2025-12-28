import square from "./test.js"
import circle from "./app.js"
let parent = ()=>{
    return React.createElement('div', null, [square(), circle()])
}

export default parent