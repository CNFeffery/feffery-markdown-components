/* eslint-disable import/prefer-default-export */
import FefferyMarkdown from './components/FefferyMarkdown.react';
import FefferySyntaxHighlighter from './components/FefferySyntaxHighlighter.react';

/* 
忽略部分设计React中规范的console警告信息
目前已知无关警告信息：
1. 数组推导形成的组件，每个子组件需要唯一的key
2. 在原生html元素中携带小驼峰命名法的props
*/
// try {
//     consoleErrorBackup
// } catch (e) {
//     const consoleErrorBackup = console.error;
//     console.error = (msg) => {
//         const supressedWarnings = [
//             'Each child in a list should have a unique',
//             'React does not recognize the'
//         ];

//         if (!supressedWarnings.some(entry => msg.includes && msg.includes(entry))) {
//             consoleErrorBackup(msg);
//         }
//     };
// }

export {
    FefferyMarkdown,
    FefferySyntaxHighlighter
};