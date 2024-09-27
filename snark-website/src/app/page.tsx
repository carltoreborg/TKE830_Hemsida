import Image from "next/image";

export default function Home() {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-cover bg-center" 
      style={{ backgroundImage: 'url(/images/background.jpg)' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
      <div className="relative z-10 container mx-auto flex items-center justify-center">
        <div className="flex flex-wrap items-center justify-center w-full">
          <div className="w-full px-4 lg:w-1/2 flex justify-center lg:justify-end">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[650px] text-center lg:m-0"
              data-wow-delay=".15s">
              <Image src="/images/snark.png" 
                alt="IKEA SNARK" 
                width={1000} 
                height={500} 
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2 flex justify-center lg:justify-start">
            <div className="max-w-[470px]">
              <h1 className="mb-9 text-3xl font-bold text-black dark:text-white sm:text-4xl lg:text-3xl xl:text-4xl">
                IKEA SNARK
              </h1>
              <div className="mb-9">
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  lorem ipsum dolor sit amet, consectetur adipiscing elit.  
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}