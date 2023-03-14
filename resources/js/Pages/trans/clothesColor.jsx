import React from "react";

const clothesColor = () => {
    return (
        <div className="row col-md-12">
            <div className="col-auto mt-1">
                <label className="pe-3">
                    <input
                        class="form-check-input radio-none selectClotest"
                        type="radio"
                        name="selectColor"
                    />
                    <div
                        className="card card-clotest-color card-clotest-color-custom p-2 h5 text-center"
                        style={{ background: "red" }}
                    ></div>
                </label>
                <label className="pe-3">
                    <input
                        class="form-check-input radio-none selectClotest"
                        type="radio"
                        name="selectColor"
                    />
                    <div
                        className="card card-clotest-color card-clotest-color-custom p-2 h5 text-center"
                        style={{ background: "blue" }}
                    ></div>
                </label>
                <label className="pe-3">
                    <input
                        class="form-check-input radio-none selectClotest"
                        type="radio"
                        name="selectColor"
                    />
                    <div
                        className="card card-clotest-color card-clotest-color-custom p-2 h5 text-center"
                        style={{ background: "yellow" }}
                    ></div>
                </label>
            </div>
        </div>
    );
};

export default clothesColor;
