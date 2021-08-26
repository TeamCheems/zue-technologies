import React from "react";
import Icofont from 'react-icofont';
import CountUp from "react-countup";

export default function Client() {
  return (
        <section id="client" class="client bg-dark vh-20">
          <div className="text-center pt-5 font-color h2" style={{ fontWeight: 'bold'}}>Our Statistics </div>
      <div class="container" data-aos="fade-up">

        <div class="row">

          <div class="col-lg-3 col-md-6">
            <div class="count-box">
            <div class="count-con">
              <i class="icofont-simple-smile"></i>
              <CountUp
              start={0}
              end={92}
              duration={5}
              />
              <p><b>Clients</b></p>
            </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 mt-5 mt-md-0">
            <div class="count-box">
            <div class="count-con">
              <i class="icofont-document-folder"></i>
              <CountUp
              start={0}
              end={86}
              duration={5}
              />
              <p><b>Projects</b></p>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div class="count-box">
            <div class="count-con">
              <i class="icofont-live-support"></i>
              <CountUp
              start={0}
              end={1560}
              duration={5}
              />
              <p><b>Hours Of Work</b></p>
            </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div class="count-box">
            <div class="count-con">
              <i class="icofont-users-alt-5"></i>
              <CountUp
              start={0}
              end={100}
              duration={5}
              />
              <p><b>Diligent Workers</b></p>
            </div>
            </div>
          </div>

        </div>

      </div>
    </section>
        )}