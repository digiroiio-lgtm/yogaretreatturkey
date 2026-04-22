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
  placeholder,
  ...props
}: OptimizedImageProps) {
  const [imgSrc, setImgSrc] = useState(src);

  // Only use blur placeholder when blurDataURL is available
  const resolvedPlaceholder = placeholder ?? (blurDataURL ? "blur" : "empty");

  return (
    <Image
      {...props}
      src={imgSrc}
      blurDataURL={blurDataURL}
      placeholder={resolvedPlaceholder}
      onError={() => setImgSrc(fallback)}
    />
  );
}
