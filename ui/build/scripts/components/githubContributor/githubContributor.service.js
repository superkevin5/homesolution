!function(){"use strict";function t(t,r){function n(n){function u(t){return t.data}function a(r){t.error("XHR Failed for getContributors.\n"+angular.toJson(r.data,!0))}return n||(n=30),r.get(o+"/contributors?per_page="+n).then(u)["catch"](a)}var o="https://api.github.com/repos/Swiip/generator-gulp-angular",u={apiHost:o,getContributors:n};return u}angular.module("ui").factory("githubContributor",t)}();