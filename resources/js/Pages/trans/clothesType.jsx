import React from "react";

const clothesType = () => {
    return (
        <div className="row row-cols-4">
            <div className="col mt-1">
                <label className=" p-1">
                    <input
                        class="form-check-input radio-none selectClotest"
                        type="radio"
                        name="selectClotest"
                    />
                    <div className="card card-size card-custom">
                        <img
                            className="image-custom"
                            src="/assets/image/kemeja-lengan-pendek.jpg"
                            alt=""
                        />
                    </div>
                </label>

                <label class="form-text text-center">
                    kemeja lengan pendek
                </label>
            </div>
            <div className="col mt-1">
                <label className=" p-1">
                    <input
                        class="form-check-input radio-none selectClotest"
                        type="radio"
                        name="selectClotest"
                    />
                    <div className="card card-size card-custom">
                        <img
                            className="image-custom"
                            src="/assets/image/kemeja-lengan-panjang.jpg"
                            alt=""
                        />
                    </div>
                </label>
                <label class="form-text text-center">
                    kemeja lengan panjang
                </label>
            </div>
            <div className="col mt-1">
                <label className=" p-1">
                    <input
                        class="form-check-input radio-none selectClotest"
                        type="radio"
                        name="selectClotest"
                    />
                    <div className="card card-size card-custom">
                        <img
                            className="image-custom"
                            src="/assets/image/kemeja-lengan-pendek.jpg"
                            alt=""
                        />
                    </div>
                </label>
                <label class="form-text text-center">
                    kemeja lengan pendek
                </label>
            </div>
            <div className="col mt-1">
                <label className=" p-1">
                    <input
                        class="form-check-input radio-none selectClotest"
                        type="radio"
                        name="selectClotest"
                    />
                    <div className="card card-size card-custom">
                        <img
                            className="image-custom"
                            src="/assets/image/kemeja-lengan-pendek.jpg"
                            alt=""
                        />
                    </div>
                </label>
                <label class="form-text text-center">
                    kemeja lengan panjang
                </label>
            </div>
        </div>
    );
};

export default clothesType;
