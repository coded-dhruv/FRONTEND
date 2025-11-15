// const clickHandler = (msg) => {
//     alert(msg);
// }

// const wrapHandler = () => {
//     clickHandler("Hello");
// }

var a = 20;
var b = "Hello"
var c = true;
var d = null;
var e = undefined;
var f = 2.3333

const App = () => {

    return(
        <div>
            <h1>App</h1>
            <h2>{a}</h2>
            <h2>String : {b}</h2>
            <h2>Boolean : {c}</h2>
            <h2>Null : {d}</h2>
            <h2>UD : {e}</h2>
            <h2>Float : {f}</h2>
        </div>
    )

}

export default App;
