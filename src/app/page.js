import Image from "next/image";

export default function Home() {
    return (
        <>
            <>
                <Image
                        className=""
                        src="/next.svg"
                        alt="Next.js"
                        width={180}
                        height={38}
                        priority
                />
            </>
            <main></main>
        </>
    );
}
