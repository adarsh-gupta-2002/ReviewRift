import Link from "next/link";
import Heading from "@/components/Heading";
import { orbitron } from "../fonts";
import { getReviews } from "@/lib/reviews";

// meta data represents meta tag and other tags that are going in head tag.
export const metadata = {
  title: "Reviews",
};

export default async function ReviewsPage() {
  const reviews = await getReviews();
  return (
    <>
      <Heading>Reviews</Heading>
      <ul className="flex flex-row flex-wrap gap-3">
        {reviews.map((review) => (
          <li
            key={review.slug}
            className="bg-white border rounded shadow w-80 hover:shadow-xl"
          >
            <Link href={`/reviews/${review.slug}`}>
              <img
                src={review.image}
                alt="image"
                width="320"
                height="180"
                className="rounded-t"
              />
              <h2
                className={`py-1 text-center font-semibold ${orbitron.className}`}
              >
                {review.title}
              </h2>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
