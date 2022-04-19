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

