import clsx from "clsx";
import { IconX } from "icons";
import React, { ReactNode } from "react";
import {
  Button as RACButton,
  PressEvent as RACPressEvent,
  Tag as RACTag,
  TagGroup as RACTagGroup,
  TagList as RACTagList,
  type TagGroupProps as RACTagGroupProps,
  type TagListProps as RACTagListProps,
  type TagProps as RACTagProps,
} from "react-aria-components";
import { AnchorOrButton, type AnchorOrButtonProps } from "utils";
import "./tag.css";

type TagScheme = "marine" | "geology" | "biology" | "ecology" | "astronomy";
type TagSize = "medium" | "small";

type SharedTagProps = {
  scheme?: TagScheme;
  size?: TagSize;
};

type TagRemovableProps = { onRemove?: (e: RACPressEvent) => void };

const SchemeLabels: Record<TagScheme, string> = {
  marine: "Marine Sci.",
  geology: "Geology",
  biology: "Biology",
  ecology: "Ecology",
  astronomy: "Astronomy",
};

export type TagProps = SharedTagProps &
  TagRemovableProps &
  React.ComponentPropsWithoutRef<"span">;
export function Tag({
  children,
  scheme = "geology",
  size = "medium",
  onRemove,
  ...props
}: TagProps) {
  const classNames = clsx("tag", `tag-scheme-${scheme}`, `tag-size-${size}`);
  const label = SchemeLabels[scheme] || scheme;
  return (
    <span {...props} className={classNames}>
      {label}
      {onRemove && (
        <RACButton className="tag-remove-button" onPress={onRemove}>
          <IconX size="16" />
        </RACButton>
      )}
    </span>
  );
}

export type TagButtonProps = SharedTagProps & AnchorOrButtonProps;
export const TagButton = React.forwardRef(function Tag(
  { className, scheme = "geology", size = "medium", ...props }: TagButtonProps,
  ref: React.ForwardedRef<HTMLElement>,
) {
  const classNames = clsx(
    className,
    "tag",
    "tag-button",
    `tag-scheme-${scheme}`,
    `tag-size-${size}`,
  );

  return <AnchorOrButton {...props} className={classNames} ref={ref} />;
});

export type TagToggleProps = RACTagProps & { iconStart?: ReactNode };
export function TagToggle({
  children,
  className,
  iconStart,
  textValue,
  ...props
}: TagToggleProps) {
  const classNames = clsx(className, "tag", "tag-toggle");
  textValue =
    textValue ||
    (typeof children === "string" ? children : (children || "").toString());
  return (
    <RACTag className={classNames} textValue={textValue} {...props}>
      <>
        {iconStart}
        {children}
      </>
    </RACTag>
  );
}

export type TagToggleGroupProps = RACTagGroupProps;
export function TagToggleGroup({ className, ...props }: TagToggleGroupProps) {
  const classNames = clsx(className, "tag-toggle-group");
  return <RACTagGroup className={classNames} {...props} />;
}

export type TagToggleListProps<T> = RACTagListProps<T>;
export function TagToggleList<T extends object>({
  className,
  ...props
}: TagToggleListProps<T>) {
  const classNames = clsx(className, "tag-toggle-list");
  return <RACTagList className={classNames} {...props} />;
}
