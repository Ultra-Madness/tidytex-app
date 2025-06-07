# TidyTex Home & Office Services App
**Project Master Requirements Document**

## 1. Project Overview
- **App Name:** TidyTex Home & Office Services
- **Business Model:** Uber-like model for home and office services (cleaning and more).
- **Platforms:** iOS, Android (mobile-first), with plans for a desktop/web admin dashboard.

## 2. User Roles
- **Customer:** Posts jobs, receives provider offers, manages bookings.
- **Service Provider:** Receives job alerts, accepts jobs, manages schedule.
- **Admin:** (Future web dashboard) Manages users, services, regions, and analytics.

## 3. Core Features (MVP)
- **Authentication:**  
  - Email, phone, Google, Apple sign-in  
  - Biometric login (FaceID, TouchID)
- **Job Posting:**  
  - Customers post jobs with requirements, parameters, and guided pricing.
- **Provider Matching:**  
  - Providers are alerted to jobs they qualify for.
- **Job Acceptance:**  
  - Providers accept jobs; customers are notified and see ETA.
- **Push Notifications:**  
  - For job alerts, confirmations, reminders.
- **Region Control:**  
  - Admin can enable/disable service regions.
- **Modern UI:**  
  - Clean, comfortable color scheme (soft blue/green), logo placeholder, splash screen.
- **Navigation:**  
  - Home, Sign Up, Log In, Profile, Booking, Map, etc.

## 4. Design Preferences
- **Color Scheme:** Modern, comfortable (soft blue/green palette)
- **Logo:** Placeholder now, real logo to be added later
- **Splash Screen:** Yes, with logo

## 5. Future Features
- **In-app Payments:** Credit card, Apple Pay, Google Pay
- **Ratings/Reviews:** For providers and customers
- **Messaging:** In-app chat between customer and provider
- **Desktop/Web Admin Dashboard:** For management and analytics

## 6. Technical Stack
- **Mobile:** React Native with Expo
- **Navigation:** React Navigation
- **State Management:** To be determined (Context API, Redux, etc.)
- **Backend:** To be determined (Firebase, Supabase, custom API, etc.)
- **Notifications:** Expo Notifications or Firebase Cloud Messaging

## 7. Project Structure (Suggested)
```
src/
  components/
  screens/
  navigation/
  services/
  assets/
  App.tsx
```

## 8. Outstanding Questions
- What services (besides cleaning) will be offered at launch?
- Should providers be approved before joining?
- What info is required for job posting (address, date/time, description, photos)?
- Preferred payment providers?
- Any specific design inspirations?

**End of Master Requirements Document**
