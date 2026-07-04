import { Stack } from "expo-router";
import { AuthProvider } from "../contexts/AuthContext";

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="login" options={{ title: "Sign In" }} />
        <Stack.Screen name="register" options={{ title: "Sign Up" }} />
        <Stack.Screen
          name="forgot_password"
          options={{ title: "Forgot Password" }}
        />
        <Stack.Screen name="(tabs)" />
      </Stack>
    </AuthProvider>
  );
}
