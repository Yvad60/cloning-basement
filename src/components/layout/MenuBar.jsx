import CenterContent from "./CenterContent";

export default function MenuBar() {
  const navLinks = [
    "Our Work",
    "Support Wikipedia",
    "Research",
    "Advocacy",
    "Technology",
    "News",
    "Participate",
    "About",
  ];
  return (
    <div>
      <CenterContent>
        <div className="flex justify-between py-3 text-sm font-medium">
          {navLinks.map((link, index) => (
            <nav key={index} className="py-2">
              {link}
            </nav>
          ))}
        </div>
      </CenterContent>
    </div>
  );
}
