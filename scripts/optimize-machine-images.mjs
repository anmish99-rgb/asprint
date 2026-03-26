import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const rootDir = process.cwd()
const outputDir = path.join(rootDir, 'public', 'machines')

const machineImages = [
  { input: 'UV_PRINTING.webp', slug: 'uv-printing' },
  { input: 'CNC_ROUTER.webp', slug: 'cnc-router' },
  { input: 'C02_LASER.webp', slug: 'co2-laser' },
  { input: 'spot-welding.webp', slug: 'spot-welding' },
  { input: 'channel_letter bending.webp', slug: 'channel-letter-bending' },
]

const variants = [
  { width: 480, quality: 68 },
  { width: 960, quality: 72 },
]

await fs.mkdir(outputDir, { recursive: true })

for (const image of machineImages) {
  const inputPath = path.join(rootDir, image.input)

  for (const variant of variants) {
    const outputPath = path.join(outputDir, `${image.slug}-${variant.width}.webp`)

    await sharp(inputPath)
      .resize({
        width: variant.width,
        withoutEnlargement: true,
      })
      .webp({
        quality: variant.quality,
        effort: 6,
      })
      .toFile(outputPath)

    const { size } = await fs.stat(outputPath)
    console.log(`${path.basename(outputPath)} - ${(size / 1024).toFixed(1)} KB`)
  }
}
