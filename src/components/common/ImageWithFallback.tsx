import { useState } from 'react';
import { classNames } from '@/utils/classNames';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackLabel?: string;
  wrapperClassName?: string;
}

function ImageWithFallback({
  src,
  alt,
  className,
  wrapperClassName,
  fallbackLabel = 'Image unavailable',
  ...props
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) {
    return (
      <div
        className={classNames(
          'flex h-full w-full items-center justify-center bg-slate-950 text-sm text-slate-500',
          wrapperClassName,
        )}
      >
        {fallbackLabel}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={classNames('h-full w-full object-cover', className)}
      onError={() => setHasError(true)}
      {...props}
    />
  );
}

export default ImageWithFallback;