import clsx from "clsx";
import { IconX } from "icons";
import React from "react";
import {
  Button as RACButton,
  PressEvent as RACPressEvent,
  Tag as RACTag,
  type TagProps as RACTagProps,
} from "react-aria-components";
import { AnchorOrButton, type AnchorOrButtonProps } from "utils";
import "./tag.css";

type TagCategory = "marine" | "geology" | "biology" | "ecology" | "astronomy";
type TagStatus = "submitted" | "review";
type TagSize = "medium" | "small";

type SharedTagProps = {
  category?: TagCategory;
  size?: TagSize;
};

type TagRemovableProps = { onRemove?: (e: RACPressEvent) => void };

const CategoryLabels: Record<TagCategory, string> = {
  marine: "Marine Sci.",
  geology: "Geology",
  biology: "Biology",
  ecology: "Ecology",
  astronomy: "Astronomy",
};

const StatusLabels: Record<TagStatus, string> = {
  submitted: "Submitted",
  review: "In Review",
};

export type TagProps = SharedTagProps &
  TagRemovableProps &
  React.ComponentPropsWithoutRef<"span">;
export function Tag({
  children,
  category = "geology",
  size = "medium",
  onRemove,
  ...props
}: TagProps) {
  const classNames = clsx(
    "tag",
    `tag-category-${category}`,
    `tag-size-${size}`,
  );
  const label = CategoryLabels[category] || category;
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
  {
    className,
    category = "geology",
    size = "medium",
    ...props
  }: TagButtonProps,
  ref: React.ForwardedRef<HTMLElement>,
) {
  const classNames = clsx(
    className,
    "tag",
    "tag-button",
    `tag-category-${category}`,
    `tag-size-${size}`,
  );

  return <AnchorOrButton {...props} className={classNames} ref={ref} />;
});

export type TagReviewProps = RACTagProps & {
  status?: TagStatus;
  size?: TagSize;
};
export function TagReview({
  children,
  className,
  status,
  size = "medium",
  textValue,
  ...props
}: TagReviewProps) {
  const classNames = clsx(
    className,
    "tag",
    "tag-review",
    size && `tag-size-${size}`,
    status && `tag-status-${status}`,
  );
  const fallbackLabel = status ? StatusLabels[status] : undefined;
  const content = children ?? fallbackLabel;

  textValue =
    textValue || (typeof content === "string" ? content : content?.toString());
  return (
    <RACTag className={classNames} textValue={textValue} {...props}>
      <>{content}</>
    </RACTag>
  );
}
