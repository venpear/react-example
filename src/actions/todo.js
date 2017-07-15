export function add(text) {
  return {
    type: 'ADD_TODO',
    todo: {
      text: text,
      complated: false
    }
  }
}

export function update(idx,checked) {
  return {
    type: 'UPDATE_TODO',
    idx,
    checked
  }
}