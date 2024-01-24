import Heading from "@/components/Heading";

// meta data represents meta tag and other tags that are going in head tag.
export const metadata = {
  title: "About",
};

export default function StardewVallyPage() {
  return (
    <>
      <Heading>About Page</Heading>
      <p>This is a about page.</p>
    </>
  );
}
