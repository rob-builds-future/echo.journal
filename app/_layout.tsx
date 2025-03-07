import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="auto" />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f5f5f5",
          },
          headerTintColor: "#333",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen 
          name="index" 
          options={{ 
            title: "Startseite",
            headerShown: false,
          }} 
        />
        <Stack.Screen 
          name="details" 
          options={{ 
            title: "Details",
            presentation: "card",
          }} 
        />
      </Stack>
    </>
  );
}
