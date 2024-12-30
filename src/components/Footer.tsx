"use client";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 text-center text-gray-400">
        <p>
          © {new Date().getFullYear()} Maski. Thanks for stopping by—remember to
          drink water, pet a dog, and code responsibly.
        </p>
      </div>
    </footer>
  );
}
