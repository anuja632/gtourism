const featuredTours = [
  {
    location: "Kerala",
    title: "Kerala Tour Packages",
    img: "https://static.wixstatic.com/media/c8e24e_4752e04fcef74d83aa3cf2ed20671995~mv2.jpg",
    price: "₹2,750",
    link: "tour.html?location=Kerala"
  },
  {
    location: "Tamil Nadu",
    title: "Tamil Nadu Tour Package",
    img: "https://traveleasystorage.s3.eu-north-1.amazonaws.com/New.webp",
    price: "₹2,950",
    link: "tour.html?location=Tamil Nadu"
  },
  {
    location: "Karnataka",
    title: "Karnataka Tour Package",
    img: "https://www.asparkholidays.com/uploads/45331_palaces-heaven-on-earth-1.jpg",
    price: "₹3,600",
    link: "tour.html?location=Karnataka"
  }
];
    const wrapper = document.getElementById("featured-tours");

    // Inject slides dynamically with WOW.js animation
    featuredTours.forEach((tour, index) => {
      wrapper.innerHTML += `
        <div class="swiper-slide wow fadeInRight" data-wow-delay="${0.2 + index*0.2}s">
          <div class="feature-tour-items">
            <div class="feature-tour-image">
   <a href="${tour.link}"> <!-- Wrap image in link -->
            <img src="${tour.img}" alt="${tour.location}">
          </a>              <ul class="location">
                <li><i class="fa-light fa-location-dot"></i>${tour.location}</li>
              </ul>
            </div>
            <div class="feature-tour-content">
              <h4><a href="${tour.link}">${tour.title}</a></h4>
              <h5>${tour.price}<span>/Starting</span></h5>
              <a href="${tour.link}" class="icon"><i class="fa-sharp fa-regular fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
      `;
    });


