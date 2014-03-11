function compileAndLinkFn(compile) {
    return function (template, scope) {
        var element = angular.element(template);

        compile(element)(scope);
        scope.$digest();

        return element;
    };
}

function stringify(object) {
    var seen = [];

    return JSON.stringify(object, function (key, val) {
        if (typeof val == "object") {
            if (seen.indexOf(val) >= 0) {
                return undefined;
            } else {
                seen.push(val);
            }
        }
        return val;
    });
}
