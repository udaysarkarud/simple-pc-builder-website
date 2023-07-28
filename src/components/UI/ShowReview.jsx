import React from "react";

const ShowReview = ({ review }) => {
  const { customer_name, comment_date, comment } = review;
  return (
    <article aria-labelledby="episode-5-title" class="py-5 sm:py-6">
      <div class="lg:px-8">
        <div class="lg:max-w-4xl">
          <div class="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
            <div class="flex flex-col items-start">
              <h2
                id="episode-5-title"
                class="mt-2 text-lg font-bold text-slate-900"
              >
                {customer_name}
              </h2>
              <time
                dateTime="2022-02-24T00:00:00.000Z"
                class="order-first font-mono text-sm leading-7 text-slate-500"
              >
                {comment_date}
              </time>
              <p class="mt-1 text-base leading-7 text-slate-700 pb-5 border-b-2 border-gray-200 mb-5">
                {comment}
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ShowReview;
