import React, { Component, useState, useEffect } from "react";
import { MDBContainer, MDBRating } from "mdbreact";
import InputError from "@/Components/InputError";
import { Head, Link, useForm } from "@inertiajs/react";
import { AiFillStar, AiOutlineForm } from "react-icons/ai";

export default function ReviewProducts({ reviews, starsAvg, commentsCount,auth,openModal,productid,click }) {
    const [reviewform, setReviewForm] = useState(false);

    const [starNum, setStarNum] = useState(0);



    const rate = () => {
        const numbers = [1, 2, 3, 4, 5]; // Assuming you have an array of numbers
        return numbers.map((number) => (
            <div key={number}>
                <AiFillStar
                    values={starNum}
                    color={number <= starNum ? "gold" : "white"}
                    className="star-object"
                    style={{ margin: "20px 1px" }}
                    onClick={() => {
                        setStarNum(number);
                        setData("stars", number);
                    }}
                    cursor="pointer"
                />
            </div>
        ));
    };

    const totalStars = (rating) => {
        const numbers = [1, 2, 3, 4, 5]; // Assuming you have an array of numbers
        return numbers.map((number) => (
            <div key={number}>
                <AiFillStar
                    values={number}
                    color={number <= rating ? "gold" : "white"}
                    className="star-object"
                    style={{
                        margin: "20px 1px",
                        marginTop: "1px",
                        marginBottom: "1px",

                    }}
                />
            </div>
        ));
    };

    const currentStars = (rating) => {
        const numbers = [1, 2, 3, 4, 5];
        return numbers.map((number) => (
            <div key={number}>
                <AiFillStar
                    values={number}
                    color={number <= rating ? "gold" : "white"}
                    className="star-object"
                    style={{
                        margin: "20px 1px",
                        marginTop: "1px",
                        marginBottom: "1px",
                    }}
                />
            </div>
        ));
    };

    const setOpen = () => {
        if (reviewform == false) {
            setReviewForm(true);
        } else {
            setReviewForm(false);
        }
    };
    const listItems = reviews.map((review) => {
        const date = new Date(review.created_at);

        const formattedDate = date.toLocaleDateString();
        const formattedTime = date.toLocaleTimeString();

        return (
            <div>
                <div class="reviewCard">
                    <div class="card-body">
                        <p
                            style={{
                                fontSize: "0.8rem",
                                marginTop: "0.5rem",
                                textAlign: "right",
                            }}
                        >
                            {formattedDate} {formattedTime}
                        </p>
                        <h5 class="card-title">{review.title}</h5>

                        <h6 class="card-subtitle mb-2 text-secondary">
                            {review.user.firstname}
                        </h6>
                        <div className="stars-container">
                            {" "}
                            {currentStars(review.stars)}
                        </div>

                        <p className="card-text review-description">
                            {review.description}
                        </p>
                    </div>
                </div>
                <div className="line"></div>
            </div>
        );
    });
    const { data, setData, post, processing, errors, reset } = useForm({
        stars: null,
        title: "",
        description: "",
        productid: productid,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("createReview"));
        return () => {
            reset("stars", "title", "description");
        };
    };



    return (


        <div className="review-container">
            {commentsCount >= 1 ? (
                          <div>
                            <div>
                <div
                    style={{
                        paddingTop: "2rem",
                    }}
                >
                    <h1
                        style={{
                            color: "white",
                            textAlign: "center",
                            fontSize: "2rem",
                        }}
                    >
                        {starsAvg}{" "}
                        <p
                            style={{
                                margin: "0 0.5rem",
                                fontSize: "small",
                            }}
                            class="card-subtitle mb-2 text-secondary"
                        >
                            {commentsCount} reviews
                        </p>
                    </h1>
                    <div
                        className="stars-container"
                        style={{ justifyContent: "center", marginTop: "1rem" }}
                    >
                        {totalStars(starsAvg)}
                    </div>
                </div>
            </div>
            <div class="review">
                <h5 class="card-title reviewTitle">Reviews</h5>
                {auth.user ? (
                            <>
                               <button
                    type="button"
                    class="btn btn-dark"
                    style={{
                        fontSize: "0.8rem",
                        borderRadius: "0.3rem",
                        color: "white",
                    }}
                    onClick={() => {
                        setOpen();
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                        }}
                    >
                        <AiOutlineForm
                            style={{
                                marginRight: "0.5rem",
                                marginTop: "0.2rem",
                            }}
                        />{" "}
                        Write a review
                    </div>
                </button>

                <div className="reviewProducts">
                    <div
                        className={
                            "reviewBox " + (reviewform ? "expand" : "closed")
                        }
                    >
                        <div className="card-open">
                            <form onSubmit={submit}>
                                <div
                                    style={{
                                        display: "block",
                                        paddingBottom:"5rem"
                                    }}
                                >
                                    <label style={{ color: "white" }}>
                                        Rating
                                    </label>
                                    <div className="stars-container">
                                        {rate()}
                                    </div>
                                    <InputError
                                        message={errors.stars}
                                        className="mt-2"
                                    />

                                    <label style={{ color: "white" }}>
                                        Title
                                    </label>

                                    <input
                                        class="form-control"
                                        id="title"
                                        value={data.title}
                                        onChange={(e) =>
                                            setData("title", e.target.value)
                                        }
                                        type="text"
                                    ></input>
                                    <InputError
                                        message={errors.title}
                                        className="mt-2"
                                    />

                                    <label style={{ color: "white" }}>
                                        Description
                                    </label>
                                    <textarea
                                        class="form-control"
                                        id="description"
                                        value={data.description}
                                        onChange={(e) =>
                                            setData(
                                                "description",
                                                e.target.value
                                            )
                                        }
                                        rows="3"
                                    ></textarea>

                                    <InputError
                                        message={errors.description}
                                        className="mt-2"
                                    />
                                    <h1 style={{ color: "white" }}> </h1>
                                    <button
                                        class="btn btn-outline-primary"
                                        type="submit"
                                        style={{  marginTop:"1rem" }}
                                    >
                                        submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                            </>
                        ) : (
                            <button
                            type="button"
                            class="btn btn-dark"
                            style={{
                                fontSize: "0.8rem",
                                borderRadius: "0.3rem",
                                color: "white",
                            }}
                            onClick={click}
                        >
                            <div
                                style={{
                                    display: "flex",
                                }}
                            >
                                <AiOutlineForm
                                    style={{
                                        marginRight: "0.5rem",
                                        marginTop: "0.2rem",
                                    }}
                                />{" "}
                                Write a review
                            </div>
                        </button>
                        )}


                {listItems}
            </div>
                          </div>
                          ) : (
                            <div>

                            <h5 class="card-title reviewTitle" style={{textAlign:"center"}}>No reviews yet</h5>
                            {auth.user ? (
                            <>
                               <button
                    type="button"
                    class="btn btn-dark"
                    style={{
                        fontSize: "0.8rem",
                        borderRadius: "0.3rem",
                        color: "white",
                    }}
                    onClick={() => {
                        setOpen();
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                        }}
                    >
                        <AiOutlineForm
                            style={{
                                marginRight: "0.5rem",
                                marginTop: "0.2rem",
                            }}
                        />{" "}
                        Write a review
                    </div>
                </button>

                <div className="reviewProducts">
                    <div
                        className={
                            "reviewBox " + (reviewform ? "expand" : "closed")
                        }
                    >
                        <div className="card-open">
                            <form onSubmit={submit}>
                                <div
                                    style={{
                                        display: "block",
                                    }}
                                >
                                    <label style={{ color: "white" }}>
                                        Rating
                                    </label>
                                    <div className="stars-container">
                                        {rate()}
                                    </div>
                                    <InputError
                                        message={errors.stars}
                                        className="mt-2"
                                    />

                                    <label style={{ color: "white" }}>
                                        Title
                                    </label>

                                    <input
                                        class="form-control"
                                        id="title"
                                        value={data.title}
                                        onChange={(e) =>
                                            setData("title", e.target.value)
                                        }
                                        type="text"
                                    ></input>
                                    <InputError
                                        message={errors.title}
                                        className="mt-2"
                                    />

                                    <label style={{ color: "white" }}>
                                        Description
                                    </label>
                                    <textarea
                                        class="form-control"
                                        id="description"
                                        value={data.description}
                                        onChange={(e) =>
                                            setData(
                                                "description",
                                                e.target.value
                                            )
                                        }
                                        rows="3"
                                    ></textarea>

                                    <InputError
                                        message={errors.description}
                                        className="mt-2"
                                    />
                                    <h1 style={{ color: "white" }}> </h1>
                                    <button
                                        class="btn btn-outline-primary"
                                        type="submit"
                                    >
                                        submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                            </>
                        ) : (
                            <button
                            type="button"
                            class="btn btn-dark"
                            style={{
                                fontSize: "0.8rem",
                                borderRadius: "0.3rem",
                                color: "white",
                            }}
                            onClick={click}
                        >
                            <div
                                style={{
                                    display: "flex",
                                }}
                            >
                                <AiOutlineForm
                                    style={{
                                        marginRight: "0.5rem",
                                        marginTop: "0.2rem",
                                    }}
                                />{" "}
                                Write a review
                            </div>
                        </button>
                        )}
                            </div>


                          )}

        </div>
    );
}
