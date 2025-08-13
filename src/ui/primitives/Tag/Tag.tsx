import clsx from "clsx";
import React from "react";
import {
  Tag as RACTag,
  type TagProps as RACTagProps,
} from "react-aria-components";
import "./tag.css";

type TagCategory = "marine" | "geology" | "biology" | "ecology" | "astronomy";
type TagStatus = "submitted" | "review";
type TagSize = "medium" | "small";

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

export type TagProps = {
  category?: TagCategory;
  size?: TagSize;
} & React.ComponentPropsWithoutRef<"span">;

export function Tag({
  category = "geology",
  size = "medium",
  className,
  ...props
}: TagProps) {
  const label = CategoryLabels[category];
  const classNames = clsx(
    "tag",
    `tag-category-${category}`,
    `tag-size-${size}`,
    className,
  );

  return (
    <span {...props} className={classNames}>
      {label}
    </span>
  );
}

export type TagReviewProps = Omit<RACTagProps, "children"> & {
  status: TagStatus;
  size?: TagSize;
};

export function TagReview({
  status,
  size = "medium",
  className,
  textValue,
  ...props
}: TagReviewProps) {
  const label = StatusLabels[status];
  const classNames = clsx(
    "tag",
    "tag-review",
    `tag-status-${status}`,
    `tag-size-${size}`,
    className,
  );

  return (
    <RACTag className={classNames} textValue={textValue ?? label} {...props}>
      {label}
    </RACTag>
  );
}
