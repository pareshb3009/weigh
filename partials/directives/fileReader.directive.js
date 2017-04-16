;
(function() {
    "use strict";

    //
    // Prevent the user from losing data by checking the from's "dirty" status before navigating away from the page.
    //
    // Adapted from:
    //
    // http://csharperimage.jeremylikness.com/2015/05/angularjs-project-essentials.html
    //
    // KNOWN BUG: the directive does not work properly when the user navigates away by selecting another Tab (ion-tabs)
    //

    angular.module('webApp')
        .directive('appFilereader', function($q) {
            /*
            made by elmerbulthuis@gmail.com WTFPL licensed
            */
            var slice = Array.prototype.slice;

            return {
                restrict: 'A',
                require: '?ngModel',
                link: function(scope, element, attrs, ngModel) {
                        if (!ngModel) return;

                        ngModel.$render = function() {}

                        element.bind('change', function(e) {

                            var element = e.target;
                            if (!element.value) return;

                            element.disabled = true;
                            $q.all(slice.call(element.files, 0).map(readFile))
                                //$q.all(slice.call(element.files, 0))
                                .then(function(values) {
                                    if (element.multiple) ngModel.$setViewValue(values);
                                    else ngModel.$setViewValue(values.length ? values[0] : null);
                                    element.value = null;
                                    element.disabled = false;
                                });

                            function readFile(file) {

                                var deferred = $q.defer();

                                var reader = new FileReader();
                                var f;
                                reader.onload = function(e) {
                                    f = JSONFile(file);
                                    var ret = {};
                                    ret.base64 = e.target.result;
                                    ret.file = f;
                                    deferred.resolve(ret);
                                }
                                reader.onerror = function(e) {
                                    deferred.reject(e);
                                }
                                reader.readAsDataURL(file);

                                return deferred.promise;
                            }

                            function JSONFile(file) {
                                var fileJSON = {};
                                for (var key in file) {
                                    var value = file[key];
                                    console.log(key);
                                    console.log(value)
                                    fileJSON[key] = value;
                                }
                                return fileJSON;
                            }

                        }); //change

                    } //link

            }; //return
        });

}());
