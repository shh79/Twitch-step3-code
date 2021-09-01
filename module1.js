let year = 2021;
const func1 = () => {
    console.log("hello world in func1");
};

export function func2(){
    console.log("hello world in func2");
}

const Year = (newYear) => {
    year = newYear;
}

function func3(){
    console.log("hello world in func3");
}

export {func1, year, Year};