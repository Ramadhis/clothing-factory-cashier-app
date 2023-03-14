import React from "react";
import ClothesSize from "./clothesSize";
import ClothesType from "./clothesType";
import ClothesColor from "./clothesColor";

const selectClotest = () => {
    return (
        <div className="col-md-6">
            <div className="col-12">
                <label class="form-label">Pilih jenis pakaian</label>
                <ClothesType />
                <label class="form-label mt-3">Pilih Warna Pakaian</label>
                <ClothesColor />
                <label class="form-label mt-1">Pilih Ukuran Pakaian</label>
                <ClothesSize />
            </div>
        </div>
    );
};

export default selectClotest;
