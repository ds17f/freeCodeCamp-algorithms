
const sym = (...args) => {
  if (args.length < 2) {
    return args[0];
  }

  // use a set to dedupe
  const first = new Set(args.shift())
  // make a set out of the recursive run
  const compare = new Set(sym(...args))

  first.forEach(el => {
    if (compare.has(el)) {
      compare.delete(el)
    } else {
      compare.add(el)
    }
  })

  return [...compare].sort();
}


module.exports = sym;
