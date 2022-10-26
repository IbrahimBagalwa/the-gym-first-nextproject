import Image from 'next/image';
import React from 'react';

export default function UploadImage({ src, w, h, sty }) {
  return <Image src={src} width={w} height={h} className={sty} />;
}
