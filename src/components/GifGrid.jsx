import { GridItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);
  console.log({ isLoading });
  //   const [images, setImages] = useState([]);

  //   const getImages = async () => {
  //     const newImages = await getGifs(category);
  //     setImages(newImages);
  //     console.log(newImages);
  //   };

  //   useEffect(() => {
  //     // getGifs(category).then((newImages) => setImages(newImages));
  //     getImages();
  //   }, []);

  return (
    <>
      {isLoading && <h2>Cargando</h2>}
      <>
        <h3>{category}</h3>
        <ol>
          {/* {images.map((image) => {
          return <li key={image.id}>{image.title}</li>;
        })} */}

          <div className="card-grid">
            {images.map(
              (
                image /* Si lo ponemos con llaves, no tiene el return implícito, para ello: */
              ) => (
                <GridItem key={image.id} {...image} />
              )
            )}
          </div>
          {/* <GridItem images={images} /> */}
        </ol>
      </>
    </>
  );
};
