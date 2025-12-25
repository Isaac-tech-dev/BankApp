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

## 🚀 Getting Started (Development Setup)

Follow the steps below to run the project locally.

---

### 📋 Prerequisites

Make sure you have the following installed:

- **Node.js** (v18+ or v20 recommended)
- **Yarn** (v1.22.x)
- **Expo CLI**

  ```bash
  npm install -g expo-cli

  git clone https://github.com/Isaac-tech-dev/BankApp.git
  cd BankApp
  ```

yarn install

yarn start

## 📁 Project Structure

```txt
src/
 ├── api/                       # API clients and network calls
 │    └── client.ts
 │
 ├── components/                # Reusable UI components
 │    ├── home/                 # Home-specific components
 │    ├── Button.tsx
 │    ├── Drawer.tsx
 │    └── Input.tsx
 │
 ├── constants/                 # App-wide constants
 │    └── themes/
 │         └── index.tsx
 │
 ├── navigation/                # Navigation configuration
 │    ├── AppDrawer.tsx
 │    ├── AuthStackNavigation.tsx
 │    ├── RootStackNavigation.tsx
 │    └── index.tsx
 │
 ├── redux/                     # Redux Toolkit store & slices
 │    ├── hooks/                # Typed Redux hooks
 │    ├── slice/                # Feature slices (auth, user, accounts)
 │    └── store.ts
 │
 ├── screens/                   # App screens
 │    ├── auth/                 # Authentication screens
 │    └── main/                 # Main app screens (Dashboard, Accounts)
 │
 ├── svg/                       # SVG icons and assets
 │    └── index.tsx
 │
 ├── types/                     # Shared TypeScript types
 │
 ├── utils/                     # Utility helpers
 │    ├── biometricPrefs.ts
 │    ├── biometrics.ts
 │    ├── secureStore.ts
 │    └── index.tsx
 │
 └── app.d.ts                   # Global TypeScript declarations
App.tsx                  # App entry point
```
