// 예제 6-20 src/stores.js에 정의한 스토어

import {writable} from 'svelte/store';
import Line from './line';
import Point from './point';

export const pointStore = writable(new Point(0, 0));

export const lineStore =
  writable(new Line(new Point(0, 0), new Point(0, 0)));