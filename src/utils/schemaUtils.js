"use strict";
exports.__esModule = true;
exports.timestampOpts = void 0;
exports.timestampOpts = {
    timestamps: {
        currentTime: function () {
            return Math.floor(Date.now() / 1000);
        }
    }
};
