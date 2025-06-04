import React from 'react'
import commonIcon from '../assets/commonIcon.png'
import news1 from '../assets/new1.png'
import news2 from '../assets/new2.png'
import news3 from '../assets/new3.png'
import newsBg from '../assets/newsBG.png'



export const LatestNews = () => {

  const newsData = [
    {
      id: 1,
      images: news1,
      text: "Powder",
      date: "March 3,2024 ",
      des: "Think Wise Think Herbal With Fresh medicine",
      link: "read More",
    },
    {
      id: 2,
      images: news2,
      text: "Solid",
      date: "March 3,2024",
      des: "Think Wise Think Herbal With Fresh medicine",
      link: "read More",
    },
    {
      id: 3,
      images: news3,
      text: "Powder",
      date: "March 3,2024 ",
      des: "Think Wise Think Herbal With Fresh medicine",
      link: "read More",
    },

  ]


  return (
    <div className="relative w-full bg-[#eeffee] py-8 mt-10">
      <img
        src={newsBg}
        alt="decor"
        className='absolute  right-10 bottom-5 w-[70px] md:w-[120px] opacity-60 pointer-events-none z-0'
      />

      <div className='flex flex-col items-center'>
        <div className="flex items-center my-5">
          <div className="custom-line" />
          <div className="h-16 w-16 flex items-center justify-center rounded-full mx-3">
            <img
              src={commonIcon}
              alt=""
            />
          </div>
          <div className="custom-line" />
        </div>

        <h2 className="allheading mb-6 ml-5">
          Insights & Articles
        </h2>

        <p className="alldes  px-4">
          Stay updated with our most recent announcements, valuable insights, and exciting developments right here. Discover what's new and how we're continuing to evolve and serve you better.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 my-10">
        {newsData.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden max-w-xs transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="overflow-hidden rounded-t-2xl">
              <img
                src={item.images}
                alt={item.text}
                className="w-full h-48 object-cover"
              />
            </div>

            <div className="p-5">
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <span className="text-green-600 font-semibold mr-2 headFont">
                  {item.text}
                </span>
                <span>•</span>
                <span className="ml-2 headFont ">{item.date}</span>
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-3 text-left headFont">
                {item.des}
              </h3>

              <a
                href="#"
                className="block text-left text-sm font-semibold text-green-700 hover:text-green-900 transition-colors duration-200 headFont"
              >
                {item.link}
              </a>
            </div>
          </div>
        ))}
      </div>


    </div>

  )
}

export default LatestNews;
