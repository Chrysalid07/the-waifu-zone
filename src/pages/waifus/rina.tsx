import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const characters = [
	"/Waifus/rina/Agumon_vb.webp",
	"/Waifus/rina/Angewomon_vb.webp",
	"/Waifus/rina/Gabumon_vb.webp",
	"/Waifus/rina/Gammamon_vb.webp",
	"/Waifus/rina/Greymon_vb.webp",
	"/Waifus/rina/Jellymon_Battle_Mode_vb.webp",
	"/Waifus/rina/Leomon_vb.webp",
	"/Waifus/rina/Pulsemon_vb.webp",
	"/Waifus/rina/Renamon_vb.webp",
	"/Waifus/rina/Veemon_vb.webp",
    "/Waifus/rina/Vorvomon_vb.webp",
	"/Waifus/rina/Whamon_vb.webp",
] as const;

function mixArray<T>(array: T[]) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}

enum GameSelection {
	None = 0,
	Single = 1,
	Guessed = 2,
	Failed = 3,
}

interface Char {
	readonly char: string;
	readonly i: number;
}

interface CharProps {
	readonly char: string;
	readonly selection: GameSelection;
	readonly onClick: () => void;
}

function Char({ char, selection, onClick }: CharProps) {
	return (
		<button
			type="button"
			className={`aspect-square w-full h-full select-none items-center justify-center border-2 bg-white relative ${
				{
					[GameSelection.Guessed]: "border-green-500",
					[GameSelection.Failed]: "border-red-500",
					[GameSelection.Single]: "border-sky-500",
					[GameSelection.None]: "",
				}[selection]
			}`}
			disabled={selection !== GameSelection.None}
			onClick={onClick}
		>
			<Image src={char} alt={char} fill={true} className={selection == GameSelection.None ? "opacity-0" : "opacity-100"} />
		</button>
	);
}

export default function Home() {
	const [chars, setChars] = useState<string[]>([]);
	const [selection, setSelection] = useState<Char[]>([]);
	const [guessed, setGuessed] = useState<Set<number>>(new Set());

	useEffect(() => {
		setChars(mixArray([...characters, ...characters]));
	}, []);

	const onCharacterClick = (char: string, i: number) => {
		if (guessed.has(i)) return; // already guessed
		if (selection.some((c) => c.i === i)) return; // already selected

		if (selection.length === 0) {
			// first selection
			setSelection([{ i, char }]);
			return;
		}

		if (selection.some((c) => c.char === char)) {
			// correct guess
			setGuessed((prev) => new Set([...prev, selection[0].i, i]));
			setSelection([]);
			return;
		}

		// incorrect guess, show both characters for 1 second
		setSelection((prev) => [...prev, { i, char }]);
		setTimeout(() => {
			setSelection([]);
		}, 1000);
	};

	const getSelectionStatus = (i: number): GameSelection => {
		if (guessed.has(i)) {
			return GameSelection.Guessed;
		}

		if (selection.some((c) => c.i === i)) {
			return selection.length === 2 ? GameSelection.Failed : GameSelection.Single;
		}

		return GameSelection.None;
	};

	return (
            <main className="flex h-screen flex-col items-center justify-center w-full gap-4 bg-sky-800">
                <div className="flex flex-row p-4 z-10 absolute top-0 left-0">
                    <Link href="/">
                        <img className="w-10 h-10 invert" src="/Pred images/Casa.webp" />
                    </Link>
                    <h1 className="text-6xl text-white">Rina</h1>
                </div>
                <div className="flex flex-col items-center">
                    <h1 className="font-bold text-white text-5xl">RINA NECESITA TU AYUDA</h1>
                    <h2 className="text-white text-2xl">Encuentra las parejas de Digimon para ayudarla</h2>
                </div>
                <div
                    className={`w-1/2 grid grid-cols-6 content-center gap-3 p-3 md:grid-cols-8 md:gap-5 md:p-5 ${
                        selection.length === 2 ? "pointer-events-none" : "pointer-events-all"
                    }`}
                >
                    {chars.map((char, i) => (
                        <Char
                            key={String(i)}
                            char={char}
                            selection={getSelectionStatus(i)}
                            onClick={() => onCharacterClick(char, i)}
                        />
                    ))}
                </div>
            </main>
	);
}