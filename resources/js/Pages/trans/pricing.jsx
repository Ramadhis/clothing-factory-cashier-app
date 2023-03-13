import React from "react";

const pricing = () => {
    return (
        <div className="col-md-6 mt-1 ">
            <div className="card bg-light pt-3 pb-3 card-right-custom">
                <div className="row p-3">
                    <div className="col-6">
                        <div> harga per pcs</div>
                        <div className="fw-bold h4 mt-2">Rp100.000,-</div>
                    </div>
                    <div className="col-6">
                        <div> harga keseluruhan</div>
                        <div className="fw-bold h2 mt-2">Rp10.000.000,-</div>
                    </div>
                </div>
                <div className="p-3">
                    <label class="form-label">pilih pembayaran</label>
                    <select
                        className="form-select"
                        aria-label="Default select example"
                    >
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <button className="btn btn-primary w-100 mt-5">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default pricing;
