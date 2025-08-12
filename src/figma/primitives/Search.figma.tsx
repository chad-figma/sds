import figma from "@figma/code-connect";
import { Search } from "primitives";

figma.connect(Search, "<FIGMA_INPUTS_SEARCH>", {
  props: {
    value: figma.string("Value"),
    variant: figma.enum("Size", {
      Small: "small",
      Large: "large",
    }),
  },
  example: (props) => <Search {...props} />,
});
