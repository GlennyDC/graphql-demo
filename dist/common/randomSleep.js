"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomSleep = void 0;
exports.randomSleep = () => {
    const milliseconds = Math.random() * (500 - 400) + 400;
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
};
//# sourceMappingURL=randomSleep.js.map