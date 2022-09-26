import { Container, Subtitle, Title } from "./styles";
import React from "react-native";


type Props = {
  title: string;
  subtitle: string;
}

export function Highlight({ title, subtitle }: Props) {
  return (
    <Container>
      <Title>
        {title}
      </Title>

      <Subtitle>
        {subtitle}
      </Subtitle>
    </Container>
  )
}