import Flickity from "react-flickity-component-module";
import "flickity/css/flickity.css"
import Link from "next/link";

const items = [
  {
    src: '/Test Img 1.png',
    altText: 'Test Image 1',
  },
  {
    src: '/Test Img 2.png',
    altText: 'Test Image 2',
  },
  {
    src: '/Test Img 3.png',
    altText: 'Test Image 3',
  },
];

function App() {
  return (
    <div className="w-full h-screen bg-black flex items-center justify-center flex-col gap-8">
      <div className="flex flex-row">
        <Link className="rounded-lg" href="the-test-zone">
          <img className="w-10 h-10 invert" src="https://cdn-icons-png.flaticon.com/512/1174/1174444.png" />
        </Link>
        <Link className="rounded-lg" href="/">
          <img className="w-10 h-10 invert" src="Casa.webp" />
        </Link>
      </div>
      <Flickity
        className={'carousel w-1/3'}                
        elementType={'div'}                   
        options={{
          wrapAround: true,
          autoPlay: 3000
        }}
        disableImagesLoaded
        reloadOnUpdate
        static
      >
        {items.map((v, i) => {
          return (
            <img key={i} src={v.src} alt={v.altText} className="w-2/3 mx-5" />
          )
        })}
      </Flickity>
    </div>
  )
}

export default App;