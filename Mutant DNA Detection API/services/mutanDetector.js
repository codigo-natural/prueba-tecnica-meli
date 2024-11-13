//services/mutanDetector.js
export const isMutant = (dna) => {
  if (!dna || !Array.isArray(dna)) return false
  const n = dna.length
  if (dna.some((row) => row.length !== n)) return false
  if (
    dna.some((row) =>
      row.split('').some((char) => !['A', 'T', 'C', 'G'].includes(char))
    )
  )
    return false

  // Convertir a matriz de caracteres
  const matrix = dna.map((row) => row.split(''))

  // Función para verificar secuencia
  const checkSequence = (x, y, dx, dy) => {
    return (
      x >= 0 &&
      x < n &&
      y >= 0 &&
      y < n &&
      x + 3 * dx < n &&
      y + 3 * dy < n &&
      matrix[x][y] === matrix[x + dx][y + dy] &&
      matrix[x][y] === matrix[x + 2 * dx][y + 2 * dy] &&
      matrix[x][y] === matrix[x + 3 * dx][y + 3 * dy]
    )
  }

  // Contar secuencias
  const countSequences = () => {
    let count = 0
    const directions = [
      [0, 1],
      [1, 0],
      [1, 1],
      [1, -1],
    ]
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        for (const [dx, dy] of directions) {
          if (checkSequence(i, j, dx, dy)) {
            count++
            if (count > 1) return true
          }
        }
      }
    }
    return false
  }

  return countSequences()
}
