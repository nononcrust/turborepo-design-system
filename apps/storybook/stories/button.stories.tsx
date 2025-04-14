import { Button } from "@repo/design-system/components";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return <Button>버튼 호</Button>;
  },
};
