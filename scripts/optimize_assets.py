"""Regenerate the local WOFF2 and WebP assets; not required to serve the site.

Install optional tooling first: python -m pip install 'fonttools[woff]' Pillow
"""
from pathlib import Path

from fontTools.ttLib import TTFont
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]


def main():
    sources = []
    for folder, output in [('NunitoSans', 'nunito-sans.woff2'), ('Garamond', 'eb-garamond.woff2')]:
        source, = (ROOT / 'assets/fonts' / folder).glob('*.ttf')
        target = source.with_name(output)
        with TTFont(source) as font:
            font.flavor = 'woff2'
            font.save(target)
        sources.append((source, target))

    images = ROOT / 'assets/images'
    for source in sorted(images.rglob('*.jpg')) + [images / 'morpheus.png', images / 'black-cat.png']:
        target = source.with_suffix('.webp')
        with Image.open(source) as original:
            image = ImageOps.exif_transpose(original)
            if source.suffix == '.png':
                image.thumbnail((240, 240), Image.Resampling.LANCZOS)
                image.save(target, 'WEBP', lossless=True, method=6)
            else:
                image.save(target, 'WEBP', quality=80, method=6)
        sources.append((source, target))

    for source, target in sources:
        print(f'{target.relative_to(ROOT)}: {source.stat().st_size:,} -> {target.stat().st_size:,} bytes')
    before = sum(source.stat().st_size for source, _ in sources)
    after = sum(target.stat().st_size for _, target in sources)
    print(f'Total: {before:,} -> {after:,} bytes ({100 * (1 - after / before):.1f}% smaller)')


if __name__ == '__main__':
    main()
