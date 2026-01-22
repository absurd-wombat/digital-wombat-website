import { colors } from '@/lib/colors';

export default function Footer() {
  return (
    <footer className={`${colors.background.section.dark} ${colors.text.white} text-center p-4 mt-auto`}>
      <p>&copy; {new Date().getFullYear()} Digital Wombat. All rights reserved.</p>
    </footer>
  );
}
