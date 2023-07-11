import 'session.mock';

import 'match-media-mock';
import { screen, render } from 'utils/test-utils';
import { GameCardSlider } from '.';

const items = [
  {
    id: '1',
    slug: 'population-zero',
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 235,
    promotionalPrice: 215,
  },
  {
    id: '2',
    slug: 'population-zero',
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x141',
    price: 235,
    promotionalPrice: 215,
  },
  {
    id: '3',
    slug: 'population-zero',
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x142',
    price: 235,
    promotionalPrice: 215,
  },
  {
    id: '4',
    slug: 'population-zero',
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x143',
    price: 235,
    promotionalPrice: 215,
  },
  {
    id: '5',
    slug: 'population-zero',
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x144',
    price: 235,
    promotionalPrice: 215,
  },
];

describe('<GameCardSlider />', () => {
  it('should render with 4 active items', () => {
    const { container } = render(<GameCardSlider items={items} />);
    expect(container.querySelectorAll('.slick-active')).toHaveLength(4);
  });

  it('should render white arrows if color passed', async () => {
    const { container } = render(
      <GameCardSlider items={items} color="white" />,
    );

    // debug();
    // expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
    //   color: '#FAFAFA',
    // });
    expect(screen.getByLabelText(/next games/i)).toHaveStyle({
      color: '#FAFAFA',
    });

    expect(container).toMatchInlineSnapshot(`
      .c2 {
        display: inline-block;
        vertical-align: middle;
        overflow: hidden;
      }

      .c10 {
        display: -webkit-inline-box;
        display: -webkit-inline-flex;
        display: -ms-inline-flexbox;
        display: inline-flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        background: linear-gradient(180deg,#ff5f5f 0%,#f062c0 50%);
        color: #FAFAFA;
        border: 0;
        cursor: pointer;
        border-radius: 0.4rem;
        padding: 0.8rem;
        -webkit-text-decoration: none;
        text-decoration: none;
        height: 3rem;
        font-size: 1.2rem;
        background: none;
        color: #F231A5;
      }

      .c10:focus {
        outline: 1px dashed;
      }

      .c10:hover {
        background: linear-gradient(180deg,#e35565 0%,#d958a6 50%);
      }

      .c10 svg {
        width: 1.5rem;
      }

      .c10 svg + span {
        margin-left: 0.8rem;
      }

      .c10:hover {
        color: #e20e8d;
        background: none;
      }

      .c14 {
        display: -webkit-inline-box;
        display: -webkit-inline-flex;
        display: -ms-inline-flexbox;
        display: inline-flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        background: linear-gradient(180deg,#ff5f5f 0%,#f062c0 50%);
        color: #FAFAFA;
        border: 0;
        cursor: pointer;
        border-radius: 0.4rem;
        padding: 0.8rem;
        -webkit-text-decoration: none;
        text-decoration: none;
        height: 3rem;
        font-size: 1.2rem;
      }

      .c14:focus {
        outline: 1px dashed;
      }

      .c14:hover {
        background: linear-gradient(180deg,#e35565 0%,#d958a6 50%);
      }

      .c14 svg {
        width: 1.5rem;
      }

      .c14 svg + span {
        margin-left: 0.8rem;
      }

      .c3 {
        position: relative;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        width: 100%;
        height: 100%;
        background-color: #FAFAFA;
      }

      .c4 {
        -webkit-text-decoration: none;
        text-decoration: none;
        height: 14rem;
        width: 100%;
        background: #f6f7f8;
        background-image: linear-gradient( to right,#f6f7f8 0%,#edeef1 20%,#f6f7f8 40%,#f6f7f8 100% );
        background-size: 80rem 14rem;
        -webkit-animation: placeholderShimmer 1s linear infinite forwards;
        animation: placeholderShimmer 1s linear infinite forwards;
      }

      .c4 img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .c5 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        position: relative;
        height: 100%;
        margin: 1.6rem;
      }

      .c6 {
        max-width: calc(100% - 2.5rem);
        -webkit-text-decoration: none;
        text-decoration: none;
      }

      .c7 {
        font-size: 1.6rem;
        line-height: 1.6rem;
        font-weight: 600;
        color: #030517;
      }

      .c8 {
        font-size: 1.4rem;
        font-weight: 600;
        color: #8F8F8F;
      }

      .c9 {
        color: #F231A5;
        position: absolute;
        right: -1rem;
        top: -0.5rem;
        cursor: pointer;
      }

      .c9 svg {
        width: 2.5rem;
      }

      .c11 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: end;
        -webkit-justify-content: flex-end;
        -ms-flex-pack: end;
        justify-content: flex-end;
        margin-top: 0.8rem;
      }

      .c12 {
        display: -webkit-inline-box;
        display: -webkit-inline-flex;
        display: -ms-inline-flexbox;
        display: inline-flex;
        font-weight: 600;
        height: 3rem;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        color: #8F8F8F;
        -webkit-text-decoration: line-through;
        text-decoration: line-through;
        margin-right: 1.6rem;
      }

      .c13 {
        display: -webkit-inline-box;
        display: -webkit-inline-flex;
        display: -ms-inline-flexbox;
        display: inline-flex;
        font-weight: 600;
        height: 3rem;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        color: #FAFAFA;
        padding: 0 0.8rem;
        background-color: #3CD3C1;
        border-radius: 0.4rem;
        margin-right: calc(0.8rem / 2);
        -webkit-text-decoration: none;
        text-decoration: none;
      }

      .c1 .slick-slider {
        position: relative;
        display: block;
        box-sizing: border-box;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-touch-callout: none;
        -khtml-user-select: none;
        -ms-touch-action: pan-y;
        touch-action: pan-y;
        -webkit-tap-highlight-color: transparent;
      }

      .c1 .slick-list {
        position: relative;
        display: block;
        overflow: hidden;
        margin: 0;
        padding: 0;
      }

      .c1 .slick-list:focus {
        outline: none;
      }

      .c1 .slick-list.dragging {
        cursor: pointer;
        cursor: hand;
      }

      .c1 .slick-slider .slick-track,
      .c1 .slick-slider .slick-list {
        -webkit-transform: translate3d(0,0,0);
        -moz-transform: translate3d(0,0,0);
        -ms-transform: translate3d(0,0,0);
        -o-transform: translate3d(0,0,0);
        -webkit-transform: translate3d(0,0,0);
        -ms-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0);
      }

      .c1 .slick-track {
        position: relative;
        top: 0;
        left: 0;
        display: block;
      }

      .c1 .slick-track:before,
      .c1 .slick-track:after {
        display: table;
        content: '';
      }

      .c1 .slick-track:after {
        clear: both;
      }

      .c1 .slick-loading .slick-track {
        visibility: hidden;
      }

      .c1 .slick-slide {
        display: none;
        float: left;
        height: 100%;
        min-height: 1px;
      }

      .c1 [dir='rtl'] .slick-slide {
        float: right;
      }

      .c1 .slick-slide img {
        display: block;
      }

      .c1 .slick-slide.slick-loading img {
        display: none;
      }

      .c1 .slick-slide.dragging img {
        pointer-events: none;
      }

      .c1 .slick-initialized .slick-slide {
        display: block;
      }

      .c1 .slick-loading .slick-slide {
        visibility: hidden;
      }

      .c1 .slick-vertical .slick-slide {
        display: block;
        height: auto;
        border: 1px solid transparent;
      }

      .c1 .slick-arrow.slick-hidden {
        display: none;
      }

      .c0 .slick-track,
      .c0 .slick-list {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
      }

      .c0 .slick-slide > div {
        margin: 0 0.8rem;
        -webkit-flex: 1 0 auto;
        -ms-flex: 1 0 auto;
        flex: 1 0 auto;
        height: 100%;
      }

      .c0 .slick-list {
        margin: 0 -0.8rem;
      }

      .c0 .slick-prev,
      .c0 .slick-next {
        display: block;
        color: #FAFAFA;
        cursor: pointer;
        position: absolute;
        top: 50%;
        width: 2.5rem;
        height: 2.5rem;
        padding: 0;
        -webkit-transform: translate(0,-50%);
        -ms-transform: translate(0,-50%);
        transform: translate(0,-50%);
      }

      .c0 .slick-prev {
        left: -5.6rem;
        color: #FAFAFA;
      }

      .c0 .slick-next {
        right: -5.6rem;
        color: #FAFAFA;
      }

      .c0 .slick-prev.slick-disabled,
      .c0 .slick-next.slick-disabled {
        visibility: hidden;
      }

      @media (max-width:1440px) {
        .c0 {
          overflow-x: hidden;
        }
      }

      @media (min-width:1170px) {
        .c0 .slick-slide > div {
          margin: 0 1.6rem;
        }

        .c0 .slick-list {
          margin: 0 -1.6rem;
        }
      }

      <div>
        <section
          class="c0"
          color="white"
        >
          <section
            class="c1"
          >
            <div
              class="slick-slider slick-initialized"
              dir="ltr"
            >
              <svg
                aria-hidden="true"
                aria-label="previous games"
                class="c2 slick-arrow slick-prev slick-disabled"
                currentSlide="0"
                data-role="none"
                fill="currentColor"
                focusable="false"
                slideCount="5"
                style="display: block;"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.51 3.87 15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z"
                />
              </svg>
              <div
                class="slick-list"
              >
                <div
                  class="slick-track"
                  style="opacity: 1; transform: translate3d(0px, 0px, 0px);"
                >
                  <div
                    aria-hidden="false"
                    class="slick-slide slick-active slick-current"
                    data-index="0"
                    style="outline: none; width: 0px;"
                    tabindex="-1"
                  >
                    <div>
                      <article
                        class="c3"
                      >
                        <a
                          class="c4"
                          href="/game/population-zero"
                        >
                          <img
                            alt="Population Zero"
                            src="https://source.unsplash.com/user/willianjusten/300x140"
                          />
                        </a>
                        <div
                          class="c5"
                        >
                          <a
                            class="c6"
                            href="/game/population-zero"
                          >
                            <h3
                              class="c7"
                            >
                              Population Zero
                            </h3>
                            <h4
                              class="c8"
                            >
                              Rockstar Games
                            </h4>
                          </a>
                          <div
                            class="c9"
                          >
                            <button
                              class="c10"
                            >
                              <svg
                                aria-hidden="true"
                                aria-label="Add to Wishlist"
                                class="c2"
                                fill="currentColor"
                                focusable="false"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"
                                />
                              </svg>
                            </button>
                          </div>
                          <div
                            class="c11"
                          >
                            <div
                              class="c12"
                            >
                              $235.00
                            </div>
                            <div
                              class="c13"
                            >
                              $215.00
                            </div>
                            <button
                              class="c14"
                            >
                              <svg
                                aria-hidden="true"
                                aria-label="Add to cart"
                                class="c2"
                                fill="currentColor"
                                focusable="false"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-8.9-5h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4l-3.87 7H8.53L4.27 2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2z"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                  <div
                    aria-hidden="false"
                    class="slick-slide slick-active"
                    data-index="1"
                    style="outline: none; width: 0px;"
                    tabindex="-1"
                  >
                    <div>
                      <article
                        class="c3"
                      >
                        <a
                          class="c4"
                          href="/game/population-zero"
                        >
                          <img
                            alt="Population Zero"
                            src="https://source.unsplash.com/user/willianjusten/300x141"
                          />
                        </a>
                        <div
                          class="c5"
                        >
                          <a
                            class="c6"
                            href="/game/population-zero"
                          >
                            <h3
                              class="c7"
                            >
                              Population Zero
                            </h3>
                            <h4
                              class="c8"
                            >
                              Rockstar Games
                            </h4>
                          </a>
                          <div
                            class="c9"
                          >
                            <button
                              class="c10"
                            >
                              <svg
                                aria-hidden="true"
                                aria-label="Add to Wishlist"
                                class="c2"
                                fill="currentColor"
                                focusable="false"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"
                                />
                              </svg>
                            </button>
                          </div>
                          <div
                            class="c11"
                          >
                            <div
                              class="c12"
                            >
                              $235.00
                            </div>
                            <div
                              class="c13"
                            >
                              $215.00
                            </div>
                            <button
                              class="c14"
                            >
                              <svg
                                aria-hidden="true"
                                aria-label="Add to cart"
                                class="c2"
                                fill="currentColor"
                                focusable="false"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-8.9-5h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4l-3.87 7H8.53L4.27 2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2z"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                  <div
                    aria-hidden="false"
                    class="slick-slide slick-active"
                    data-index="2"
                    style="outline: none; width: 0px;"
                    tabindex="-1"
                  >
                    <div>
                      <article
                        class="c3"
                      >
                        <a
                          class="c4"
                          href="/game/population-zero"
                        >
                          <img
                            alt="Population Zero"
                            src="https://source.unsplash.com/user/willianjusten/300x142"
                          />
                        </a>
                        <div
                          class="c5"
                        >
                          <a
                            class="c6"
                            href="/game/population-zero"
                          >
                            <h3
                              class="c7"
                            >
                              Population Zero
                            </h3>
                            <h4
                              class="c8"
                            >
                              Rockstar Games
                            </h4>
                          </a>
                          <div
                            class="c9"
                          >
                            <button
                              class="c10"
                            >
                              <svg
                                aria-hidden="true"
                                aria-label="Add to Wishlist"
                                class="c2"
                                fill="currentColor"
                                focusable="false"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"
                                />
                              </svg>
                            </button>
                          </div>
                          <div
                            class="c11"
                          >
                            <div
                              class="c12"
                            >
                              $235.00
                            </div>
                            <div
                              class="c13"
                            >
                              $215.00
                            </div>
                            <button
                              class="c14"
                            >
                              <svg
                                aria-hidden="true"
                                aria-label="Add to cart"
                                class="c2"
                                fill="currentColor"
                                focusable="false"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-8.9-5h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4l-3.87 7H8.53L4.27 2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2z"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                  <div
                    aria-hidden="false"
                    class="slick-slide slick-active"
                    data-index="3"
                    style="outline: none; width: 0px;"
                    tabindex="-1"
                  >
                    <div>
                      <article
                        class="c3"
                      >
                        <a
                          class="c4"
                          href="/game/population-zero"
                        >
                          <img
                            alt="Population Zero"
                            src="https://source.unsplash.com/user/willianjusten/300x143"
                          />
                        </a>
                        <div
                          class="c5"
                        >
                          <a
                            class="c6"
                            href="/game/population-zero"
                          >
                            <h3
                              class="c7"
                            >
                              Population Zero
                            </h3>
                            <h4
                              class="c8"
                            >
                              Rockstar Games
                            </h4>
                          </a>
                          <div
                            class="c9"
                          >
                            <button
                              class="c10"
                            >
                              <svg
                                aria-hidden="true"
                                aria-label="Add to Wishlist"
                                class="c2"
                                fill="currentColor"
                                focusable="false"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"
                                />
                              </svg>
                            </button>
                          </div>
                          <div
                            class="c11"
                          >
                            <div
                              class="c12"
                            >
                              $235.00
                            </div>
                            <div
                              class="c13"
                            >
                              $215.00
                            </div>
                            <button
                              class="c14"
                            >
                              <svg
                                aria-hidden="true"
                                aria-label="Add to cart"
                                class="c2"
                                fill="currentColor"
                                focusable="false"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-8.9-5h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4l-3.87 7H8.53L4.27 2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2z"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                  <div
                    aria-hidden="true"
                    class="slick-slide"
                    data-index="4"
                    style="outline: none; width: 0px;"
                    tabindex="-1"
                  />
                </div>
              </div>
              <svg
                aria-hidden="true"
                aria-label="next games"
                class="c2 slick-arrow slick-next"
                currentSlide="0"
                data-role="none"
                fill="currentColor"
                focusable="false"
                slideCount="5"
                style="display: block;"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"
                />
              </svg>
            </div>
          </section>
        </section>
      </div>
    `);
  });
});
