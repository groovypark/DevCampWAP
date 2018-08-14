export const storage = {
  fetch() {
    const arr = []
    for (var i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
        arr.push(localStorage.key(i));
      }
    }
    return arr
  }
}
