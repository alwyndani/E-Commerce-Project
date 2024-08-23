import React, { useEffect } from "react";
import {
  ps1,
  ps2,
  ps3,
  ps4,
  hm1,
  hm2,
  hm3,
  hm4,
  gopro1,
  gopro2,
  gopro3,
  gopro4,
  watch1,
  watch2,
  watch3,
  watch4,
} from "../assets"; //images
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/ZenSlice";
import { ToastContainer, toast } from "react-toastify";
import { setProducts } from "../redux/ZenSlice";

export const ProductCard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formatPrice = (price) => `₹${price.toLocaleString()}`;

  const product = [
    {
      _id: 1,
      image: ps3,
      title: "Sony PlayStation VR2 Horizon Call of the Mountain Bundle.",
      oldPrice: 58999,
      newPrice: 56499,
      description:
        "1. CUTTING-EDGE PERFORMANCE: Enjoy 4K HDR visuals, a 110º field of view, and advanced graphical rendering.\n" +
        "2. PLAYSTATION VR2 SENSE TECHNOLOGY: Feel real sensations and emotions with eye tracking, headset feedback, 3D Audio, and highly intuitive controls.\n" +
        "3. QUICK SETUP: Jump straight into the action with a simple one-cable connection to your PS5 console.\n" +
        "4. THRILLING NEW WORLDS: Surround yourself in a new generation of genre-defining VR games.",
      isNow: true,
      alt: "PS3-image",
    },
    {
      _id: 2,
      image: ps1,
      title:
        "Sony PS5 Playstation 5 Disc Version Gaming Console - 4K UHD  Blu-Ray, 16GB GDDR6 Memory, Ultra-High Speed 825GB SSD.",
      oldPrice: 54990,
      newPrice: 52990,
      description:
        "1.HORIZONTAL STAND FOR PS5 CONSOLE: Designed specifically for the PS5 Disc & Digital Edition, this utility stand allows for optimal placement of the console in a horizontal position\n" +
        "2.SPACE-SAVING DESIGN: The PS5 Desk Top Horizontal Stand offers a sleek and space-saving solution for displaying your PS5 console horizontally on your desk or entertainment center..\n" +
        "3.INTEGRATED USB PORTS: Equipped with four built-in USB ports, this desk top stand provides convenient connectivity options for your PS5 accessories and peripherals..\n",

      isNow: true,
      alt: "PS1-image",
    },
    {
      _id: 3,
      image: ps2,
      title:
        "PlayStation Portal™ Remote Player for PS5® console,60fps capable at 1080p resolution.",
      oldPrice: 24999,
      newPrice: 23490,
      isNow: true,
      description:
        "*1.Beautiful 8” LCD Screen - Take in every exquisite detail of your favorite games as they come alive on a brightly lit and gorgeous full HD screen.\n" +
        "2.*60fps Capable at 1080p Resolution - PlayStation Portal Remote Player can deliver silky smooth gameplay at up to 60fps with high image clarity on its 1080p resolution screen.***.\n" +
        "3.*PlayStation Portal Remote Player can stream compatible games installed on your PS5 console\n",
      alt: "PS2-image",
    },
    {
      _id: 4,
      image: ps4,
      title: "Sony PS4 Slim 500 GB Console,5-inch display. ",
      oldPrice: 36499,
      newPrice: 31999,
      description:
        "1.Suspend mode eliminates the load time on your saved game and allows you to immediately return to where you left off by pressing the power button\n" +
        "2.Enables the greatest game developers in the world to unlock their creativity and push the boundaries of play through a platform that is tuned specifically to their needs.\n" +
        "3.With PS Vita, gamers will be able to seamlessly play PS4 games on the beautiful 5-inch display over Wi-Fi in a local environment.\n",
      isNow: false,
      alt: "PS4-image",
    },
    {
      _id: 5,
      image: hm1,
      title:
        "ZEBRONICS BT4440RUCF 60W 4.1 Channel Multimedia Speakers With Supporting SD Card, USB, AUX, FM & LED Display.",
      oldPrice: 3600,
      newPrice: 2400,
      description:
        "1.[Wireless connectivity]: The ZEB-BT4440RUCF speaker system features advanced BT for seamless connectivity with smartphones, tablets, and laptops.\n" +
        "2.[Powerful Output]: The ZEB-BT4440RUCF boasts a robust 60-watt RMS output, providing powerful and consistent audio performance..\n" +
        "3.[LED display]: The speaker’s built-in LED display offers a modern touch, clearly showing the current mode, track details, and volume levels..\n",
      isNow: true,
      alt: "HmTr1-image",
    },
    {
      _id: 6,
      image: hm2,
      title: "SONY SA-D40 80 W Bluetooth Home Theatre  (Black, 4.1 Channel).",
      oldPrice: 12490,
      newPrice: 10990,
      description:
        "1.4.1 channel multimedia speakers, CENTRE SPEAKER ENCLOSURE TYPE and FRONT SPEAKER ENCLOSURE TYPE: Bass Reflex;Enjoy powerful bass with large sub-woofer and 80W output\n" +
        "2.Enjoy wireless music with mobile through Bluetooth streaming;Designed for use with TVs, PCs and music players.\n" +
        "3.USB port for easy connectivity;Stylish black gloss speaker finish.\n" +
        "4.Supplied with remote control. Front Speaker Dimensions (W x H x D): 10.6 x18.8 x9.6cm; Country of Origin: China",
      isNow: true,
      alt: "HmTr2-image",
    },
    {
      _id: 7,
      image: hm3,
      title:
        "JBL Cinema SB271, Dolby Digital Soundbar with Wireless Subwoofer for Extra Deep Bass, 2.1 Channel Home Theatre.",
      oldPrice: 58999,
      newPrice: 56499,
      description:
        "1.Free Installation, Replacement & On-Site Repair within 24 hours ( in Select cities).T&C Apply;220W SOUNDBAR WITH WIRELESS SUBWOOFER: JBL Cinema SB271 delivers a massive 220 Watt of powerful sound \n" +
        "2.DOLBY DIGITAL AUDIO: Bring the theater to your home with 2.1 Channel Dolby Digital audio improving the immersive feeling in the world of movies and music;FLEXIBILITY OF WIRELESS MUSIC STREAMING & CABLE.\n" +
        "3.Model: Jblsb271blkin; Battery Average Life: 24.0Hours; Is Waterproof: False.\n",
      isNow: false,
      alt: "HmTr3-image",
    },
    {
      _id: 8,
      image: hm4,
      title:
        "Samsung Soundbar (HW-B67E-XL) 5.1 Channel, Wireless Subwoofer,1x Center Speaker and Energy Star, Dolby 5.1ch.",
      oldPrice: 39599,
      newPrice: 36999,
      description:
        "1.Power Output: 520 W, Dolby 5.1 channel 3D Sound, 9 Speakers\n" +
        "2.Deep, rich bass boost with a wireless subwoofer, Captivating audio technology that moves the sound around you with Dolby Atmos / DTS Virtual:X\n" +
        "3.Sound Modes: Surround Sound Expansion, Game Mode, Adaptive Sound Lite, DTS Virtual:X, Standard.\n" +
        "4.Wireless music streaming via Bluetooth | Bluetooth multi connection- Use the soundbar's Bluetooth to connect two different mobile devices at the same time",
      isNow: true,
      alt: "HmTr4-image",
    },
    {
      _id: 9,
      image: gopro1,
      title:
        "GoPro Hero12 Bundle Pack - Includes Hero12 Action Camera, 2-Batteries, Floating Hand Grip, Head Strap, Curved Adhesive Mount, Carrying Case. ",
      oldPrice: 50490,
      newPrice: 36999,
      description:
        "1.1 year International + Free 1* year extended India warranty. *To avail free 1 year local India warranty please register on website (gopro luxurypersonified)\n" +
        "2.What’s Included: HERO12 Black Camera, 2 Enduro Batteries, The Handler (Floating Hand Grip), Head Strap 2.0, Curved Adhesive Mount, Mounting Buckle + Thumb Screw, USB-C Cable, Carrying Case..\n" +
        "3.Extra-Large Field of View : HERO12 Black’s powerful image sensor delivers the most expansive field of view ever on a HERO camera out of the box. It features extra-large 8:7 aspect ratio footage that gets more of the sky .\n",
      isNow: true,
      alt: "gopro1-image",
    },
    {
      _id: 10,
      image: gopro2,
      title:
        "GoPro HERO11 Waterproof Action Camera with Front & Rear LCD Screens, 5.3K60 Ultra HD Video, HyperSmooth 5.0,1080p Live Streaming with Enduro Battery. ",
      oldPrice: 47699,
      newPrice: 35700,
      description:
        "1.1 year International + Free 1* year extended India warranty. *To avail free 1 year local India warranty please register on website (gopro luxurypersonified)\n" +
        "2.SHigh Dynamic Range Video + Photo : Best-in-class image quality to the next level with HDR for both videos (5.3K and 4K) and photos. .\n" +
        "3.Unbelievable Image Quality : With 5.3K video that gives you 91% more resolution than 4K and an incredible 665% more than 1080p, HERO12 Black captures the action.\n",
      isNow: true,
      alt: "gopro2-image",
    },
    {
      _id: 11,
      image: gopro3,
      title:
        "GoPro Hero11 Waterproof Action Camera with Shorty-Mini Extension Pole&Battery|Front&Rear LCD Screen,5.3K60 Ultra Hd Video. ",
      oldPrice: 50100,
      newPrice: 41890,
      description:
        "1.1 year International + Free 1* year extended India warranty. *To avail free 1 year local India warranty please register on website (gopro luxurypersonified)\n" +
        "2.What’s Included: HERO11 Black Action Camera, Enduro Battery, Curved Adhesive Mount, Mounting Buckle + Thumb Screw, USB-C Cable, 1 Shorty mini extension pole and tripod.\n" +
        "3.Revolutionary New Image Sensor: expansive field of view ever on a HERO camera out of the box. This gives you an extra-large canvas for your creativity by capturing more of the sky and horizon in every shot. Zoom in, crop your shots, change digital lenses.\n",
      isNow: false,
      alt: "gopro3-image",
    },
    {
      _id: 12,
      image: gopro4,
      title:
        "GoPro Hero11 with Enduro Rechargeable Battery Bundle - Waterproof Action Camera with Front LCD and Touch Rear Screens, 27MP Photos. ",
      oldPrice: 51900,
      newPrice: 48457,
      description:
        "1.What’s Included: HERO11 Black Action Camera, Enduro Battery, Curved Adhesive Mount, Mounting Buckle + Thumb Screw, USB-C Cable with Free Enduro Battery\n" +
        "2.High-Res Photos + Videos, High Frame Rate: HERO11 Black’s new image sensor boosts photo resolution up to an incredible 27MP while delivering 5.3K60 video \n" +
        "3.gopro hero 11 action camera 4k+ 5k+ vlogging video recording adventure sports waterproof underwater HD compact helmet outdoor 60fps image stabilization.\n",
      isNow: true,
      alt: "gopro4-image",
    },
    {
      _id: 13,
      image: watch1,
      title:
        "Apple Watch Series 9 [GPS + Cellular 41mm] Smartwatch with (PRODUCT)RED Aluminum Case with (PRODUCT)RED Sport Band M/L. ",
      oldPrice: 36499,
      newPrice: 31999,
      description:
        "1.WHY APPLE WATCH SERIES 9 — Your essential companion for a healthy life is now even more powerful. The S9 chip enables a super-bright display and a magical new way to quickly and easily interact with your Apple Watch\n" +
        "2.CARBON NEUTRAL — An aluminium Apple Watch Series 9 paired with the latest Sport Loop is carbon neutral..\n" +
        "3.CELLULAR CONNECTIVITY—Send a text, make a call, and stream music without your iPhone nearby..\n",
      isNow: true,
      alt: "watch1-image",
    },
    {
      _id: 14,
      image: watch2,
      title:
        "Apple Watch Series 9 [GPS + Cellular 45mm] Smartwatch with Silver Aluminum Case with Winter Blue Sport Loop One Size. ",
      oldPrice: 54900,
      newPrice: 51258,
      description:
        "1.CARBON NEUTRAL — An aluminium Apple Watch Series 9 paired with the latest Sport Loop is carbon neutral.\n" +
        "2.CELLULAR CONNECTIVITY—Send a text, make a call, and stream music without your iPhone nearby..\n" +
        "3.ADVANCED HEALTH FEATURES—Keep an eye on your blood oxygen. Take an ECG anytime. Get notifications if you have an irregular heart rhythm. See how much time you spent in REM, Core, or Deep sleep with sleep stages. \n",
      isNow: false,
      alt: "watch2-image",
    },
    {
      _id: 15,
      image: watch3,
      title:
        "G-Shock GSHOCK Men's Solar Powered Wrist Watch Analog-Digital Display and Resin Strap, GSTS100G-1A. ",
      oldPrice: 17795,
      newPrice: 16015,
      description:
        "1.Dial Color: Black, Case Shape: Round\n" +
        "2.Band Color: Black, Band Material: Resin\n" +
        "3.Watch Movement Type: Quartz, Watch Display Type: Analog-Digital\n",
      isNow: true,
      alt: "watch3-image",
    },
    {
      _id: 16,
      image: watch4,
      title:
        "Casio G-Shock GBD-200-2DR Digital Dial Blue Resin Strap Men's Watch Bluetooth Workout Tracking G1147. ",
      oldPrice: 16000,
      newPrice: 14995,
      description:
        "1.Dial Color: Black, Dial Shape: Octagonal, Dial Glass Material: Mineral\n" +
        "2.Band Color: Blue, Band Material: Resin, Case Material: Resin\n",
      isNow: true,
      alt: "watc4-image",
    },
  ];

  useEffect(() => {
    dispatch(setProducts(product));
  }, [dispatch, product]);

  const handleDetails = (item, title) => {
    const _id = title;
    const idstring = (_id) => {
      const value = String(_id).toLowerCase().split(" ").join("");
      return value.substring(0, 40);
    };
    const rootId = idstring(_id);

    navigate(`/product/${rootId}`, {
      state: {
        product: item,
      },
    });
  };

  return (
    <div className="max-w-screen-xl mx-auto grid grid-cols-4 py-6 gap-4">
      {product.map((item) => (
        <div
         
          key={item._id}
          className="bg-slate-50 group mb-3 border-2 relative"
        >
          <div  onClick={() => {
            handleDetails(item, item.title);
          }} className="w-full h-64  cursor-pointer overflow-hidden">
            <img
              className="h-full w-full object-cover group-hover:scale-110   duration-500"
              src={item.image}
              alt={item.alt}
            />
            <div className="absolute top-4 right-0">
              {item.isNow && (
                <p className="bg-black text-white font-semibold px-6 py-1">
                  Sale
                </p>
              )}
            </div>
          </div>
          <div className="w-full px-2 py-4 flex h-[172px] flex-col gap-2">
            <div>
              <h2 className="font-titleFont text-sm font-semibold">
                {item.title}
              </h2>
            </div>
            <div className="relative overflow-hidden w-32">
              <div className="flex gap-2 text-sm relative transform group-hover:translate-x-32 transition-transform duration-500 w-28">
                <p className="line-through text-gray-500">
                  {formatPrice(item.oldPrice)}
                </p>
                <p className="font-semibold">{formatPrice(item.newPrice)}</p>
              </div>
              <p
                onClick={() =>
                  dispatch(
                    addToCart({
                      _id: item._id,
                      title: item.title,
                      image: item.image,
                      price: item.newPrice,
                      Quantity: 1,
                      description: item.description,
                    })
                  ) &
                  toast.success(
                    `${item.title.substring(0, 25)}...   is added to the cart`
                  )
                }
                className="absolute z-20 text-gray-500 hover:font-bold hover:text-gray-700 flex items-center gap-1 top-[-2.5px] transform translate-x-44 group-hover:translate-x-0 transition-transform duration-500 cursor-pointer"
              >
                Add to Cart{" "}
                <span>
                  <FaArrowRightLong />
                </span>
              </p>
            </div>
          </div>
        </div>
      ))}
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};
