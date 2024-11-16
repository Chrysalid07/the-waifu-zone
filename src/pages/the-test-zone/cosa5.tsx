type MemoryCard = {
    name: string
    url: string
}

function swap(array: MemoryCard[], i: number, j: number) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function shuffleCards(array: MemoryCard[]) {
    const length = array.length;

    for (let i = length; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * i);
        const currentIndex = i - 1;
        swap(array, currentIndex, randomIndex)
    }

    return array;
 }

export default function Page() {
    //const [flipped, setF]

    shuffleCards([])

    return (
        <div className={`min-h-screen bg-black flex flex-col gap-12 font-[family-name:var(--font-geist-sans)] items-center justify-center`}>
            <div className="grid grid-cols-5 w-1/2 gap-4">
                <div className="bg-white aspect-square w-full"></div>
                <div className="bg-white aspect-square w-full"></div>
                <div className="bg-white aspect-square w-full"></div>
                <div className="bg-white aspect-square w-full"></div>
                <div className="bg-white aspect-square w-full"></div>
                <div className="bg-white aspect-square w-full"></div>
                <div className="bg-white aspect-square w-full"></div>
                <div className="bg-white aspect-square w-full"></div>
                <div className="bg-white aspect-square w-full"></div>
                <div className="bg-white aspect-square w-full"></div>
                <div className="bg-white aspect-square w-full"></div>
                <div className="bg-white aspect-square w-full"></div>
                <div className="bg-white aspect-square w-full"></div>
                <div className="bg-white aspect-square w-full"></div>
                <div className="bg-white aspect-square w-full"></div>
                <div className="bg-white aspect-square w-full"></div>
                <div className="bg-white aspect-square w-full"></div>
                <div className="bg-white aspect-square w-full"></div>
                <div className="bg-white aspect-square w-full"></div>
                <div className="bg-white aspect-square w-full"></div>
            </div>
        </div>
    )
}