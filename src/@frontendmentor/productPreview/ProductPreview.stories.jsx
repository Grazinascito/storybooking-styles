import { ProductPreview } from "./ProductPreview";
import "../../global.css";

const meta = {
  component: ProductPreview,
};

export default meta;

export const Primary = {
  render: () => <div className="bg-orange-100 w-screen h-screen grid place-items-center"><ProductPreview /></div>,
};
