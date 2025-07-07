import {ListBoxExample} from "./list-box-example";

export default function Home() {
    return (
        <div className="min-h-[200vh] flex justify-center">
            <main className="text-center">
                <h1 className="text-4xl mt-10 font-bold mb-4">
                    Listbox not working properly.
                </h1>
                <div className="mt-5">
                    <ListBoxExample/>
                </div>
            </main>
        </div>
    );
}
