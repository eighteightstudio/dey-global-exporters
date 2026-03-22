"use client"

export function WhatsAppButton() {
  const waUrl = 'https://wa.me/917003455085'

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with DEY GLOBAL EXPORTERS on WhatsApp"
        className="flex items-center gap-3 bg-white text-[#25D366] font-semibold text-base rounded-full shadow-lg px-5 py-4 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-6 h-6 flex-shrink-0"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12C2 13.82 2.49 15.53 3.35 17L2 22L7.17 20.68C8.59 21.51 10.24 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"
            fill="#25D366"
          />
          <path
            d="M17.47 14.83C17.21 15.73 15.95 16.47 15.19 16.6C14.52 16.71 13.67 16.76 12.74 16.45C12.18 16.27 11.46 16.03 10.54 15.64C7.85 14.48 6.08 11.77 5.94 11.58C5.81 11.39 4.85 10.09 4.85 8.74C4.85 7.39 5.55 6.73 5.82 6.44C6.09 6.15 6.41 6.08 6.61 6.08C6.81 6.08 7.01 6.08 7.18 6.09C7.37 6.1 7.62 6.02 7.87 6.61C8.12 7.21 8.71 8.56 8.78 8.7C8.85 8.84 8.9 9.01 8.8 9.2C8.7 9.39 8.65 9.51 8.51 9.67C8.37 9.83 8.22 10.03 8.1 10.15C7.96 10.29 7.82 10.44 7.98 10.72C8.14 11 8.7 11.93 9.54 12.68C10.62 13.64 11.52 13.94 11.8 14.08C12.08 14.22 12.24 14.2 12.4 14.02C12.56 13.84 13.1 13.21 13.28 12.93C13.46 12.65 13.64 12.7 13.89 12.79C14.14 12.88 15.49 13.55 15.77 13.69C16.05 13.83 16.23 13.9 16.3 14.01C16.37 14.12 16.37 14.65 16.11 15.55L17.47 14.83Z"
            fill="white"
            fillRule="evenodd"
          />
        </svg>
        <span className="hidden sm:inline">WhatsApp Us</span>
      </a>
    </div>
  )
}
