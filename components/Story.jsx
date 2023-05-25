import Image from "next/image";

const Story = ({ thumbnailUrls }) => {
  return (
    <div className="flex px-5 py-3 mt-1 overflow-x-auto gap-x-3">
      {thumbnailUrls.map((thumb, i) => (
        <div
          key={i}
          className="text-center cursor-pointer"
        >
          <div className="w-[60px] h-[60px]">
            <Image
              className="rounded-full ring-2 ring-blue-400 ring-offset-2 ring-offset-blue-200"
              src={thumb}
              width={60}
              height={60}
              alt="thumb"
            />
          </div>
          <p className="mt-2">Story {i + 1} </p>
        </div>
      ))}
    </div>
  );
};

export default Story;
