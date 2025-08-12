import figma from "@figma/code-connect";
import {
  Label,
  Tag,
  TagToggle,
  TagToggleGroup,
  TagToggleList,
} from "primitives";

figma.connect(Tag, "<FIGMA_TAGS_TAG>", {
  props: {
    size: figma.enum("Size", {
      Small: "small",
      Medium: "medium",
    }),
    category: figma.enum("Category", {
      Geology: "geology",
      Marine: "marine",
      Biology: "biology",
      Ecology: "ecology",
      Astronomy: "astronomy",
    }),
  },
  example: ({ ...props }) => <Tag {...props}></Tag>,
});

figma.connect(TagToggle, "<FIGMA_TAGS_TAG_TOGGLE>", {
  props: {
    label: figma.string("Label"),
    iconStart: figma.instance("Icon"),
  },
  example: ({ label, ...props }) => (
    <TagToggle id={label} {...props}>
      {label}
    </TagToggle>
  ),
});

figma.connect(TagToggleGroup, "<FIGMA_TAGS_TAG_TOGGLE_GROUP>", {
  props: {
    children: figma.children("Tag Toggle"),
  },
  example: ({ children }) => (
    <TagToggleGroup>
      <Label>Label this!</Label>
      <TagToggleList>{children}</TagToggleList>
    </TagToggleGroup>
  ),
});
