function updateTask(id, done) {
  let data = { done: !done };
  fetch('/tasks/' + id, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.status !== 200) {
        return Promise.reject();
      }
      location.reload();
    })
    .catch(() => alert('ошибка'));
}
