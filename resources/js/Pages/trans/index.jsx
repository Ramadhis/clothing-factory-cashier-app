import React from "react";
import SelectClothest from "./selectClothes";
import Pricing from "./pricing";

const index = () => {
    return (
        <>
            <div className="container">
                <div className="h1 text-center fw-bold mt-5">
                    Pembuatan Baju
                </div>
                <div className="h5 text-center mt-3 text-muted">
                    Silahkan pilih jenis dan jumlah yang anda inginkan
                </div>
                <div className="row mt-5">
                    <SelectClothest />
                    <Pricing />
                </div>
            </div>
        </>
    );
};

export default index;
