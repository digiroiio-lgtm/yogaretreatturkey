"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";
import { FALLBACK_IMAGE, BLUR_DATA_URL } from "@/lib/images";

type OptimizedImageProps = Omit<ImageProps, "onError"> & {
  fallback?: string;
};

export function OptimizedImage({
  fallback = FALLBACK_IMAGE,
  src,
  blurDataURL = BLUR_DATA_URL,
  placeholder = "blur",
  ...props
}: OptimizedImageProps) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      {...props}
      src={imgSrc}
      blurDataURL={blurDataURL}
      placeholder={placeholder}
      onError={() => setImgSrc(fallback)}
    />
  );
}
