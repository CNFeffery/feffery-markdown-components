/* eslint-disable import/prefer-default-export */
import FefferyMarkdown from './components/FefferyMarkdown.react';

// 忽略部分console警告信息
const backup = console.error;
console.error = (msg) => {
    const supressedWarnings = ['Warning:'];

    if (!supressedWarnings.some(entry => msg.includes(entry))) {
        backup.apply(console, arguments);
    }
};

export {
    FefferyMarkdown
};