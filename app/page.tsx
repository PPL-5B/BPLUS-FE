import AddCycleModal from "@/components/cycle/AddCycleModal";

export default function Home() {
  return (
    <div className="flex items-center justify-center">
      <div className="min-h-screen flex flex-col justify-center items-center w-[80%]">
        <p className="text-4xl font-bold text-neutral-600">
          Budidaya{/*
          */}<span className="font-normal text-blue-500">Plus</span>
        </p>
        <p className="text-2xl mt-2 text-neutral-600">Coming soon</p>
        <AddCycleModal />
      </div>
    </div>
  );
}
