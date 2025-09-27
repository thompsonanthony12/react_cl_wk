import React from "react";

const Testimonial = () => {
  const testimonialData = [
    {
      id: 1,
      userImg: "/user_t.svg",
      quote:
        "You made it so simple. My new site is so much faster and easier to work with than my old site.",
      userName: "Isabella Chavez",
      userJD: "Graphic Designer",
    },
    {
      id: 2,
      userImg: "/user_t.svg",
      quote:
        "Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.",
      userName: "Curtis Rhodes",
      userJD: "Digital Marketer",
    },
    {
      id: 3,
      userImg: "/user_t.svg",
      quote:
        "You made it so simple. My new site is so much faster and easier to work with than my old site.",
      userName: "Isabella Chavez",
      userJD: "Graphic Designer",
    },
  ];
  return (
    <section className="font-mont p-28 mb-24 bg-white">
      <div className="flex flex-col items-center justify-center mb-28 g-10">
        <h4 className="font-extrabold text-[300] text-[#161c2d] mb-8">
          What people say about us
        </h4>
        <p className="text-[#161c2d] w-[390px]">
          With lots of unique blocks, you can easily build a page without
          coding. Build your next landing page.
        </p>
      </div>
      <div className="flex items-center justify-center gap-6 ">
        {testimonialData.map((item) => (
          <div key={item.id} className="border-rounded-xl shadow  gap-28">
            <img src="Ovalee.svg" alt="byway image" />
            <p className="text-[#161c2d] w-[250px]">{item.quote}</p>
            <h5 className="font-semibold text-[#161c2d]">{item.userName}</h5>
            <p className="font-light text-blue-400">{item.userJD}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
