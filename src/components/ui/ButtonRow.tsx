import { ButtonProps } from "@/lib/types";
import Button from "@/components/ui/Button";

interface ButtonRowProps {
  buttons: ButtonProps[];
}

export default function ButtonRow({ buttons }: ButtonRowProps) {
  if (buttons.length === 0) {
    return null;
  }
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      {buttons.map((button, index) => (
        <Button key={index} {...button} />
      ))}
    </div>
  );
}
