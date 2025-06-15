# Currency Converter

A simple React application to convert between major world currencies using real-time exchange rates from [FreeCurrencyAPI](https://freecurrencyapi.com/).

## Features

- Convert between 20+ popular currencies
- Real-time exchange rates via FreeCurrencyAPI
- Responsive and clean UI with Tailwind CSS

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or above recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/currency-convertor.git
    cd currency-convertor
    ```

2. **Install dependencies:**
    ```sh
    npm install
    # or
    yarn install
    ```

3. **Set up your API key:**

    - Register at [FreeCurrencyAPI](https://freecurrencyapi.com/) to get a free API key.
    - Create a `.env` file in the root directory and add:
      ```
      VITE_API_KEY=your_api_key_here
      ```

4. **Start the development server:**
    ```sh
    npm run dev
    # or
    yarn dev
    ```

5. **Open in your browser:**
    ```
    http://localhost:5173
    ```

## Project Structure

```
src/
  components/
    Convertor.jsx
    Header.jsx
    InputCurrency.jsx
  App.jsx
  main.jsx
  App.css
```

## Usage

1. Select the currency you want to convert **from**.
2. Enter the amount.
3. Select the currency you want to convert **to**.
4. Click **CONVERT** to see the result.

## Technologies Used

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)
- [FreeCurrencyAPI](https://freecurrencyapi.com/)

## License

This project is licensed under the