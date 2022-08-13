import {
  Box,
  Container,
  Group,
  Textarea,
  TextInput,
  useMantineColorScheme,
} from "@mantine/core"
import type { NextPage } from "next"
import { useForm } from "@mantine/form"
import { HeadingTitle } from "../components/Element/Title"
import { Button } from "../components/Element/Button"

const Contact: NextPage = () => {
  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      message: "",
    },

    validate: {
      name: (value) => (!value.trim() ? "※必須項目です" : null),
      message: (value) => (!value.trim() ? "※必須項目です" : null),
      email: (value) =>
        /^\S+@\S+$/.test(value)
          ? null
          : "適切なメールアドレスを入力してください",
    },
  })

  return (
    <Container size="lg">
      <HeadingTitle title="Contact" />
      <Box>
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <Box className="space-y-6">
            <TextInput
              required
              label="Email"
              placeholder="your@email.com"
              {...form.getInputProps("email")}
            />

            <TextInput
              required
              label="Name"
              placeholder="Taro Yamada"
              {...form.getInputProps("name")}
            />

            <Textarea
              required
              label="Your Message"
              placeholder="your@email.com"
              {...form.getInputProps("message")}
            />

            <Group position="center">
              <Button type="submit">Send message</Button>
            </Group>
          </Box>
        </form>
      </Box>
    </Container>
  )
}

export default Contact
