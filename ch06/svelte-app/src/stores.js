// 예제 6-25 src/stores.js에 정의한 numbers 스토어

import {writableSession} from './store-util';

export const numbers = writableSession('numbers', [1, 2, 3]);