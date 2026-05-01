import React, { useState } from "react";
import RotatingText from "./animation/textrotating/textrotating";
import { BackgroundGradient } from "./animation/bggradient/bggradient";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function Profile() {
  const [activeTab, setActiveTab] = useState("BackEnd");

  return (
    <>
      <div style={{ backgroundColor: "#101f26" }}>
        <div>
          <div>
            <img className="blur w-100" src="/profil.jpg" />
          </div>
          <div className="container my-5 position-absolute mb-5 mb-lg-0 mb-md-0 start-0 end-0 " style={{ top: "30%" }}>
            <div className="text-center border rounded-5 p-4  text-white mx-5" style={{ opacity: 0.6, backgroundColor: "#0b3835" }}>
              <div className="fw-bold">
                <h1>
                  Hello Im Zio
                  <RotatingText
                    style={{ width: "fit-content" }}
                    texts={["Fullstack Developer", "Mobile Developer", "AI-Centric", "Ganteng", "Anjay"]}
                    mainClassName="bg-danger px-5 rounded-3 d-inline-block mx-3"
                    staggerFrom={"last"}
                    initial={{ y: "100%" }}
                    loop={true}
                    autoPlay={true}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "-120%" }}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={2800}
                  />
                </h1>
                Hi! I’m a 14-year-old programmer who loves turning ideas into reality through code. I enjoy learning new technologies, creating websites, and developing small projects that challenge my creativity and logic. Even though I’m
                still young, I’m passionate about improving my skills and growing into a developer who builds meaningful and innovative digital solutions.
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <div className="my-5 container rounded-5 p-5  w-100 mt-5 mt-lg-0 mt-md-0 pt-5 pt-lg-0 pt-md-0">
          <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900 container ">
            <div className="row gap-4 gap-md-4 gap-lg-0">
              <div className="col-12 text-start align-self-center px-5 col-md-6 col-lg-6">
                <h1>About Me</h1>
                <div>
                  I am a 14-year-old student who is passionate about programming and technology. I started learning to code at a young age and quickly became interested in how software works behind the scenes. I have experience with several
                  programming languages such as Python, JavaScript, and C++, and I enjoy creating simple games, websites, and small projects to improve my skills. I love solving problems through logic and creativity, and I’m always eager to
                  learn new things about coding and software development. My goal is to become a professional programmer who can build useful and innovative applications in the future.
                </div>
              </div>
              <div className="col-12   col-md-6 col-lg-6 text-center">
                <div className="h-100 position-relative w-100  d-flex justify-content-center ">
                  <img src="/omjoko.jpeg" className="w-75 rounded rounded-5" />
                </div>
              </div>
            </div>
          </BackgroundGradient>
        </div>
        <div className="row container mx-auto my-5 gap-4 gap-md-0 gap-lg-0">
          <div className="text-center col-12 col-md-3 col-lg-3">
            <div className="mx-5">
              <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900  ">
                <img src="/javascript.png" className="w-75 rounded rounded-3  m-auto my-3" />
                <h5>Java Script</h5>
              </BackgroundGradient>
            </div>
          </div>
          <div className="text-center col-12 col-md-3 col-lg-3 ">
            <div className="mx-5">
              <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900 container ">
                <img src="/laraveel.png" className="w-75 rounded rounded-3  m-auto my-3" />
                <h5>Laravel</h5>
              </BackgroundGradient>
            </div>
          </div>
          <div className="text-center col-12 col-md-3 col-lg-3">
            <div className="mx-5">
              <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900 container ">
                <img src="/okk.png" className="w-75 rounded rounded-3  m-auto my-3" />
                <h5>Tailwind</h5>
              </BackgroundGradient>
            </div>
          </div>
          <div className="text-center col-12  col-md-3 col-lg-3">
            <div className="mx-5">
              <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900 container ">
                <img src="/atom.png" className="w-75 rounded rounded-3  m-auto my-3" />
                <h5>React.js</h5>
              </BackgroundGradient>
            </div>
          </div>
        </div>
        <div className="container text-center my-5">
          <div className="d-flex justify-content-center">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className={"nav-link" + (activeTab === "BackEnd" ? " active" : "")}
                  onClick={() => setActiveTab("BackEnd")}
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  BackEnd
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={"nav-link" + (activeTab === "FrontEnd" ? " active" : "")}
                  onClick={() => setActiveTab("FrontEnd")}
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  FrontEnd
                </button>
              </li>
            </ul>
          </div>
          <div className="tab-content text-light" id="pills-tabContent">
            <div className={"tab-pane fade" + (activeTab === "BackEnd" ? " show active" : "")} id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
              <div className="row">
                <div className="col-6">
                  <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900 container ">
                    <div className="text-dark">
                      <div className="border-success">Reqres Database</div>
                      <div className="">Suspendisse sit amet neque egestas, porta neque id, fermentum nulla. Maecenas pretium eget risus sit ame</div>
                      <div>
                        <img src="/ig.png" className="w-25 m-auto mt-2" />
                      </div>
                    </div>
                  </BackgroundGradient>
                </div>
                <div className="col-6">
                  <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900 container ">
                    <div className="text-dark">
                      <div className="border-success">Reqres Database</div>
                      <div className="">Suspendisse sit amet neque egestas, porta neque id, fermentum nulla. Maecenas pretium eget risus sit ame</div>
                      <div>
                        <img src="/ig.png" className="w-25 m-auto mt-2" />
                      </div>
                    </div>
                  </BackgroundGradient>
                </div>
              </div>
            </div>
            <div className={"tab-pane fade" + (activeTab === "FrontEnd" ? " show active" : "")} id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
              <div className="row">
                <div className="col-6">
                  <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900 container ">
                    <div className="text-dark">
                      <div className="border-success">Reqres Database</div>
                      <div className="">Suspendisse sit amet neque egestas, porta neque id, fermentum nulla. Maecenas pretium eget risus sit ame</div>
                      <div>
                        <Swiper
                          slidesPerView={1}
                          spaceBetween={30}
                          loop={true}
                          pagination={{
                            clickable: true,
                          }}
                          navigation={true}
                          modules={[Pagination, Navigation]}
                          className="mySwiper"
                        >
                          <SwiperSlide>
                            <img src="/X.png" />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img src="/ig.png" />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img src="/okk.png" />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img src="/omjoko.png" />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img src="/profil.png" />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img src="/wa.png" />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img src="/yutub.png" />
                          </SwiperSlide>
                        </Swiper>
                      </div>
                    </div>
                  </BackgroundGradient>
                </div>
                <div className="col-6">
                  <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900 container ">
                    <div className="text-dark">
                      <div className="border-success">Reqres Database</div>
                      <div className="">Suspendisse sit amet neque egestas, porta neque id, fermentum nulla. Maecenas pretium eget risus sit ame</div>
                      <div>
                        <img src="/X.png" className="w-25 m-auto mt-2" />
                      </div>
                    </div>
                  </BackgroundGradient>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-light" style={{ backgroundColor: "#15161b" }}>
          <div className="row container m-auto">
            <div className="col-6">
              <div className="w-50 m-auto ">
                <h2>Get In Touch</h2>
                <div>Got a question?</div>
                <div> Want to discuss an idea? Let's start the conversation."</div>
                <div className="row w-100">
                  <div className="col-3 ">
                    <a target="_blank" href="https://www.instagram.com/zioonacci">
                      <img src="/ig.png" className="w-75 rounded rounded-3  m-auto my-3" />
                    </a>
                  </div>
                  <div className="col-3 ">
                    <a href="https://x.com">
                      <img src="/x.png" className="w-75 rounded rounded-3  m-auto my-3" />
                    </a>
                  </div>
                  <div className="col-3 ">
                    <a href="https://youtube.com">
                      <img src="/yutub.png" className="w-75 rounded rounded-3  m-auto my-3" />
                    </a>
                  </div>
                  <div className="col-3 ">
                    <a href="https://snapchat.com">
                      <img src="/sc.png" className="w-75 rounded rounded-3  m-auto my-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex gap-4 w-50 ">
                <div className="p-4">
                  <a href="https://wa.me/62895345563425" target="_blank" style={{ textDecoration: "none" }}>
                    <div className="p-2 text-center" style={{ backgroundColor: "#052e30", borderRadius: "10px", color: "white" }}>
                      <img src="/wa.png" height={100} width={100} className="d-block" style={{ objectFit: "cover" }} />
                      <div className="text-center">Whatsapp</div>
                    </div>
                  </a>
                </div>

                <div className="p-4">
                  <a href="https://wa.me/62895345563425" target="_blank" style={{ textDecoration: "none" }}>
                    <div className="p-2 text-center" style={{ backgroundColor: "#052e30", borderRadius: "10px", color: "white" }}>
                      <img src="/gmail.png" height={100} width={100} className="d-block" style={{ objectFit: "cover" }} />
                      <div className="text-center">Gmail</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
