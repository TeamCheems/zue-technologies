import React from "react";
import Icofont from 'react-icofont';
import CountUp from "react-countup";

export default function Client() {
  return (
        <section id="client" class="client bg-dark" style = {{minHeignt: '20vh'}}>
          <div className="text-center pt-4 font-color h2" style={{ fontWeight: 'bold'}}>Our Statistics </div>
      <div class="container" data-aos="fade-up" data-aos-duration="2000">

        <div class="row">

          <div class="col-lg-3 col-md-6">
            <div class="count-box">
            <div class="count-con">
              <i class="icofont-simple-smile"></i>
              <CountUp
              start={0}
              end={160}
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
              end={120}
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
              end={8400}
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
              end={19}
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