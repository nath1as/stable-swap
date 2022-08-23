import fs from 'fs'
// D invariant calculation
// A * sum(x_i) * n**n + D = A * D * n**n + D**(n+1) / (n**n * prod(x_i))
//Converging solution:
// D[j+1] = (A * n**n * sum(x_i) - D[j]**(n+1) / (n**n prod(x_i))) / (A * n**n - 1)

const getFiles = () => {
  const path = `StableSwap-test-2.csv`
  const file = fs.readFileSync(path)
  const fc = file.toString()

  const rows = fc.split('\n')
  rows.forEach((row, i) => {
    const a = row.split(",");
    const A = a[0];
    const x = a[1];
    const y = a[2];
    const exchngX = a[3];
    const exchngY = null; 
    
    console.log(i, A, x, y, exchngX );
  }
  )
}

getFiles()
