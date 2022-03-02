// 예제 B-2 dogs.js 파일의 getDogs 함수

export async function getDogs() {
  const res = await fetch(SERVER_URL);
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}