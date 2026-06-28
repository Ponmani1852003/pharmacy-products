import RatingCard from "./RatingCard";
import ReviewItem from "./ReviewItem";

function Reviews() {
  const reviews = [
    {
      name: "Liana, Moscow",
      date: "25 July",
      review:
        "Thank you very much for your attention and service. I found exactly what I needed and will definitely order again.",
    },
    {
      name: "Liana, Moscow",
      date: "25 July",
      review:
        "Excellent service and high-quality products. The ordering process was very easy and delivery was fast.",
    },
    {
      name: "Liana, Moscow",
      date: "25 July",
      review:
        "Very satisfied with the purchase. The staff was helpful and answered all my questions politely.",
    },
  ];

  return (
    <section className="bg-[#f7fbfb] py-16 px-4">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Left Rating Card */}
          <div className="flex justify-center lg:justify-start">
            <RatingCard />
          </div>

          {/* Right Reviews */}
          <div className="lg:col-span-2 space-y-8">
            {reviews.map((item, index) => (
              <ReviewItem
                key={index}
                name={item.name}
                date={item.date}
                review={item.review}
              />
            ))}

            <button className="text-[#34d1bf] font-medium hover:underline">
              View All 4349 Reviews 
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Reviews;