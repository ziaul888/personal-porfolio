"use client";

import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import SectionHeader from "@/components/SectionHeader";
import useSectionView from "@/lib/custom_hook/useSectionInView";

const Experience = () => {
    const { ref } = useSectionView("Experience", 0.75);

    return (
        <section id="experience" ref={ref} className="scroll-mt-28">
            <SectionHeader>
                Experiences
            </SectionHeader>
            <VerticalTimeline lineColor="">
                {experiencesData?.map((items,index) =>(
                    <React.Fragment key={index}>
                      <VerticalTimelineElement contentStyle={{
                          background:'#f3f4f6',
                          boxShadow:"none",
                          border:"1px solid rgb(0,0,0, 0.05)",
                          textAlign:"left",
                          padding:'1.3rem,3rem'

                      }}
                      contentArrowStyle={{
                          borderRight: '.4rem solid #9ca3af'
                      }}
                      date={items?.date}
                      icon={items?.icon}
                     iconStyle={{
                         background:"white",
                         fontSize:"1.4rem"
                     }}
                      >
                       <h3 className="font-semibold capitalize">{items?.title}</h3>
                          <p className="font-normal !mt-0">{items?.location}</p>
                          <p className="!mt-0 !font-normal text-gray-700">{items?.description}</p>
                      </VerticalTimelineElement>
                    </React.Fragment>
                ))}
            </VerticalTimeline>
        </section>
    );
};

export default Experience;
