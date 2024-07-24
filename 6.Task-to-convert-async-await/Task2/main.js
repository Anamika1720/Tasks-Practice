const firstPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("First Promise");
            resolve("First result");
        }, 1000);
    });
};

const secondPromise = (resultFromFirst) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Second Promise, received:", resultFromFirst);
            resolve("Second result");
        }, 1000);
    });
};

const thirdPromise = (resultFromSecond) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Third Promise, received:", resultFromSecond);
            resolve("Third result");
        }, 1000);
    });
};

const fourthPromise = (resultFromThird) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fourth Promise, received:", resultFromThird);
            resolve("Fourth result");
        }, 1000);
    });
};

const fifthPromise = (resultFromFourth) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fifth Promise, received:", resultFromFourth);
            resolve("Fifth result");
        }, 1000);
    });
};

const sixthPromise = (resultFromFifth) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Sixth Promise, received:", resultFromFifth);
            resolve("Sixth result");
        }, 1000);
    });
};

const executePromises = async () => {
    try{
        const result = await firstPromise();
        const result2 = await secondPromise(result);
        const result3 = await thirdPromise(result2);
        const result4 = await fourthPromise(result3);
        const result5 = await fifthPromise(result4);
        const result6 = await sixthPromise(result5);
        console.log("Final result:", result6);
    }
    catch(err){
        console.log("Error:", err);
    }
}

executePromises();