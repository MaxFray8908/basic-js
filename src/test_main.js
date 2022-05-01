const { getSeason } = require('./what-season.js');


const deeperFakeDate = {
    toString() {
        return Date.prototype.toString.call(new Date());
    },
    getMonth() {
        return Date.prototype.getMonth.call(new Date());
    },
    getFullYear() {
        return Date.prototype.getFullYear.call(new Date(1994, 1, 2, 3, 4, 5));
    },
    getDate() {
        return Date.prototype.getDate.call(new Date(2020, 0, 3, 4, 5, 6));
    },
    getHours() {
        return Date.prototype.getHours.call(new Date(1978, 2, 4, 5, 6, 7));
    },
    getMinutes() {
        return Date.prototype.getMinutes.call(new Date(202, 3, 5, 6, 7, 8));
    },
    getSeconds() {
        return Date.prototype.getSeconds.call(new Date(1, 4, 6, 7, 8, 9));
    },
    getMilliseconds() {
        return Date.prototype.getMilliseconds.call(new Date(2019, 7, 8, 9, 10, 11));
    },
    getDay() {
        return Date.prototype.getDay.call(new Date(1812, 8, 9, 10, 11, 12));
    },
    [Symbol.toStringTag]: 'Date'
};

Object.setPrototypeOf(deeperFakeDate, Object.getPrototypeOf(new Date()));



console.log(getSeason(deeperFakeDate));