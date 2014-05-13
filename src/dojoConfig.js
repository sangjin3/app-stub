var webidaHost = decodeURIComponent(
    document.cookie.replace(/(?:(?:^|.*;\s*)webida\.host\s*\=\s*([^;]*).*$)|^.*$/, '$1')
);

var dojoConfig = {
    async: true,
    baseUrl: '.',
    parseOnLoad: false,
    packages: [
        { name: 'webida-lib', location: '//library.' + webidaHost + '/webida/src' },
        //{ name: 'webida-lib', location: 'library.git/webida/src' },
        { name: 'all-lib', location: '//library.' + webidaHost },
        //{ name: 'all-lib', location: 'library.git' },
    ],
    locale: location.search.match(/locale=([\w\-]+)/) ? RegExp.$1 : "en-us",
};
