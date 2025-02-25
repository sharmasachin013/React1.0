function choice(items) {
  let idx = Math.floor(Math.random() * items.length);
  return items[idx];
}

function remove(items, item) {
  let i = items.indexOf(item);
  return [...items.slice(0, i), ...items.slice(i + 1)];
}

export { choice, remove };
