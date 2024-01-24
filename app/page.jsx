import Heading from "@/components/Heading";
import Link from "next/link";
import { orbitron } from "./fonts";
import { getFeaturedReview } from "@/lib/reviews";

export default async function HomePage() {
  const review = await getFeaturedReview();

  return (
    <>
      <Heading>Indie Gamer</Heading>
      <p className="pb-3">Only the best indie games, reviewed for you.</p>
      <div className="bg-white w-80 sm:w-full border rounded shadow hover:shadow-xl ">
        <Link
          href={`/reviews/${review.slug}`}
          className="flex flex-col sm:flex-row"
        >
          <img
            src={review.image}
            alt="image"
            width="320"
            height="180"
            className="rounded-t sm:rounded-l sm:rounded-r-none"
          />
          <h2
            className={`py-1 text-center font-semibold ${orbitron.className} sm:px-2`}
          >
            {review.title}
          </h2>
        </Link>
      </div>
    </>
  );
}
