import { Container, LoadIndicator } from './styles';
import React from "react-native";


export function Loading() {
  return (
    <Container>
      <LoadIndicator />
    </Container>
  );
}