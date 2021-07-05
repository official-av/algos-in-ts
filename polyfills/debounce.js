let timer;

const debounce = delay => {
    return new Promise((resolve) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            console.log('executing callback');
            resolve();
        }, delay);
    });
}

export default debounce;
