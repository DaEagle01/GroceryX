import Image from "next/image";
import React from "react";

const OurCustomerCompanies = () => {
    const companyLogos = [
        "https://assets.website-files.com/6357722e2a5f19121d37f84d/635b3fe26718fe228c33ca3b_Microsoft%20Logo.svg",
        "https://assets.website-files.com/6357722e2a5f19121d37f84d/635b3fe2b505e19a1c8ee724_PayPal%20Logo.svg",
        "https://assets.website-files.com/6357722e2a5f19121d37f84d/635b3fdca5c3b6500a5eb898_Google%20Logo.svg",
        "https://assets.website-files.com/6357722e2a5f19121d37f84d/635b3fdf5ff5f86ee7d119de_Chase%20Logo.svg",
        "https://assets.website-files.com/6357722e2a5f19121d37f84d/635b3fe2a5c3b692285eb8bc_Walmart%20Logo.svg",
        "https://assets.website-files.com/6357722e2a5f19121d37f84d/635b40da2bca81dd9374cfbe_Slack%20Logo-2.svg",
        "https://assets.website-files.com/6357722e2a5f19121d37f84d/635b3fdf5ff5f86ee7d119de_Chase%20Logo.svg",
        "https://assets.website-files.com/6357722e2a5f19121d37f84d/635b3fe26718fe228c33ca3b_Microsoft%20Logo.svg",
    ]
    return (
        <div className="">
            <div className="grid grid-cols-4 items-center justify-center gap-8 rounded-md bg-green-50 p-16 px-8 py-8 sm:py-12 sm:grid-cols-8 md:gap-16">
                {companyLogos.map(logo => (
                    <div key={logo} className="relative flex items-center justify-center p-2 sm:p-4">
                        <Image
                            src={logo}
                            layout="fill"
                            alt="logo"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurCustomerCompanies;
