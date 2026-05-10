# ⛽ Fuel Comparison (Ethanol vs Gasoline)

A practical calculator built with **React** and **TypeScript** to help drivers decide which fuel is more cost-effective based on the 70% efficiency rule.

## 📋 About the Project
In many regions, Ethanol is only worth it if its price is less than or equal to 70% of the Gasoline price. This app automates that calculation, providing a clean interface for quick decision-making at the gas station.

## 🛠️ Tech Stack
*   **React 19** (`useState`)
*   **TypeScript** (Interface modeling and `SyntheticEvent` handling)
*   **CSS Modules** (Modern UI styling)
*   **Vite** (Fast build tool)

## ⚙️ Key Features
- [x] **Smart Calculation**: Implements the `(Ethanol / Gasoline) <= 0.7` logic.
- [x] **Custom Price Formatter**: A custom algorithm (`covertPrice`) that ensures prices are always displayed with two decimal places, handling both commas and dots.
- [x] **Input Validation**: Prevents empty or zero-value submissions using native HTML5 attributes and JavaScript checks.
- [x] **Responsive Results**: Displays a summary section only after the first successful calculation.

## 🚀 Getting Started

1. **Clone the repo:**
   ```bash
   git clone [https://github.com/your-username/fuel-comparison.git](https://github.com/your-username/fuel-comparison.git)