// controller/dnaController.js

import DNA from '../models/dna.js'
import { isMutant } from '../services/mutanDetector.js'

export const analyzeDNA = async (req, res) => {
  try {
    const { dna } = req.body

    if (!dna || !Array.isArray(dna)) {
      return res.status(400).json({ error: 'Invalid DNA sequence format' })
    }
    const dnaString = JSON.stringify(dna)
    const existingDNA = await DNA.findOne({ sequence: dna })

    if (existingDNA) {
      return res
        .status(existingDNA.isMutant ? 200 : 403)
        .json({ isMutant: existingDNA.isMutant })
    }

    const mutantResult = isMutant(dna)

    await DNA.create({
      sequence: dna,
      isMutant: mutantResult,
    })

    return res.status(mutantResult ? 200 : 403).json({ isMutant: mutantResult })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}

export const getStats = async (req, res) => {
  try {
    const mutantCount = await DNA.countDocuments({ isMutant: true })
    const humanCount = await DNA.countDocuments({ isMutant: false })
    const ratio = humanCount === 0 ? 0 : mutantCount / humanCount

    return res.json({
      count_mutant_dna: mutantCount,
      count_human_dna: humanCount,
      ratio: parseFloat(ratio.toFixed(2)),
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}
