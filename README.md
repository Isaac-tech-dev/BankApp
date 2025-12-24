# BankApp – Mobile Banking Case Study

A mobile banking application built with **React Native (Expo – Classic)** as part of a Mobile Frontend Engineer case study. The app demonstrates clean architecture, state management, animations, API integration, and cross-platform support.

---

## 📱 Features

- User login with mocked backend
- Returning user greeting (stored via Redux)
- Swipeable bank accounts dashboard
- Animated menu drawer
- REST API integration (MockAPI)
- TailwindCSS (NativeWind) styling
- Smooth animations using Reanimated
- Android & iOS support
- (Optional) Biometric authentication support

---

## 🧰 Tech Stack

- **React Native (Expo – Managed Workflow)**
- **TypeScript**
- **Redux Toolkit** (Global state management)
- **React Navigation** (Stack navigation)
- **NativeWind (TailwindCSS)** (Styling)
- **React Native Reanimated & Gesture Handler** (Animations)
- **MockAPI** (Mocked REST backend)
- **Expo Local Authentication** (Biometrics)

---

## 📁 Project Structure

```txt
src/
 ├── api/                # API clients and network calls
 │    └── client.ts
 ├── components/         # Reusable UI components
 │    ├── AccountCard.tsx
 │    └── Drawer.tsx
 ├── navigation/         # Navigation configuration
 │    └── AppNavigator.tsx
 ├── redux/              # Redux Toolkit store & slices
 │    ├── store.ts
 │    └── userSlice.ts
 ├── screens/            # App screens
 │    ├── LoginScreen.tsx
 │    └── DashboardScreen.tsx
 ├── types/              # Shared TypeScript types
 │    └── index.ts
 └── utils/              # Utility functions
      └── biometrics.ts
App.tsx                  # App entry point
