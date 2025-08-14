'use client';
import Section from '../../components/Section';
import Image from 'next/image';

const items = [
  { label: 'Hawaii_Chicken', src: '/images/chicken.JPG' },
  { label: 'Lake Como', src: '/images/como.jpg' },
  { label: 'Hawaii', src: '/images/hawaii.JPG' },
  { label: 'Greece', src: '/images/cats.png' },
  { label: 'Yosemite', src: '/images/yosemite.png' },
  { label: 'Recco', src: '/images/recco.JPG' },
];

function Tile({ label, src }: { label: string; src?: string }) {
  return (
    <figure className="tile">
      {src ? (
        <Image
          src={src}
          width={1200}
          height={800}
          alt={label}
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      ) : (
        <div style={{ aspectRatio: '4/3' }} />
      )}
      <figcaption className="tile__caption">
        <span className="tile__capchip">{label}</span>
      </figcaption>
    </figure>
  );
}

export default function Gallery() {
  return (
    <Section id="gallery" title="Gallery" eyebrow="Places I’ve loved">
      <div className="gallery">
        {items.map((i) => (
          <Tile key={i.label} {...i} />
        ))}
      </div>
    </Section>
  );
}
