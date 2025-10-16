    const activities = [
        {
            title: "Honeymoon Packages",
            img: "https://media.istockphoto.com/id/178507751/photo/young-couple-share-a-romantic-dinner-on-the-beach.jpg?s=612x612&w=0&k=20&c=O5Kzc8e2_FW64sXltECqDJi5rqc7MjjWJ_fWVTq3oUM=",
            trips: 8,
            delay: "0.3s"
        },
        {
            title: "Corporate Packages",
            img: "https://static.wixstatic.com/media/b3d183_08d7e674d1b3446b9049a25ebeea870b~mv2.jpg/v1/fill/w_640,h_800,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/b3d183_08d7e674d1b3446b9049a25ebeea870b~mv2.jpg",
            trips: 3,
            delay: "0.5s"
        },
        {
            title: "Dealers Meet",
            img: "https://techhelp.ca/wp-content/uploads/2024/11/How-to-Make-the-Most-of-Business-Networking-Events.jpg",
            trips: 2,
            delay: "0.7s"
        },
        {
            title: "MICE (Meetings, Incentives, Conferences & Events)",
            img: "https://ik.imgkit.net/3vlqs5axxjf/MC-Asia/uploadedImages/Articles/News/Event_Promotion/thailand-250610.png?tr=w-920%2Cfo-auto",
            trips: 4,
            delay: "0.3s"
        },
        {
            title: "Expo Tours",
            img: "https://upload.wikimedia.org/wikipedia/commons/a/a2/2006_TIPREX.jpg",
            trips: 6,
            delay: "0.5s"
        },
        {
            title: "Foreign Delicacies",
            img: "https://www.top25restaurants.com/media/news/central-thailand-fine-dining-fit-for-royalty-5.jpg",
            trips: 3,
            delay: "0.7s"
        }
    ];

    const container = document.getElementById('activities-container');

    activities.forEach(activity => {
        const col = document.createElement('div');
        col.className = 'col-xl-4 col-lg-6 col-md-6 wow fadeInUp';
        col.setAttribute('data-wow-delay', activity.delay);

        col.innerHTML = `
            <div class="activities-items">
                <div class="activities-image">
                    <img src="${activity.img}" alt="${activity.title}">
                    <div class="post">(${activity.trips} Trips)</div>
                </div>
                <div class="activities-content">
                    <h4><a href="activities-details.html">${activity.title}</a></h4>
                </div>
            </div>
        `;

        container.appendChild(col);
    });