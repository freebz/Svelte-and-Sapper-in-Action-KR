// 예제 B-3 dogs.js 파일의 getDog 함수

export async function getDog(id) {
  const res = await fetch(SERVER_URL + '/' + id);
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}