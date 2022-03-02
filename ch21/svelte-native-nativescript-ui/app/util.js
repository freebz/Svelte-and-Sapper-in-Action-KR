// 예제 21-15 app/util.js 파일에 정의한 singleLine 함수

// 태그된 템플릿 리터럴 함수로써 개행 문자('\n')를 공백 문자로 바꾼 다음
// 두 개 이상 연결된 공백 문자를 한 개로 줄입니다.
export function singleLine(literals) {
  return literals
    .join(' ')
    .replace(/\n/g, ' ')
    .replace(/  +/g, ' ')
    .trim();
}
