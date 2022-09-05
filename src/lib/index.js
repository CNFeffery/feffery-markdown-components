/* eslint-disable import/prefer-default-export */
import FefferyMarkdown from './components/FefferyMarkdown.react';

/* 
忽略部分设计React中规范的console警告信息
目前已知无关警告信息：
1. 数组推导形成的组件，每个子组件需要唯一的key
*/
// const backup = console.error;
// console.error = (msg) => {
//     const supressedWarnings = [
//         'Each child in a list should have a unique'
//     ];

//     if (!supressedWarnings.some(entry => msg.includes(entry))) {
//         backup.apply(console, arguments);
//     }
// };

export {
    FefferyMarkdown
};