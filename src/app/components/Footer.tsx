export function Footer() {
  return (
    <footer className="py-8 px-4 bg-gray-900 text-gray-400 text-center">
      <p className="text-sm">
        © {new Date().getFullYear()} Sanjuksha Nirgude. All rights reserved.
      </p>
      <p className="text-xs mt-2">
        Robotics Engineer · Simulation Developer · Women in Robotics Co-organizer
      </p>
    </footer>
  );
}
