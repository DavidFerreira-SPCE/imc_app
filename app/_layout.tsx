import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack screenOptions={{headerShown:false}} />;
}
//Isso é para retirar o Index que aparece no ambiente de Desenvolvedor