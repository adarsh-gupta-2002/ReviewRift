import { orbitron } from "@/app/fonts";

export default function Heading({ children }) {
  return (
    <h2 className={` font-bold pb-3 text-2xl ${orbitron.className} `}>
      {children}
    </h2>
  );
}
