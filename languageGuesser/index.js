import {franc} from "franc"
import langs from "langs"

//you can't use require in a  type set as module if you don't define require.
import { createRequire } from "module";
const require = createRequire(import.meta.url);
var colors = require('colors');

const text = process.argv.slice(2)

for (let string of text) {
    const languageCode = franc(string)
    const languageObject = langs.where('3', languageCode)
    if (languageObject) {
        console.log(languageObject.name.green)
    } else {
        console.log('Language could not be detected, please try again with a larger sample'.red)
    }


}