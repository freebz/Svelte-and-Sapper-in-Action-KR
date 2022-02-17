// 예제 12-2 jest.config.js 파일에 제스트 설정하기

module.exports = {
  bail: false,
  moduleFileExtensions: ['js', 'svelte'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.svelte$': 'svelte-jester'
  },
  verbose: true
};