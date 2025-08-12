import clsx from "clsx";
import { ComponentPropsWithoutRef, useState } from "react";
import "./image.css";

export type ImageProps = Omit<ComponentPropsWithoutRef<"img">, "alt"> & {
  alt: string;
  aspectRatio?: "2:3" | "1:1" | "3:4" | "3:2" | "natural";
  size?: "small" | "medium" | "large" | "fill" | "natural";
  variant?: "default" | "rounded";
};
export function Image({
  aspectRatio = "natural",
  className,
  size = "natural",
  variant = "rounded",
  ...props
}: ImageProps) {
  const [loaded, setLoaded] = useState(false);
  const classNames = clsx(
    className,
    "image",
    `image-aspect-ratio-${aspectRatio}`,
    `image-size-${size}`,
    `image-variant-${variant}`,
    !loaded && `image-loading`,
  );
  return (
    <>
      {!loaded && <span className={clsx("image-placeholder", classNames)} />}
      {props.src && (
        <img className={classNames} {...props} onLoad={() => setLoaded(true)} />
      )}
    </>
  );
}

export type PictureProps = ComponentPropsWithoutRef<"picture">;
export function Picture({ className, ...props }: PictureProps) {
  const classNames = clsx(className, "picture");
  return <picture className={classNames} {...props} />;
}

export type PictureSourceProps = ComponentPropsWithoutRef<"source">;
export function PictureSource({ ...props }: PictureSourceProps) {
  return <source {...props} />;
}
