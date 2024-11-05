import Flickity from "react-flickity-component-module";
import "flickity/css/flickity.css"

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
    <div className="w-full h-screen flex items-center justify-center">
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