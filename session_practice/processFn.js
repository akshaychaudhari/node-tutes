console.log(process.pid)
console.log(process.versions.node)
console.log(process.argv)
console.error("=================================")
const [, , firstName, lastName] = process.argv;
console.log(`Your name is ${firstName} ${lastName}`)
console.error("=================================")
const grab = flag => {
    let indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag];
}
const greeting = grab("--greeting")
const user = grab("--user")
console.log("For u:" + ` ${greeting} ${user}`)
console.log("=================================")

process.stdout.write("Hello ")
process.stdout.write("World \t Noob \n\n\n")