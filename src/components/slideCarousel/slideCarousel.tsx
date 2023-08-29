import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "img/Fotos/slide_fotos/1.jpg" },
  { url: "./../../../public/img/Fotos/slide_fotos/2.jpg" },
  { url: "./../../../public/img/Fotos/slide_fotos/3.jpg" },
  { url: "./../../../public/img/Fotos/slide_fotos/4.jpg" },
  { url: "./../../../public/img/Fotos/slide_fotos/5.jpg" },
  { url: "./../../../public/img/Fotos/slide_fotos/6.jpg" },
  { url: "./../../../public/img/Fotos/slide_fotos/7.jpg" },
  { url: "./../../../public/img/Fotos/slide_fotos/8.jpg" },
  { url: "./../../../public/img/Fotos/slide_fotos/9.jpg" },
  { url: "./../../../public/img/Fotos/slide_fotos/10.jpg" }
];

const App = () => {
  return (
    <div>
      <SimpleImageSlider
        width={896}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
      />
    </div>
  );
}

export default App();