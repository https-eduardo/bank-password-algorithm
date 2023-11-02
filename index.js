const bcrypt = require('bcrypt')

// An example password with six digits
const password = '053419'
const encryptedPassword = bcrypt.hashSync(password, 8)

const VALID_KEYPADS_INPUT = [[0, 3], [4, 5], [0, 3], [4, 5], [1, 6], [9, 7]]

const INVALID_KEYPADS_INPUT = [[4, 5], [1, 6], [9, 7], [1, 6], [9, 7], [4, 5]]

function generateSequences(keypads) {
  const sequences = [];
  // Max different sequences (permutations)
  const MAX_SEQUENCES = 2 ** 6;
  let sequence = '';

  while (sequences.length !== MAX_SEQUENCES) {
    for (keysGroup of keypads) {
      const randIdx = Math.round(Math.random())
      sequence += keysGroup[randIdx]
    }
    if (!sequences.includes(sequence))
      sequences.push(sequence);

    sequence = '';
  }
  return sequences;
}

function isValidPassword(sequences) {
  for (const sequence of sequences) {
    if (bcrypt.compareSync(sequence, encryptedPassword))
      return true
  }
  return false
}

const validSequences = generateSequences(VALID_KEYPADS_INPUT)
const valid = isValidPassword(validSequences)
console.log('First input:', valid)

const invalidSequences = generateSequences(INVALID_KEYPADS_INPUT)
const invalid = isValidPassword(invalidSequences)
console.log('Second input:', invalid)
