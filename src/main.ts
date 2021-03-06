const a: string = "Hello world"
const n: number = 3
const b: boolean = true
const d: null = null
const arr: any[] = ["yaya", "ma", 10]
const user: {firstname: string, lastname: string} = {firstname:"Yahya", lastname:"Mallak"}
const person: {[key:string]: string} = {name:"test", country:"Ma"}
const date: Date = new Date();
const ca: (e: MouseEvent) => void = (e: MouseEvent): void => {
    console.log("Hello")
}
const cb: (e: MouseEvent) => number = (e: MouseEvent): number => {
    return 10
}

const button = document.getElementById("btn") as HTMLButtonElement

let i= 0;
const increment = (e: Event) => {
    e.preventDefault();
    i++;
    const span = button?.querySelector("span")
    if(span){
        span.innerText = i.toString()
    }
}

button?.addEventListener('click', increment)


type Player = {firstname: string, lastname: string}


const player: Player = {firstname: "Leo", lastname: "Messi"}

function identity<ArgType>(arg: ArgType): ArgType {
    return arg
}

const arg = identity<number>(10)


function consoleSize<Type extends {length: number}>(arg: Type): Type {
    return arg
}

const size = consoleSize(['3', 10])


function reverse<T>(arr: readonly T[]): T[] {
    return [...arr].reverse()
}