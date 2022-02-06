// 예제 6-18 src/point.js 파일의 Point 클래스

export default class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return `(${this.x}, ${this.y})`;
  }

  translate(dx, dy) {
    this.x += dx;
    this.y += dy;
  }
}