/*global $, M*/


(function(global) {
    'use strict';

    M.APPLICATION_NAME = '<%= _.camelize(appname) %>';
    global.<%= _.camelize(appname) %> = M.Application.design();

    $(document).ready(function() {

        global.<%= _.camelize(appname) %>.start({
            routing: {
                routes: {

                }
            },
            locales: [
                {locale: 'en'}
            ]
        });
    });

})(this);