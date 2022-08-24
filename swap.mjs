import fs from 'fs'

const getDepositSize = (amp, poolX, poolY, x) => {
// A * sum(x_i) * n**n + D = A * D * n**n + D**(n+1) / (n**n * prod(x_i))

  const sum = poolX + poolY;
  const prod = poolX * poolY;
  const deposit =
    amp * 4 * sum / ((prod * 4) / 2) / ((4 * amp - 1) / 2)

  return deposit
}

const getFiles = () => {
  const path = `StableSwap-test-2.csv`
  const file = fs.readFileSync(path)
  const fc = file.toString()
  const rows = fc.split('\n')

  rows.forEach((row, i) => {
    const a = row.split(',')
    const amp = a[0]
    const poolX = Number(a[1])
    const poolY = Number(a[2])
    // swap input tokens
    const inTokens = a[3]
    const taxedTokens = inTokens * 0.9965
    // swap output tokens
    // poolY - ( D* inputTokens)
    const outTokens = 
      poolX - getDepositSize(amp, poolX, poolY ) * taxedTokens
    console.log(a, outTokens)

    //first
    // 121.93860725257042
  })
}

getFiles()

// resources: 
// https://github.com/curvefi/curve-contract/blob/b0bbf77f8f93c9c5f4e415bce9cd71f0cdee960e/tests/simulation.py#L41
// https://solidity-by-example.org/defi/constant-product-amm/
// https://miguelmota.com/blog/understanding-stableswap-curve/
//https://github.com/miguelmota/miguelmota.github.io/blob/master/static/blog/understanding-stableswap-curve/main.js#L22
