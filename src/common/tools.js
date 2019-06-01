export const isTouchDevice = () => {
    return 'ontouchstart' in window || navigator.maxTouchPoints;
};

export const generateUID = () => {
    let firstPart = (Math.random() * 46656) | 0;
    let secondPart = (Math.random() * 46656) | 0;
    firstPart = ("000" + firstPart.toString(36)).slice(-3);
    secondPart = ("000" + secondPart.toString(36)).slice(-3);
    return firstPart + secondPart;
};

export const getWindowSize = () => {
    let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    let height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    return {width, height};
};

export const getHigherDimension = () => {
    return getWindowSize().width > getWindowSize().height
        ? getWindowSize().width
        : getWindowSize().height;
};
