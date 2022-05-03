/* eslint-disable import/prefer-default-export */
import FefferyMarkdown from './components/FefferyMarkdown.react';

// 屏蔽所有warning信息
window.console = (function () {
    var c = {};
    c.warn = function () { };
    return c;
})();

export {
    FefferyMarkdown
};
