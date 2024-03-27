import { Button } from "@/components/ui/button";
import React from "react";

const ContactUs = () => {
    return (
        <div className="w-full h-full flex justify-between sm:justify-start items-center px-4 lg:px-20">
            <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
                <div className="">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="text-3xl font-bold md:text-5xl">Contact Sales</h2>
                        <p className="mx-auto mb-12 mt-4 max-w-xl text-[#647084]">
                            Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                            aliquam,purus sit amet luctus magna fringilla urna
                        </p>
                    </div>
                    <form
                        className="mb-4 text-left sm:px-4 md:px-20"
                        name="wf-form-name"
                        method="get"
                    >
                        <div className="mb-4 grid grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name-2" className="mb-1 font-medium">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    className="h-9 w-full bg-[#f2f2f7] px-3 py-6 text-sm text-[#333333]"
                                    placeholder=""
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="name-3" className="mb-1 font-medium">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    className="h-9 w-full bg-[#f2f2f7] px-3 py-6 text-sm text-[#333333]"
                                    placeholder=""
                                    required
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="field" className="mb-1 font-medium">
                                Company Website
                            </label>
                            <input
                                type="text"
                                className="h-9 w-full bg-[#f2f2f7] px-3 py-6 text-sm text-[#333333]"
                                placeholder=""
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="field" className="mb-1 font-medium">
                                Email
                            </label>
                            <input
                                type="text"
                                className="h-9 w-full bg-[#f2f2f7] px-3 py-6 text-sm text-[#333333]"
                                placeholder=""
                                required
                            />
                        </div>
                        <div className="mb-8">
                            <label htmlFor="field" className="mb-1 font-medium">
                                Message
                            </label>
                            <textarea
                                placeholder=""
                                className="h-auto min-h-[186px] w-full overflow-auto bg-[#f2f2f7] px-3 py-2 text-sm text-[#333333]"
                            >
                                {" "}
                            </textarea>
                        </div>
                        <label className="mb-1 flex pb-4 font-medium">
                            <input type="checkbox" name="checkbox-3" />
                            <span
                                className="ml-4 inline-block cursor-pointer text-sm"
                            >
                                I agree with the{" "}
                                <a href="#" className="font-bold text-[#0b0b1f]">
                                    Terms &amp; Conditions
                                </a>
                            </span>
                        </label>
                        <Button className="rounded-lg border-2 bg-green-600 text-white border-green-500 px-8 py-3 text-xl duration-200 hover:bg-green-500 hover:text-white">
                            Let{"'"}s Talk
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
