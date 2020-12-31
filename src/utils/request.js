
export async function postRequest(url, data) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':`Bearer ${global.token}`

    },
    body: JSON.stringify(data),
  });
  const json = await response.json();
  if (response.ok) {
    return json;
  }
  else {
    let { message } = json
    throw new Error(message);
  }
}

export async function getRequest(url, id) {
  getUrl = id ? url + `?id=${id}`: url
  const response = await fetch(getUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':`Bearer ${global.token}`
    },
  });
  const json = await response.json();
  if (response.ok) {
    return json;
  }
  else {
    let { message } = json
    throw new Error(message);
  }
}