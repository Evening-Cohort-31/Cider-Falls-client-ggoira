# 🏞️ Cider Falls - Project Algorithm

## Overview
A web application for managing resort destinations, services, and guest assignments with interactive features and dynamic content rendering.

---

## 📊 Phase 1: Database Setup & Data Layer

### Database Structure
```javascript
const database = {
  destinations: [{},{},{}],
  services: [{},{},{}], 
  guests: [{},{},{}]
}
```

### 🏨 Destinations
**Structure:** `{id: integer, name: varchar, location: varchar, services: array of services.id}`
- **Function:** `getDestinations()` → returns `database.destinations`
- **Purpose:** Store resort location data with associated service offerings

### 🛎️ Services  
**Structure:** `{id: integer, name: varchar}`
- **Function:** `getServices()` → returns `database.services`
- **Purpose:** Catalog of available resort amenities and activities

### 👥 Guests
**Structure:** `{id: integer, first_name: varchar, last_name: varchar, location: integer}`
- **Function:** `getGuests()` → returns `database.guests` 
- **Purpose:** Guest registry with destination assignments
- **Note:** `location` field references `destination.id` as foreign key

---

## 🎨 Phase 2: Page Layout & Structure

### File Structure
- `index.html` - Main HTML structure
- `layout.css` - Basic layout styling
- `main.js` - Application entry point

### Layout Components

#### 📋 Header
- Resort logo
- Application title

#### 🏗️ Main Content (Two-Column Layout)
**Column 1:**
- Services container: `class="services_container"`
- Destinations container: `class="destinations_container"`

**Column 2:**
- Guest information: `class="guests_container"`

#### 📞 Footer
- Contact information and resort details

---

## ⚙️ Phase 3: Component Development

### 🏠 `guests.js` - Guest Management Component
**Responsibilities:** Render guest list and handle random destination assignments

**Logic Flow:**
1. **Import Dependencies**
   - `getGuests()` → retrieves guest array
   - `getDestinations()` → retrieves destination array

2. **Export Functions**
   - `generateGuestsHtml(guests)` → returns formatted HTML string
   - `assignRandomDestination(guests, destinations)` → randomly assigns destinations to guests

### 🎯 `services.js` - Services Management Component  
**Responsibilities:** Display services and show destinations offering selected services

**Logic Flow:**
1. **Import Dependencies**
   - `getServices()` → retrieves services array
   - `getDestinations()` → retrieves destinations array

2. **Export Functions**
   - `generateServicesHtml(services)` → returns formatted HTML string
   - `handleServiceClick(event)` → displays alert with destinations offering clicked service

### 🗺️ `destinations.js` - Destinations Management Component
**Responsibilities:** Display destinations in geographic grid and show guest counts

**Features:**
- 2×3 grid layout organized by location (Northwest, North, Southeast, etc.)
- Interactive destination selection

**Logic Flow:**
1. **Import Dependencies**
   - `getDestinations()` → retrieves destinations array  
   - `getGuests()` → retrieves guests array

2. **Export Functions**
   - `generateDestinationHtml(destinations)` → returns formatted HTML string
   - `handleDestinationClick(event)` → displays alert with guest count for selected destination

### 🚀 `main.js` - Application Controller
**Responsibilities:** Orchestrate component rendering and event handling

**Logic Flow:**
1. **Import Components**
   - HTML generators: `generateGuestsHtml`, `generateServicesHtml`, `generateDestinationHtml`
   - Event handlers: `handleServiceClick`, `handleDestinationClick`

2. **DOM Manipulation**
   - Retrieve container elements with `document.querySelector()`
   - Insert generated HTML: `container.innerHTML = generatedHtml`

3. **Event Management**
   - Attach click listeners: `document.addEventListener("click", handlerFunction)`
   - Route events to appropriate handlers

---

## 💅 Phase 4: Styling & Polish

### `styles.css`
- Implement responsive design
- Style component layouts
- Add visual hierarchy and branding
- Ensure accessibility and usability

---

## 🎯 Key Features Summary

- **Dynamic Content:** All content rendered from JavaScript data structures
- **Interactive Elements:** Clickable services and destinations with informational alerts  
- **Random Assignment:** Guests automatically assigned to random destinations
- **Geographic Organization:** Destinations displayed in logical geographic grid
- **Modular Architecture:** Separation of concerns across multiple component files