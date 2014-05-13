var webidaHost = decodeURIComponent(
    document.cookie.replace(/(?:(?:^|.*;\s*)webida\.host\s*\=\s*([^;]*).*$)|^.*$/, '$1')
);

var dojoConfig = {
    async: true,
    baseUrl: '.',
    parseOnLoad: false,
    packages: [
        { name: 'webida-lib', location: '//library.' + webidaHost + '/src/webida' },
        //{ name: 'webida-lib', location: 'library.git/src/webida' },
        { name: 'all-lib', location: '//library.' + webidaHost + '/src' },
        //{ name: 'all-lib', location: 'library.git/src' },
    ],
    locale: location.search.match(/locale=([\w\-]+)/) ? RegExp.$1 : "en-us",
};
