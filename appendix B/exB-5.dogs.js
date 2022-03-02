// 예제 B-5 dogs.js 파일의 deleteDog 함수

export async function deleteDog(id) {
  const res = await fetch(SERVER_URL + '/' + id, {
    method: 'DELETE'
  });
  if (!res.ok) throw new Error(await res.text());
}