import React from "react";

const clothesSize = () => {
    return (
        <div className="row col-md-12">
            <div className="col-auto mt-1">
                <label className="">
                    <input
                        class="form-check-input radio-none selectClotest"
                        type="radio"
                        name="selectSize"
                    />
                    <div className="card card-clotest-size card-custom p-2 h5 text-center">
                        XXL
                    </div>
                </label>
            </div>
            <div className="col-auto mt-1">
                <label className="">
                    <input
                        class="form-check-input radio-none selectClotest"
                        type="radio"
                        name="selectSize"
                    />
                    <div className="card card-clotest-size card-custom p-2 h5 text-center">
                        XL
                    </div>
                </label>
            </div>
            <div className="col-auto mt-1">
                <label className="">
                    <input
                        class="form-check-input radio-none selectClotest"
                        type="radio"
                        name="selectSize"
                    />
                    <div className="card card-clotest-size card-custom p-2 h5 text-center">
                        L
                    </div>
                </label>
            </div>
            <div className="col-auto mt-1">
                <label className="">
                    <input
                        class="form-check-input radio-none selectClotest"
                        type="radio"
                        name="selectSize"
                    />
                    <div className="card card-clotest-size card-custom p-2 h5 text-center">
                        L
                    </div>
                </label>
            </div>
            <div className="col-auto mt-1">
                <label className="">
                    <input
                        class="form-check-input radio-none selectClotest"
                        type="radio"
                        name="selectSize"
                    />
                    <div className="card card-clotest-size card-custom p-2 h5 text-center">
                        S
                    </div>
                </label>
            </div>
        </div>
    );
};

export default clothesSize;
