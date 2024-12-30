"use client";

export default function Footer() {
  return (
    <footer className="py-8 px-4">
      <div className="max-w-4xl mx-auto text-center text-gray-400">
        <p>
          © {new Date().getFullYear()} Maski. Thanks for stopping by—remember to
          drink water, pet a dog, and code responsibly.
        </p>
      </div>
    </footer>
  );
}
