import React from "react";
import ScooterImg from "../../assets/hero-scooter-img.png";
import ScooterBg from "../../assets/scooter-bg-img.png";
import ScooterBorder1 from "../../assets/bg-border-1.png"
import ScooterBorder2 from "../../assets/bg-border-2.png"
export const HeroSection = () => {
    return (
        <>
            <div className="container col-xxl-8 ">
                <div className="row flex-lg-row-reverse align-items-center g-5 ">
                    <div className="col-10 col-sm-8 col-lg-6 position-relative">
                        <img src={ScooterImg} className="d-block mx-lg-auto img-fluid ScooterImg " alt="ScooterImg"/>
                        <img className="ScooterBgImg w-50" src={ScooterBg} alt="ScooterBg" />
                        <img className="ScooterBorder1Img" src={ScooterBorder1} alt="ScooterBorder1" />
                        <img className="ScooterBorder2Img" src={ScooterBorder2} alt="ScooterBorder2" />
                    </div>
                    <div class="col-lg-6 pt-5">
                        <h3 className="fs-1 fw-normal">Fair price ride</h3>
                        <h1 className="display-3 fw-bolder lh-1 mb-3">
                            Rent our <span className="text-warning">Scooter</span>
                        </h1>
                        <p className="lh-lg">
                            Lorem Ipsum has been the industry's standard dummy text ever since
                            the 1500s, when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};
