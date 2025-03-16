const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

async function optimizeImages() {
    const sourceDir = path.join(process.cwd(), 'public/images');
    const outputDir = path.join(process.cwd(), 'public/images/optimized');

    try {
        // Create output directory if it doesn't exist
        await fs.mkdir(outputDir, { recursive: true });

        // Read all files from source directory
        const files = await fs.readdir(sourceDir);

        for (const file of files) {
            const sourcePath = path.join(sourceDir, file);
            const stats = await fs.stat(sourcePath);

            if (stats.isFile() && /\.(jpg|jpeg|png)$/i.test(file)) {
                const filename = path.parse(file).name;

                // Convert to WebP in different sizes
                await sharp(sourcePath)
                    .webp({ quality: 80 })
                    .toFile(path.join(outputDir, `${filename}.webp`));

                await sharp(sourcePath)
                    .resize(640, null, { withoutEnlargement: true })
                    .webp({ quality: 80 })
                    .toFile(path.join(outputDir, `${filename}-sm.webp`));

                await sharp(sourcePath)
                    .resize(1280, null, { withoutEnlargement: true })
                    .webp({ quality: 80 })
                    .toFile(path.join(outputDir, `${filename}-md.webp`));

                console.log(`✓ Optimized: ${file}`);
            }
        }

        console.log('\n✨ Image optimization complete!');
    } catch (error) {
        console.error('Error optimizing images:', error);
    }
}

optimizeImages();