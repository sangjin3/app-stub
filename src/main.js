'use strict';

/**
 * The Webida core provides plugin management and ...
 *
 * @module core
 */

/**
 * The Webida plugins are set of code/data that contribute functionality to the webida ide.
 *
 * @module plugins
 */

require(['webida-lib/util/loading-screen'], function () {
    require(['webida-lib/app', 'webida-lib/util/browserInfo', 'all-lib/URIjs/URI'], function (ide, brInfo, URI) {
        function proceed() {
            var currentURI = URI(window.location.href);
            var workspaceInfo = currentURI.search(true).workspace;

            if (workspaceInfo.length === 0) {
                require(['popup-dialog'], function (PopupDialog) {
                    PopupDialog.alert({
                        title: 'Error',
                        message: 'Workspace is not specified',
                        type: 'error'
                    });
                    return;
                });
            } else {
                var idePathname = currentURI.segment(-1, '').pathname();
                ide.openWorkspace(idePathname, workspaceInfo);
            }
        }

        var browser = brInfo.browser;
        var brVer = brInfo.browserVer;
        var majorVer = brVer.split('.')[0];
        majorVer = (majorVer && parseInt(majorVer, 10)) || -1;

        if (/chrome/i.test(browser) && majorVer >= 31) {
            proceed();
        } else {
            require(['webida-lib/widgets/dialogs/popup-dialog/PopupDialog'], function (PopupDialog) {
                PopupDialog.confirm({
                    title: 'Confirm',
                    message: 'Currently, Webida IDE only supports Chrome 31.x and later versions ' +
                             '(you are using ' + browser + ' ' + brVer + '). ' +
                             'Do you want to proceed anyway?'
                }).then(proceed);
            });
        }

    });
});