import figma from "@figma/code-connect";
import { Button, ButtonDanger } from "primitives";

const sharedProps = {
  label: figma.string("Label"),
  iconEnd: figma.boolean("Has Icon End", {
    true: figma.instance("Icon End"),
    false: undefined,
  }),
  size: figma.enum("Size", {
    Small: "small",
  }),
  isDisabled: figma.enum("State", {
    Disabled: true,
  }),
};

figma.connect(Button, "<FIGMA_BUTTONS_BUTTON>", {
  props: {
    ...sharedProps,
    variant: figma.enum("Variant", {
      Neutral: "neutral",
    }),
  },
  example: ({ label, iconEnd, ...props }) => (
    <Button onPress={() => {}} {...props}>
      {label}
      {iconEnd}
    </Button>
  ),
});
figma.connect(Button, "<FIGMA_BUTTONS_BUTTON_DANGER>", {
  props: {
    ...sharedProps,
    variant: figma.enum("Variant", {
      Subtle: "danger-subtle",
    }),
  },
  example: ({ label, iconEnd, ...props }) => (
    <ButtonDanger onPress={() => {}} {...props}>
      {label}
      {iconEnd}
    </ButtonDanger>
  ),
});
