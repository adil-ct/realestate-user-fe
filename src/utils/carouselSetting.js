const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1036, // tablet breakpoint
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 480, // mobile breakpoint
            settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
}

export default settings
