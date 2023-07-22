import iconCart from "../../assets/icon-cart.svg";
import productImage from "../../assets/image-product-desktop.jpg";

export const ProductPreview = () => {
  return (
    <main className="w-2/3 rounded-md grid grid-cols-2 bg-white">
      <section className="rounded-l-lg h-full">
        <img className="object-fill h-full rounded-l-lg" src={productImage} alt="" />
      </section>
      <section className="p-12">
        <span className="text-gray-500 tracking-widest">PERFUME</span>
        <h1 className="text-4xl font-bold my-6 font-primary">
          Gabrielle Essence Eau De Parfum
        </h1>
        <p className="text-gray-500 leading-loose">
          A floral, solar and voluptuous interpretation composed by Oliver
          Polge, perfumer-Creator forthe House of CHANEL
        </p>
        <div className="my-6 flex items-center">
          <span className="text-teal-600 text-4xl mr-7 font-primary">$149.99</span>
          <span className="text-gray-500 block" ><s>$169.99</s></span>
        </div>

        <button className="bg-teal-700 text-white flex items-center p-3 w-full justify-center rounded-lg gap-4">
          <img src={iconCart} alt="" />
          Add to Cart
        </button>
      </section>
    </main>
  );
};
