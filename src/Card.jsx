import desktopImage from "./assets/image-product-desktop.jpg";
import mobileImage from "./assets/image-product-mobile.jpg";
import cartIcon from "./assets/icon-cart.svg";
export default function Card() {
  return (
    <div className="rounded-xl bg-white sm:flex overflow-hidden sm:max-h-1/2 max-h-1/3 max-w-150 text-[#1c232b]">
      <img src={desktopImage} alt="Product" className="object-contain h-110 hidden sm:block" />
      <img src={mobileImage} alt="Product" className="object-cover h-fit sm:hidden" />
      <div className="flex flex-col gap-5 p-8 text-[14px] max-w-full">
        <div className="font-montserrat font-medium text-[#6c7289] tracking-[0.4em]">
          PERFUME
        </div>
        <div className="font-fraunces font-bold text-4xl leading-8">
          Gabrielle Essence Eau De Parfum
        </div>
        <div className="font-montserrat font-medium text-[#6c7289]">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </div>
        <div className="flex items-center gap-4">
          <div className="text-[#3c8067] font-fraunces font-bold text-4xl">
            $149.99
          </div>
          <div className="line-through">$169.99</div>
        </div>
        <div className="flex items-center font-bold gap-3 justify-center p-4 bg-[#3c8067] text-white font-montserrat rounded-md hover:bg-[#1b4133] hover:cursor-pointer">
          <img src={cartIcon} alt="Cart" />
          Add to Cart
        </div>
      </div>
    </div>
  );
}
