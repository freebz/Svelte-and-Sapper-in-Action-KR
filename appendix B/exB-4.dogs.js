// 예제 B-4 dogs.js 파일의 updateDog 함수

export async function updateDog(dog) {
  const body = JSON.stringify(dog);
  const headers = {
    'Content-Length': body.length,
    'Content-Type': 'application/json'
  };
  const res = await fetch(SERVER_URL + '/' + dog.id, {
    method: 'PUT',
    headers,
    body
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}