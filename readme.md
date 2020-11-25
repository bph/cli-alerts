# pauli-alerts
<img src="./Screen Shot 2020-11-25 at 3.06.42 PM.png">

## Usage

```js
const alert = requires('pauli-alerts');

// Prodvide the type, ms, and name options
alert({ type: "success", msg: "All done!", name: `Done`});
// Prints: ✔  Done  All done!

alert({ type: "warning", msg: "Tomorrow it's going to be hot. Get up early!",});
// Prints: ⚠  WARNING  Tomorrow it's going to be hot. Get up early!

alert({ type: "info", msg: "No Hurricanes in the Gulf of Mexico",});
// Prints: ℹ  INFO  No Hurricanes in the Gulf of Mexico

alert({ type: "error", msg: "Oops that doesn't work. ",name: `Mistake!`});
//Prints: ✖  Mistake!  Oops that doesn't work. 
```

## API
### alert(options)
#### > options

Type: object<br/>
Default {}

You can specify the options below. 

#### > type

Type: string<br/>
Default: error

#### > msg

Type: string <br/>
Default: You forgot to define all options. 

#### > name

Type: string<br/>
Default: ''

## Code of Conduct

Please note that this project is released with a [Contributor Code of Conduct](code_of_conduct.md). By participating in this project you agree to abide by its terms.

## History

This is an example project of <a href="https://nodecli.com/">the NodeJS CLI course</a> by Ahmad Awais