import React from 'react'

function Blog() {

    const posts = [
        {
            title: "Advancing Sustainable Agriculture in Ethiopia Through Technology",
            img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
            content: "In recent years, Ethiopia has witnessed a growing need to address the challenges faced by the agricultural sector, including climate change, limited resources, and the need for increased productivity. Adis Gibrena is at the forefront of the movement to advance sustainable agriculture in Ethiopia through the power of technology. In this blog post, we explore how Adis Gibrena's innovative solutions are revolutionizing farming practices, empowering farmers with real-time data, precision farming techniques, and smart irrigation systems. Discover how our technology-driven approach is paving the way for a more sustainable and prosperous agricultural future in Ethiopia."
        },
        {
            title: "Unlocking the Potential of Smallholder Farmers with Digital Farm Management",
            img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
            content: "Smallholder farmers form the backbone of Ethiopia's agricultural landscape, but they often face numerous challenges in managing their farms efficiently and optimizing productivity. Adis Gibrena is committed to empowering these farmers through digital farm management solutions. In this blog post, we delve into how our user-friendly farm management software helps smallholder farmers streamline operations, track inventory, manage finances, and access valuable market insights. By embracing digital tools and providing training and support, Adis Gibrena is enabling smallholder farmers to make data-driven decisions, improve yields, and achieve sustainable growth."
        },
        {
            title: "Driving Economic Growth and Food Security in Ethiopia with Agri-Tech",
            img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
            content: "Agri-tech is transforming the agricultural landscape in Ethiopia, creating new opportunities for economic growth and ensuring food security for the nation. Adis Gibrena is proud to be at the forefront of this revolution, harnessing the power of technology to drive positive change. In this blog post, we explore the impact of agri-tech on Ethiopia's agricultural sector, from precision farming and smart irrigation to advanced machinery and data analytics. Discover how Adis Gibrena is collaborating with farmers, industry stakeholders, and local communities to build a sustainable agri-ecosystem that supports inclusive growth, addresses food security challenges, and drives the overall development of Ethiopia."
        },
      
    ];

  return (
    <div className='w-screen h-auto bg-gray-200 mt-[99px]'>
        <div className="mt-10 mx-[80px] pb-[10px] ">
            <div className="flex justify-center pt-10">
                <div className="text-[50px] font-bold ">
                    Blog
                </div>
            </div>
       
          <div className="grid gap-2 lg:grid-cols-3 mt-[10px] pt-10">
                {posts &&  posts.map((items, key) => (
                    <div className="w-full rounded-lg shadow-md lg:max-w-sm" key={key}>
                        <img
                            className="object-cover w-full h-48"
                            src={items.img}
                            alt={key}
                        />
                        <div className="p-4">
                            <h4 className="text-xl font-semibold text-blue-600">

                                {items.title}
                            </h4>
                            <p className="mb-2 leading-normal">
                            {items.content}
                            </p>
                            <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                                Read more
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            </div>
    </div>
  )
}

export default Blog