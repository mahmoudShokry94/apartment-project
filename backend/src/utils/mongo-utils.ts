export const mongoInputSanitize = function (searchText:string) {
    return ('.*' +
        searchText.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\&\|]/g, '\\$&') +
        '.*');
};