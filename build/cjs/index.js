"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMonth = exports.formatDate = void 0;
var formatDate = function (date) {
    return "".concat((0, exports.getMonth)(date.getMonth()), " ").concat(date.getDate(), ", ").concat(date.getFullYear());
};
exports.formatDate = formatDate;
var getMonth = function (month) {
    switch (month) {
        case 0:
            return "january";
        case 1:
            return "february";
        case 2:
            return "march";
        case 3:
            return "april";
        case 4:
            return "may";
        case 5:
            return "june";
        case 6:
            return "july";
        case 7:
            return "august";
        case 8:
            return "september";
        case 9:
            return "october";
        case 10:
            return "november";
        case 11:
            return "december";
        default:
            return "";
    }
};
exports.getMonth = getMonth;
