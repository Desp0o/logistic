import React from 'react'
import "./counting.css"
import CountUp  from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';
import { Fade } from 'react-reveal';

export default function Counting() {
  return (
    <>
    <div className="counting_numbers">
        <Fade bottom><div className="num_block">
            <div className="num_block_inner">
                <p className="number">
                <CountUp start={0} end={4100} duration={1.5} delay={0.06} suffix={"+"}>
                        {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall={true}>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                        )}
                        </CountUp>    
                </p>
                <p className="under_txt">Deliveries</p>
            </div>
        </div></Fade>

        <Fade bottom delay={200}><div className="num_block">
            <div className="num_block_inner">
                <p className="number">
                <CountUp start={0} end={3800} duration={1.7} delay={0.08} suffix={"+"}>
                        {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall={true}>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                        )}
                        </CountUp>    
                </p>
                <p className="under_txt">Happy Clinets</p>
            </div>
        </div></Fade>

        <Fade bottom delay={300}><div className="num_block">
            <div className="num_block_inner">
                <p className="number">
                <CountUp start={0} end={20} duration={1.9} delay={0.06} suffix={"+"}>
                        {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall={true}>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                        )}
                        </CountUp>    
                </p>
                <p className="under_txt">Dispatchers</p>
            </div>
        </div></Fade>

        <Fade bottom delay={400}><div className="num_block">
            <div className="num_block_inner">
                <p className="number">
                <CountUp start={0} end={200} duration={2.1} delay={0.06} suffix={"+"}>
                        {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall={true}>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                        )}
                        </CountUp>    
                </p>
                <p className="under_txt">Drivers</p>
            </div>
        </div></Fade>
    </div>

    {/*ციფრების თვლა რესპონსივი*/}
    <div className="counting_numbers_responsive">
        <Fade left><div className="num_block">
            <div className="num_block_inner">
                <p className="number">
                <CountUp start={0} end={4100} duration={1} delay={0.06} suffix={"+"}>
                        {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall={true}>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                        )}
                    </CountUp>    
                </p>
                <p className="under_txt">Deliveries</p>
            </div>
        </div></Fade>

        <Fade right delay={200}><div className="num_block">
            <div className="num_block_inner">
                <p className="number">
                <CountUp start={0} end={3800} duration={1} delay={0.08} suffix={"+"}>
                        {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall={true}>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                        )}
                    </CountUp>    
                </p>
                <p className="under_txt">Happy Clinets</p>
            </div>
        </div></Fade>

        <Fade left delay={300}><div className="num_block">
            <div className="num_block_inner">
                <p className="number">
                <CountUp start={0} end={20} duration={1} delay={0.06} suffix={"+"}>
                        {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall={true}>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                        )}
                    </CountUp>    
                </p>
                <p className="under_txt">Dispatchers</p>
            </div>
        </div></Fade>

        <Fade right delay={400}><div className="num_block">
            <div className="num_block_inner">
                <p className="number">
                <CountUp start={0} end={200} duration={1} delay={0.06} suffix={"+"}>
                        {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall={true}>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                        )}
                    </CountUp>    
                </p>
                <p className="under_txt">Drivers</p>
            </div>
        </div></Fade>
    </div>
    </>
  )
}
