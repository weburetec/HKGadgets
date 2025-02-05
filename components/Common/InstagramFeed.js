import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
  loop: true,
  nav: false,
  dots: false,
  autoplayHoverPause: true,
  autoplay: true,
  navText: [
    "<i class='flaticon-left'></i>",
    "<i class='flaticon-right-arrow'></i>",
  ],
  responsive: {
    0: {
      items: 2,
    },
    576: {
      items: 3,
    },
    768: {
      items: 4,
    },
    1200: {
      items: 6,
    },
  },
};

const InstagramFeed = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setDisplay(true);
  }, []);

  useEffect(() => {
    setIsMounted(!false);
  }, []);

  return (
    <div className='instagram-area'>
      <div className='container-fluid'>
        <div className='instagram-title'>
          <a href='#' target='_blank'>
            <i className='bx bxl-instagram'></i> Follow us on @HKGadgets
          </a>
        </div>

        {display ? (
          <OwlCarousel
            className='instagram-slides owl-carousel owl-theme'
            {...options}
          >
            <div className='single-instagram-post'>
              <img src='../../images/instagram/insta1.jpg' alt='image' />

              <i className='bx bxl-instagram'></i>

              <Link href='#'>
                <a target='_blank' className='link-btn'></a>
              </Link>
            </div>

            <div className='single-instagram-post'>
              <img src='../../images/instagram/insta2.jpg' alt='image' />

              <i className='bx bxl-instagram'></i>

              <Link href='#'>
                <a target='_blank' className='link-btn'></a>
              </Link>
            </div>

            <div className='single-instagram-post'>
              <img src='../../images/instagram/insta3.jpg' alt='image' />

              <i className='bx bxl-instagram'></i>

              <Link href='#'>
                <a target='_blank' className='link-btn'></a>
              </Link>
            </div>

            <div className='single-instagram-post'>
              <img src='../../images/instagram/insta4.jpg' alt='image' />

              <i className='bx bxl-instagram'></i>

              <Link href='#'>
                <a target='_blank' className='link-btn'></a>
              </Link>
            </div>

            <div className='single-instagram-post'>
              <img src='../../images/instagram/insta5.jpg' alt='image' />

              <i className='bx bxl-instagram'></i>

              <Link href='#'>
                <a target='_blank' className='link-btn'></a>
              </Link>
            </div>

            <div className='single-instagram-post'>
              <img src='../../images/instagram/insta6.jpg' alt='image' />

              <i className='bx bxl-instagram'></i>

              <Link href='#'>
                <a target='_blank' className='link-btn'></a>
              </Link>
            </div>

            <div className='single-instagram-post'>
              <img src='../../images/instagram/insta7.jpg' alt='image' />

              <i className='bx bxl-instagram'></i>

              <Link href='#'>
                <a target='_blank' className='link-btn'></a>
              </Link>
            </div>

            <div className='single-instagram-post'>
              <img src='../../images/instagram/insta8.jpg' alt='image' />

              <i className='bx bxl-instagram'></i>

              <Link href='#'>
                <a target='_blank' className='link-btn'></a>
              </Link>
            </div>

            <div className='single-instagram-post'>
              <img src='../../images/instagram/insta9.jpg' alt='image' />

              <i className='bx bxl-instagram'></i>

              <Link href='#'>
                <a target='_blank' className='link-btn'></a>
              </Link>
            </div>

            <div className='single-instagram-post'>
              <img src='../../images/instagram/insta10.jpg' alt='image' />

              <i className='bx bxl-instagram'></i>

              <Link href='#'>
                <a target='_blank' className='link-btn'></a>
              </Link>
            </div>
          </OwlCarousel>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default InstagramFeed;
