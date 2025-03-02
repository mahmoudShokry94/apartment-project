"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoInputSanitize = void 0;
var mongoInputSanitize = function (searchText) {
    return ('.*' +
        searchText.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\&\|]/g, '\\$&') +
        '.*');
};
exports.mongoInputSanitize = mongoInputSanitize;
//# sourceMappingURL=mongo-utils.js.map