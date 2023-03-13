import React from "react";
import ClothesSize from "./clothesSize";
import ClothesType from "./clothesType";
const selectClotest = () => {
    return (
        <div className="col-md-6">
            <div className="col-12">
                <label class="form-label">Pilih jenis pakaian</label>
                <ClothesType />
                <label class="form-label mt-3">Pilih Ukuran Pakaian</label>
                <ClothesSize />
            </div>
            <div className="col-12 mt-3">
                <form>
                    <div class="mb-3">
                        <label class="form-label">
                            Berapa pcs yang ada inginkan ?
                        </label>
                        <input type="number" min="100" class="form-control" />
                        <div class="form-text">Minimal pemesanan 100pcs</div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default selectClotest;
