/**
 * CLI Alerts
 * Cross-platform Cli alerts with colors. Works on macOS, Linux, and Windows
 * Alerts: 'success', 'info', 'warning, 'error'.
 * An excercise of the NodeCLI.com course by Ahmad Awais
 * This is going to be a node-module
 * @author Pauli-Haack
*/

const chalk = require('chalk');
const sym = require('log-symbols');

const greenI = chalk.green.inverse;
const green = chalk.green;
const redI = chalk.red.bold.inverse;
const red = chalk.red;
const orange = chalk.keyword('orange');
const orangeI = chalk.keyword('orange').inverse;
const blue = chalk.blue;
const blueI = chalk.blue.inverse;

module.exports = options => {
    const defaultOptions = {
        type: `error`,
        msg: `You forgot to define all options`,
        name: ''

    };
    const opts = {...defaultOptions, ...options}; //Spread operator
    const {type, msg, name} = opts; //Object destructuring
    const printName = name ? name : type.toUpperCase()
    // if a name is provided we use the name, if not we use the type and make it All Caps. 

    if (type === `success`) {
        console.log(`\n${sym.success} ${greenI(` ${printName} `)} ${green(msg)}\n`);
    }

    if (type === `error`) {
        console.log(
            `\n${sym.error} ${redI(` ${printName} `)} ${red(msg)}\n`);
    }

    if (type === `warning`) {
        console.log(
            `\n${sym.warning} ${orangeI(` ${printName} `)} ${orange(msg)}\n`);
    }

    if (type === `info`) {
        console.log(
            `\n${sym.info} ${blueI(` ${printName} `)} ${blue(msg)}\n`);
    }

}

