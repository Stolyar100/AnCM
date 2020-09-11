//first task
matrixSize = 5

matrix = Array.from(Array(matrixSize), () => new Array(matrixSize))

for (i = 0; i < matrixSize; i++) {
    for (j = 0; j < matrixSize; j++) {
        matrix[i][j] = 0
    }
    matrix[i][i] = 1
}

console.log('first tasks matrix')
console.log(matrix)

// second task 
A = [
    [3, 3],
    [7, 7],
    [1, 2]
]

C = [
    [4, 6, 8],
    [2, 4, 6]
]

D = [
    [3, 2],
    [5, 4],
    [7, 3]
]

// M = D - A

M = Array.from(Array(D.length), () => new Array(D[0].length))

for (i = 0; i < D.length; i++) {
    for (j = 0; j < D[0].length; j++) {
        M[i][j] = D[i][j] - A[i][j]
    }
}
console.log('M = D - A \n', M)

//  B=A×C

B = Array.from(Array(A.length), () => new Array(C[0].length))

for (i = 0; i < B.length; i++ ) {
    for (j = 0; j < A.length; j++ ) {
        B[i][j] = 0
        for (k = 0; k < C.length; k++ ) {
            B[i][j] += A[i][k] * C[k][j]
        }
    }
}

console.log('B:')
console.log(B)

//Bt=BT

for (i = 0; i < B.length; i++) {
    for (j = i; j < B[0].length; j++) {
        [ B[i][j], B[j][i]] = [ B[j][i], B[i][j] ]
    }
}

console.log('BT:')
console.log(B)

