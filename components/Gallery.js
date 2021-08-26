import Slider from "@madzadev/image-slider";
import "@madzadev/image-slider/dist/index.css";

const images = [
  {
    url: "https://portmeirion.wales/oimgnn/spa/1600/beauty-spa-treatment-with-candles-pfzlm5z-1-80q.jpg",
  },
  {
    url: "https://images.unsplash.com/photo-1601747779082-77a8fe377ecc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1492552181161-62217fc3076d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1073&q=80",
  },
  {
    url: "https://lotos-spa.rs/wp-content/uploads/2021/04/lotos-spa-novi-sad-2.jpg",
  },
  {
    url: "https://images.unsplash.com/photo-1585815157396-ad62043f721b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
];
export default function Gallery() {
  return (
    <section className="text-gray-600 font-sans-caption body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap ">
        <div className="flex w-full mb-20 flex-wrap">
          <img className="" src="/anaiblack.png" width="270" />
          <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </p>
        </div>
        <Slider
          imageList={images}
          width={1500}
          height={600}
          loop={true}
          autoPlay={true}
          autoPlayInterval={6000}
        />
      </div>
    </section>
  );
}
