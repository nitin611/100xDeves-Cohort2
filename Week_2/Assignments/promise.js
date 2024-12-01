// wait1.js
function wait1(t) {
    return new Promise((resolve) => {
        setTimeout(resolve, t * 1000);  // Convert seconds to milliseconds
    });
}

function wait2(t) {
    return new Promise((resolve) => {
        setTimeout(resolve, t * 1000);  // Convert seconds to milliseconds
    });
}

function wait3(t) {
    return new Promise((resolve) => {
        setTimeout(resolve, t * 1000);  // Convert seconds to milliseconds
    });
}

function calculateTime(t1, t2, t3) {
    const start = Date.now();

    return wait1(t1)
        .then(() => wait2(t2))
        .then(() => wait3(t3))
        .then(() => {
            const end = Date.now();
            return end - start;  // Return the time taken in milliseconds
        });
}

module.exports = calculateTime;
