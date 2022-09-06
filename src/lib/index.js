/* eslint-disable import/prefer-default-export */
import FefferyMarkdown from './components/FefferyMarkdown.react';

/* 
忽略部分设计React中规范的console警告信息
目前已知无关警告信息：
1. 数组推导形成的组件，每个子组件需要唯一的key
*/
try {
    consoleErrorBackup
} catch (e) {
    const consoleErrorBackup = console.error;
    console.error = (msg) => {
        const supressedWarnings = [
            'Each child in a list should have a unique',
            'React does not recognize the'
        ];

        if (!supressedWarnings.some(entry => {

            if (msg.includes) {
                return msg.includes(entry)
            }
            return false
        })) {
            consoleErrorBackup.apply(console, arguments);
        }
    };
}

export {
    FefferyMarkdown
};