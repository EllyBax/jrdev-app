/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
    extend: {
        colors: {
            'primary-bg': '#111113',
            'secondary-bg': '#191b1c',
            'border-color': '#363a3f',
            'primary-text': '#edeef0',
            'secondary-text': '#b0b4ba',
        }
    }
}
}