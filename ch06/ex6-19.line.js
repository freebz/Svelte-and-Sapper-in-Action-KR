// 예제 6-19 src/line.js 파일의 Line 클래스

import Point from './point';

export default class Line {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  toString() {
    return `line from ${this.start.toString()} to ${this.end.toString()}`;
  }

  translate(dx, dy) {
    this.start.translate(dx, dy);
    this.end.translate(dx, dy);
  }
}