import { GifItem } from "../../src/components/GifItem";
import { render } from "@testing-library/react";

describe("Pruebas en <GifItem />", () => {
  const title = "Saitama";
  const url = "https://one-punch.com/saitama.jpg";

  test("Se ha de renderizar el componente", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });
});
