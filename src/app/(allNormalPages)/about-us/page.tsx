import Image from "next/image";

const AboutUs = () => {
    return (
        <div>

            <section>
                <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
                    <h2 className="mb-8 text-3xl font-bold md:text-5xl lg:mb-14">Meet GroceryX</h2>
                    <p className="mb-8 max-w-lg text-sm text-[#808080] sm:text-base lg:mb-24">
                        GroceryX: Your online marketplace for all things fish! From the tranquility of rivers to the depths of oceans, we’ve got it all. Cast your net into our abundant selection and let your kitchen tell a delightful, fish-filled story!
                    </p>
                    <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
                        <Image src="https://img.freepik.com/free-photo/top-view-fresh-raw-fish-with-tomatoes-greens-dark-background_179666-22614.jpg?t=st=1711559148~exp=1711562748~hmac=0028a1f3ad2d77d130c5223cab1b91f06c3655ac0535427d84e79edfbe5e522e&w=826" alt="photo" width={400} height={400} className="inline-block h-full w-full rounded-2xl object-cover" />
                        <div className="flex flex-col gap-5 rounded-2xl border border-solid border-black p-10 sm:p-20">
                            <h2 className="text-3xl font-bold md:text-5xl">Our Mission</h2>
                            <p className="text-sm text-[#808080] sm:text-base"> GroceryX: Your online marketplace for all things fish! From the tranquility of rivers to the depths of oceans, we’ve got it all. Cast your net into our abundant selection and let your kitchen tell a delightful, fish-filled story!
                                <br />
                                <br />Massa id neque aliquam vestibulum morbi blandit. Nulla pellentesque dignissim enim sit amet venenatis.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
