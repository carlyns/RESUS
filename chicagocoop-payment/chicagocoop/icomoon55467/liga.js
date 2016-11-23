/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
    'use strict';
    function supportsProperty(p) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            i,
            div = document.createElement('div'),
            ret = p in div.style;
        if (!ret) {
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (i = 0; i < prefixes.length; i += 1) {
                ret = prefixes[i] + p in div.style;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    var icons;
    if (!supportsProperty('fontFeatureSettings')) {
        icons = {
            'home': '&#xe900;',
            'house': '&#xe900;',
            'home3': '&#xe902;',
            'house3': '&#xe902;',
            'office': '&#xe903;',
            'buildings': '&#xe903;',
            'newspaper': '&#xe904;',
            'news': '&#xe904;',
            'pencil': '&#xe905;',
            'write': '&#xe905;',
            'file-text': '&#xe90a;',
            'file': '&#xe90a;',
            'profile': '&#xe90b;',
            'file2': '&#xe90b;',
            'file-empty': '&#xe90c;',
            'file3': '&#xe90c;',
            'files-empty': '&#xe90d;',
            'files': '&#xe90d;',
            'file-text2': '&#xe90e;',
            'file4': '&#xe90e;',
            'copy': '&#xe90f;',
            'duplicate': '&#xe90f;',
            'paste': '&#xe910;',
            'clipboard-file': '&#xe910;',
            'bubbles': '&#xe911;',
            'comments': '&#xe911;',
            'bubbles2': '&#xe912;',
            'comments2': '&#xe912;',
            'users': '&#xe913;',
            'group': '&#xe913;',
            'search': '&#xe914;',
            'magnifier': '&#xe914;',
            'key2': '&#xe916;',
            'password2': '&#xe916;',
            'wrench': '&#xe917;',
            'tool': '&#xe917;',
            'cog': '&#xe918;',
            'gear': '&#xe918;',
            'cogs': '&#xe919;',
            'gears': '&#xe919;',
            'rocket': '&#xe91b;',
            'jet': '&#xe91b;',
            'accessibility': '&#xe91c;',
            'menu': '&#xe91e;',
            'list3': '&#xe91e;',
            'star-empty': '&#xe922;',
            'rate': '&#xe922;',
            'circle-up': '&#xe925;',
            'up3': '&#xe925;',
          '0': 0
        };
        delete icons['0'];
        window.icomoonLiga = function (els) {
            var classes,
                el,
                i,
                innerHTML,
                key;
            els = els || document.getElementsByTagName('*');
            if (!els.length) {
                els = [els];
            }
            for (i = 0; ; i += 1) {
                el = els[i];
                if (!el) {
                    break;
                }
                classes = el.className;
                if (/icon-/.test(classes)) {
                    innerHTML = el.innerHTML;
                    if (innerHTML && innerHTML.length > 1) {
                        for (key in icons) {
                            if (icons.hasOwnProperty(key)) {
                                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
                            }
                        }
                        el.innerHTML = innerHTML;
                    }
                }
            }
        };
        window.icomoonLiga();
    }
}());
