import Flickity from "react-flickity-component-module";
import "flickity/css/flickity.css"
import Link from "next/link";

const items = [
  {
    src: '/Test images/Test Img 1.png',
    href: '/the-test-zone/cosa3',
    altText: 'Test Image 1',
  },
  {
    src: '/Test images/Test Img 2.png',
    href: '/the-test-zone/cosa3',
    altText: 'Test Image 2',
  },
  {
    src: '/Test images/Test Img 3.png',
    href: '/deadzone',
    altText: 'Test Image 3',
  },
  {
    src: '/Test images/Test Img 2.png',
    href: '/the-test-zone/cosa3',
    altText: 'Test Image 4',
  },
];

function App() {
  return (
    <div className="w-full h-screen bg-black flex items-center justify-center flex-col gap-8">
      <div className="flex flex-row">
        <Link className="rounded-lg" href="/the-test-zone">
          <img className="w-10 h-10 invert" src="/Pred images/Flecha.png" />
        </Link>
        <Link className="rounded-lg" href="/">
          <img className="w-10 h-10 invert" src="/Pred images/Casa.webp" />
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
            <Link key={i} href={v.href} className="w-2/3 mx-5">
              <img src={v.src} alt={v.altText} />
            </Link>          )
        })}
      </Flickity>
    </div>
  )
}

export default App;