def is_mutant(dna):
    """
    Detecta si una secuencia de ADN corresponde a un mutante.
    Un mutante tiene más de una secuencia de 4 letras iguales consecutivas
    en cualquier dirección (horizontal, vertical o diagonal).
    
    Args:
        dna (List[str]): Lista de strings representando la matriz de ADN
        
    Returns:
        bool: True si es mutante, False si no lo es
    """
    if not dna or not isinstance(dna, list):
        return False
    
    # Convertimos strings a una matriz de caracteres
    n = len(dna)
    matrix = [list(row) for row in dna]
    
    def check_sequence(x, y, dx, dy):
        """Verificamos si hay una secuencia de 4 letras iguales desde una posición en una dirección"""
        if not (0 <= x < n and 0 <= y < n):
            return False
            
        # Verificamos si hay espacio suficiente en la dirección indicada
        if not (0 <= x + 3*dx < n and 0 <= y + 3*dy < n):
            return False
            
        return all(matrix[x + i*dx][y + i*dy] == matrix[x][y] for i in range(4))
    
    def count_sequences():
        """Cuenta el número total de secuencias en todas las direcciones"""
        sequences = 0
        directions = [
            (0,1),  # horizontal
            (1,0),  # vertical
            (1,1),  # diagonal principal
            (1,-1)  # diagonal inversa
        ]
        
        for i in range(n):
            for j in range(n):
                for dx, dy in directions:
                    if check_sequence(i, j, dx, dy):
                        sequences += 1
                        if sequences > 1:  # Si encontramos más de una secuencia
                            return sequences
        return sequences
    
    # Validaciones iniciales
    if not all(len(row) == n for row in dna):  # Verificar que sea NxN
        return False
        
    valid_letters = {'A', 'T', 'C', 'G'}
    if not all(all(letter in valid_letters for letter in row) for row in dna):
        return False
    
    return count_sequences() > 1

# Pruebas
if __name__ == "__main__":
    # Caso mutante
    dna_mutant = [
        "ATGCGA",
        "CAGTGC",
        "TTATGT",
        "AGAAGG",
        "CCCCTA",
        "TCACTG"
    ]
    
    # Caso no mutante
    dna_human = [
        "ATGCGA",
        "CAGTGC",
        "TTATTT",
        "AGAGGG",
        "GCGTCA",
        "TCACTG"
    ]
    
    print("Test mutante:", is_mutant(dna_mutant))  # Debe imprimir True
    print("Test humano:", is_mutant(dna_human))    # Debe imprimir False