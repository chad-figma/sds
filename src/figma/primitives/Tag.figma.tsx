import figma from "@figma/code-connect";
import { Tag, TagReview } from "primitives";

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
  example: ({ ...props }) => <Tag {...props} />,
});

figma.connect(TagReview, "<FIGMA_TAGS_TAG_REVIEW>", {
  props: {
    status: figma.enum("Status", {
      Submitted: "submitted",
      Review: "review",
    }),
    size: figma.enum("Size", {
      Small: "small",
      Medium: "medium",
    }),
  },
  example: (props) => <TagReview {...props} />,
});
